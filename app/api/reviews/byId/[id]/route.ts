import { InfiniteQueryResponse } from "@/app/_lib/hooks";
import { PrismaClient, Reviews } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
  id: string;
}>;

export async function GET(
  request: NextRequest,
  segmentData: { params: Params },
) {
  try {
    const { id } = await segmentData.params;
    const prisma = new PrismaClient();

    const searchParams = request.nextUrl.searchParams;

    const currentPageNumber = Number(searchParams.get("pageNumber"));
    const pageSize = Number(searchParams.get("pageSize"));

    const count = await prisma.reviews.count({
      where: {
        carId: { equals: id },
      },
    });

    const reviews = await prisma.reviews.findMany({
      skip: currentPageNumber * pageSize,
      take: pageSize,
      where: {
        carId: { equals: id },
      },
    });

    const nextPageNumberCandidate = currentPageNumber + 1;
    const nextPageNumber =
      nextPageNumberCandidate * pageSize < Number(count)
        ? nextPageNumberCandidate
        : null;

    return NextResponse.json<InfiniteQueryResponse<Reviews>>({
      data: reviews,
      pageNumber: nextPageNumber,
    });
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json(
      { error: "Failed to fetch reviews." },
      { status: 500 },
    );
  }
}
