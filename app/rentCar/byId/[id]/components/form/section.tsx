interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  subTitle?: string;
  step?: number;
}

export default function FormSection({
  title,
  subTitle,
  step,
  children,
  ...rest
}: FormSectionProps) {
  return (
    <div className="rounded-xl bg-white p-4 2xl:p-6">
      <div className="mb-6 flex justify-between font-medium text-secondary-300 2xl:mb-8">
        <div className="grid gap-y-1">
          <p className="text-base font-bold text-secondary-500 sm:text-xl">
            {title}
          </p>
          <p>{subTitle}</p>
        </div>
        <p className="sm:self-end">Step {step} of 4</p>
      </div>
      <div {...rest}>{children}</div>
    </div>
  );
}
