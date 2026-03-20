import { createContext, TransitionStartFunction } from "react";

export type TransitionContextType = {
  isPending?: boolean;
  startTransition?: TransitionStartFunction;
};

export const TransitionContext = createContext<TransitionContextType>({});
