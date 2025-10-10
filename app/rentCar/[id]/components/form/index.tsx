import PrimaryButton from "@/app/_components/buttons/primary";
import CardNumberInput from "@/app/_components/controls/cardNumberInput";
import Checkbox from "@/app/_components/controls/checkbox";
import FormCheckbox from "@/app/_components/controls/Form/checkbox";
import FormInput from "@/app/_components/controls/Form/input";
import SecuritySafetyIcon from "@/app/_components/icons/securitySafety";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { rentCar } from "../../../../_lib/actions";
import { FormSchema, formSchema, PaymentMethod } from "../../types";
import PaymentMethodComponent from "./paymentMethod";
import RentalInfoPicker from "./rentalInfoPicker";
import FormSection from "./section";

export default function RentalForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: FormSchema) {
    setIsLoading(true);
    await rentCar(data);
    setIsLoading(false);
  }

  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: { paymentMethod: PaymentMethod.CC },
  });
  const { control, handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-8">
        <FormSection
          className="grid gap-5 gap-x-8 sm:grid-cols-2 sm:gap-y-6"
          title="Billing Info"
          subTitle="Please enter your billing info"
          step={1}
        >
          <FormInput
            name="customerName"
            label="Name"
            placeholder="Your name"
            control={control}
          />
          <FormInput
            name="customerTelNumber"
            type="tel"
            label="Phone Number"
            placeholder="Phone number"
            control={control}
          />
          <FormInput
            name="customerAddress"
            label="Address"
            placeholder="Address"
            control={control}
          />
          <FormInput
            name="customerTownCity"
            label="Town / City"
            placeholder="Town or city"
            control={control}
          />
        </FormSection>
        <FormSection
          className="grid gap-y-6 2xl:gap-y-8"
          title="Rental Info"
          subTitle="Please select your rental date"
          step={2}
        >
          <RentalInfoPicker type="pickup" />
          <RentalInfoPicker type="dropoff" />
        </FormSection>
        <FormSection
          className="grid gap-y-6"
          title="Payment Method"
          subTitle="Please enter your payment method"
          step={3}
        >
          <PaymentMethodComponent paymentMethod={PaymentMethod.CC}>
            <CardNumberInput
              name="cardNumber"
              label="Card Number"
              placeholder="Card number"
              inverted
              control={control}
            />
            <FormInput
              name="expirationDate"
              type="date"
              label="Expration Date"
              placeholder="DD / MM / YY"
              inverted
              control={control}
            />
            <FormInput
              name="cardHolder"
              label="Card Holder"
              placeholder="Card holder"
              inverted
              control={control}
            />
            <FormInput
              name="cvc"
              type="number"
              label="CVC"
              placeholder="CVC"
              inverted
              control={control}
            />
          </PaymentMethodComponent>
          <PaymentMethodComponent paymentMethod={PaymentMethod.PayPal}>
            <FormInput
              name="email"
              type="email"
              label="E-mail"
              placeholder="E-mail"
              inverted
              control={control}
            />
          </PaymentMethodComponent>
          <PaymentMethodComponent paymentMethod={PaymentMethod.Bitcoin}>
            <FormInput
              name="email"
              type="email"
              label="E-mail"
              placeholder="E-mail"
              inverted
              control={control}
            />
          </PaymentMethodComponent>
        </FormSection>
        <FormSection
          className="grid gap-y-5 2xl:gap-y-6"
          title="Confirmation"
          subTitle="We are getting to the end. Just few clicks and your rental is ready!"
          step={4}
        >
          <div className="grid gap-y-5 2xl:gap-y-6">
            <Checkbox
              id="agreeWithMarketing"
              label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
              className="gap-x-5 rounded-lg bg-background px-4 py-2.5 2xl:px-8 2xl:py-4"
            />
            <FormCheckbox
              name="agreeWithTerms"
              id="agreeWithTerms"
              control={control}
              label="I agree with our terms and conditions and privacy policy."
              className="gap-x-5 rounded-lg bg-background px-4 py-2.5 2xl:px-8 2xl:py-4"
            />
          </div>
          <div className="mt-6 grid">
            <PrimaryButton
              disabled={isLoading}
              type="submit"
              className="mb-8 place-self-start !px-8 !py-4 !font-bold"
            >
              <svg
                className={clsx("-ml-1 mr-3 size-5 animate-spin text-white", {
                  hidden: !isLoading,
                })}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Rent Now
            </PrimaryButton>
            <SecuritySafetyIcon className="mb-3 2xl:mb-4" />
            <p className="mb-1 text-base font-semibold text-secondary-500">
              All your data are safe
            </p>
            <p className="font-medium text-secondary-300">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </FormSection>
      </form>
    </FormProvider>
  );
}
