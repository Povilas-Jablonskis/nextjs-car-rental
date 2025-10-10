import { createContext, TransitionStartFunction } from "react";

type TransitionContextType = {
  isPending?: boolean;
  startTransition?: TransitionStartFunction;
};

export const TransitionContext = createContext<TransitionContextType>({});
