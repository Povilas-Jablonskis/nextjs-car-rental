import { CarCategory, CarType, PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const prisma = new PrismaClient();

    const searchParams = request.nextUrl.searchParams;

    const categoryRaw = searchParams.get("category");
    const category = categoryRaw
      ? CarCategory[categoryRaw as keyof typeof CarCategory]
      : undefined;

    const values = Object.values(CarType);

    const response = (
      await Promise.all(
        values.map(async (value) => {
          const count = await prisma.cars.count({
            where: {
              type: { equals: value },
              category: { has: category },
            },
          });

          return { [value]: count };
        }),
      )
    ).reduce((acc, curr) => ({ ...acc, ...curr }), {});

    return NextResponse.json(response);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json(
      { error: "Failed to fetch car types." },
      { status: 500 },
    );
  }
}
