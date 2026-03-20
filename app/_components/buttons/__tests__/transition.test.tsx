import {
  TransitionContext,
  TransitionContextType,
} from "@/app/_contexts/transitionContext";
import { fireEvent, render, screen } from "@testing-library/react";
import TransitionButton from "../transition";

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: pushMock,
      replace: jest.fn(),
      refresh: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
    };
  },
}));

describe("TransitionButton", () => {
  function renderWithContext({
    isPending,
    startTransition,
  }: TransitionContextType) {
    return render(
      <TransitionContext.Provider
        value={{
          isPending,
          startTransition,
        }}
      >
        <TransitionButton url="/dashboard">Go to dashboard</TransitionButton>
      </TransitionContext.Provider>,
    );
  }

  it("calls startTransition and router.push on click", () => {
    const startTransitionMock = jest.fn((cb) => cb());

    renderWithContext({ startTransition: startTransitionMock });

    fireEvent.click(screen.getByRole("button"));

    expect(startTransitionMock).toHaveBeenCalledTimes(1);
    expect(startTransitionMock).toHaveBeenCalledWith(expect.any(Function));
    expect(pushMock).toHaveBeenCalledWith("/dashboard");
  });

  it("disables the button when isPending is true", () => {
    renderWithContext({ isPending: true });

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});
