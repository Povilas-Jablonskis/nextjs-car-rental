import { TransitionContext } from "@/app/_contexts/transitionContext";
import { useMemo, useTransition } from "react";

export function withTransitionContext<T extends object>(
  WrappedComponent: React.FC<T>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithTransitionContext = (props: T) => {
    const [isPending, startTransition] = useTransition();

    const theContextValues = useMemo(
      () => ({ isPending, startTransition }),
      [isPending],
    );

    return (
      <TransitionContext.Provider value={theContextValues}>
        <WrappedComponent {...props} />
      </TransitionContext.Provider>
    );
  };

  ComponentWithTransitionContext.displayName = `withTransitionContext(${displayName})`;

  return ComponentWithTransitionContext;
}
