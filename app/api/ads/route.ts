import { PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const prisma = new PrismaClient();

    const cars = await prisma.ads.findMany({
      include: {
        car: true,
      },
      take: 2,
    });

    return NextResponse.json(cars);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json(
      { error: "Failed to fetch ads." },
      { status: 500 },
    );
  }
}
