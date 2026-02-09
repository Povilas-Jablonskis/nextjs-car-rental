import FormRadio from "@/app/_components/controls/Form/radio";
import BitcoinIcon from "@/app/_components/icons/bitcoin";
import PayPalIcon from "@/app/_components/icons/payPal";
import VisaMastercardIcon from "@/app/_components/icons/visaMastercard";
import { FormSchema, PaymentMethod } from "@/app/rentCar/byId/[id]/types";

import { useFormContext } from "react-hook-form";

interface PaymentMethodComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  paymentMethod: PaymentMethod;
}

export default function PaymentMethodComponent({
  paymentMethod,
  children,
  ...rest
}: PaymentMethodComponentProps) {
  const { watch, control } = useFormContext<FormSchema>();

  const checked = watch("paymentMethod") === paymentMethod;

  function getIcon() {
    switch (paymentMethod) {
      case PaymentMethod.CC:
        return <VisaMastercardIcon />;
      case PaymentMethod.PayPal:
        return <PayPalIcon />;
      case PaymentMethod.Bitcoin:
        return <BitcoinIcon />;
    }
  }

  return (
    <div
      {...rest}
      className="grid gap-y-5 rounded-xl bg-background p-4 2xl:gap-y-8 2xl:p-6"
    >
      <div className="flex justify-between">
        <FormRadio
          name="paymentMethod"
          id={`${paymentMethod}Radio`}
          label={paymentMethod}
          value={paymentMethod}
          control={control}
        />
        {getIcon()}
      </div>
      {checked && (
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 2xl:gap-y-6">
          {children}
        </div>
      )}
    </div>
  );
}
