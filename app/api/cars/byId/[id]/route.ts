import { PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
  id: string;
}>;

export async function GET(_: NextRequest, segmentData: { params: Params }) {
  try {
    const { id } = await segmentData.params;
    const prisma = new PrismaClient();

    const car = await prisma.cars.findFirst({
      where: {
        id: { equals: id },
      },
      include: {
        reviews: true,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json(
      { error: "Failed to fetch car." },
      { status: 500 },
    );
  }
}
