import { CarCategory, PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextRequest, NextResponse } from "next/server";
import { CarSeat } from "./types";

export async function GET(request: NextRequest) {
  try {
    const prisma = new PrismaClient();

    const searchParams = request.nextUrl.searchParams;

    const categoryRaw = searchParams.get("category");
    const category = categoryRaw
      ? CarCategory[categoryRaw as keyof typeof CarCategory]
      : undefined;

    let values = Object.values(CarSeat).map(Number);
    values = values.splice(values.length / 2, values.length / 2);

    const response = (
      await Promise.all(
        values.map(async (value) => {
          const count = await prisma.cars.count({
            where: {
              seats: { equals: value },
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
      { error: "Failed to fetch car seats." },
      { status: 500 },
    );
  }
}
