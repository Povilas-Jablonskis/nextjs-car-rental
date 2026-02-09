"use server";

import { redirect } from "next/navigation";
import { formSchema, FormSchema } from "../rentCar/byId/[id]/types";

export type State = {
  errors?: Record<string, string[]>;
  message?: string | null;
};

export async function rentCar(formData: FormSchema) {
  // Validate form fields using Zod
  const validatedFields = formSchema.safeParse(formData);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to rent a car.",
    };
  }

  redirect("/");
}
