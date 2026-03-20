import { Prisma } from "@prisma/client";
import formatNumber from "../formatNumber";

describe("formatNumber", () => {
  it("should return expected formated number", () => {
    expect(formatNumber(new Prisma.Decimal(80.0))).toBe("$80.00");
    expect(formatNumber(new Prisma.Decimal(0.0))).toBe("$0.00");
    expect(formatNumber(new Prisma.Decimal(69.69))).toBe("$69.69");
    expect(formatNumber(new Prisma.Decimal(69.6969))).toBe("$69.70");
    expect(formatNumber(new Prisma.Decimal(69.6949))).toBe("$69.69");
  });
});
