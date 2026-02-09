import { z } from "zod";

export enum PaymentMethod {
  CC = "Credit Card",
  PayPal = "PayPal",
  Bitcoin = "Bitcoin",
}

const baseSchema = z.object({
  customerName: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(1, { message: "You must enter a name" }),
  customerTelNumber: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(1, { message: "You must enter a phone number" }),
  customerAddress: z
    .string({ required_error: "Address is required" })
    .trim()
    .min(1, { message: "You must enter a address" }),
  customerTownCity: z
    .string({ required_error: "Town / City is required" })
    .trim()
    .min(1, { message: "You must enter a town / city" }),
  pickupCity: z
    .string({ required_error: "Pickup city is required" })
    .trim()
    .min(1, { message: "You must enter a pickup city" }),
  pickupDate: z
    .string({ required_error: "Pickup date is required" })
    .trim()
    .date("You must enter a pickup date"),
  pickupTime: z
    .string({ required_error: "Pickup time is required" })
    .trim()
    .time("You must enter a pickup time"),
  dropoffCity: z
    .string({ required_error: "Dropoff city is required" })
    .trim()
    .min(1, { message: "You must enter a dropoff city" }),
  dropoffDate: z
    .string({ required_error: "Dropoff date is required" })
    .trim()
    .date("You must enter a dropoff date"),
  dropoffTime: z
    .string({ required_error: "Dropoff time is required" })
    .trim()
    .time("You must enter a dropoff time"),
  agreeWithTerms: z.literal(true),
});

const ccFormSchema = z.object({
  cardNumber: z
    .string({ required_error: "Card number is required" })
    .length(16, "Card number must contain 16 numbers"),
  expirationDate: z
    .string({ required_error: "Expiration date is required" })
    .trim()
    .date("You must enter a expiration date"),
  cardHolder: z
    .string({ required_error: "Card holder is required" })
    .trim()
    .min(1, { message: "You must enter a card holder" }),
  cvc: z
    .string({ required_error: "CVC is required" })
    .length(3, "CVC must contain 3 numbers"),
  paymentMethod: z.literal(PaymentMethod.CC),
});

const payPalFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("You must enter a email"),
  paymentMethod: z.literal(PaymentMethod.PayPal),
});

const bitcoinFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("You must enter a email"),
  paymentMethod: z.literal(PaymentMethod.Bitcoin),
});

export const formSchema = z
  .discriminatedUnion("paymentMethod", [
    ccFormSchema,
    payPalFormSchema,
    bitcoinFormSchema,
  ])
  .and(baseSchema);

export type FormSchema = z.infer<typeof formSchema>;
