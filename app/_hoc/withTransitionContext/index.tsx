import { TransitionContext } from "@/app/_contexts/transitionContext";
import { useTransition } from "react";

export function withTransitionContext<T extends object>(
  WrappedComponent: React.FC<T>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithTransitionContext = (props: T) => {
    const [isPending, startTransition] = useTransition();

    return (
      <TransitionContext.Provider value={{ isPending, startTransition }}>
        <WrappedComponent {...props} />
      </TransitionContext.Provider>
    );
  };

  ComponentWithTransitionContext.displayName = `withTransitionContext(${displayName})`;

  return ComponentWithTransitionContext;
}
