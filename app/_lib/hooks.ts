import { Cars, CarType, Prisma, Reviews } from "@prisma/client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CarSeat } from "../api/cars/totalSeats/types";

export interface InfiniteQueryResponse<T extends object> {
  data: T[];
  pageNumber: number | null;
}

export function useGetCarList(
  pageSize: number,
  searchParams: Record<string, string>,
) {
  return useInfiniteQuery<InfiniteQueryResponse<Cars>>({
    queryKey: ["fetchCars", pageSize, searchParams],
    queryFn: async ({ pageParam }) => {
      const params = new URLSearchParams(searchParams);
      const paramsStr = params.size ? `&${params.toString()}` : "";
      const response = await fetch(
        `/api/cars?pageNumber=${pageParam}&pageSize=${pageSize}${paramsStr}`,
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result);
      }

      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageNumber,
  });
}

export function useGetCar(id: string) {
  return useQuery<
    Prisma.CarsGetPayload<{
      include: {
        reviews: true;
      };
    }>
  >({
    queryKey: ["fetchCar", id],
    queryFn: async () => {
      const response = await fetch(`/api/cars/${id}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result);
      }

      return result;
    },
  });
}

export function useGetReviews(pageSize: number, carId: string) {
  return useInfiniteQuery<InfiniteQueryResponse<Reviews>>({
    queryKey: ["fetchReviews", pageSize, carId],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `/api/reviews/${carId}?pageNumber=${pageParam}&pageSize=${pageSize}`,
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result);
      }

      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageNumber,
  });
}

export function useCarTotalTypes(category: string | null) {
  const values = Object.values(CarType);

  const initialData = values.reduce((acc, curr) => {
    return { ...acc, [curr]: 0 };
  }, {});

  return useQuery<Record<string, number>>({
    queryKey: ["fetchCarTotalTypes", category],
    queryFn: async () => {
      const categoryStr = category ? `?category=${category}` : "";
      const response = await fetch(`/api/cars/totalTypes${categoryStr}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result);
      }

      return result;
    },
    initialData,
  });
}

export function useCarTotalSeats(category: string | null) {
  let values = Object.values(CarSeat).map((carSeat) => Number(carSeat));
  values = values.splice(values.length / 2, values.length / 2);

  const initialData = values.reduce((acc, curr) => {
    return { ...acc, [curr]: 0 };
  }, {});

  return useQuery<Record<number, number>>({
    queryKey: ["fetchCarTotalSeats", category],
    queryFn: async () => {
      const categoryStr = category ? `?category=${category}` : "";
      const response = await fetch(`/api/cars/totalSeats${categoryStr}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result);
      }

      return result;
    },
    initialData,
  });
}

export function useAds() {
  return useQuery<
    Prisma.AdsGetPayload<{
      include: {
        car: true;
      };
    }>[]
  >({
    queryKey: ["fetchAds"],
    queryFn: async () => {
      const response = await fetch("/api/ads");
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result);
      }

      return result;
    },
  });
}
