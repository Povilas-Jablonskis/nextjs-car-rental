import {
  TransitionContext,
  TransitionContextType,
} from "@/app/_contexts/transitionContext";
import { fireEvent, render, screen } from "@testing-library/react";
import CarListTitle from "../title";

const pushMock = jest.fn();

const searchParamsMock = { test: "value" };

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

describe("CarListTitle", () => {
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
        <CarListTitle searchParams={searchParamsMock}>
          Go to dashboard
        </CarListTitle>
      </TransitionContext.Provider>,
    );
  }

  it("calls startTransition and router.push on click", () => {
    const startTransitionMock = jest.fn((cb) => cb());

    renderWithContext({ startTransition: startTransitionMock });

    fireEvent.click(screen.getByRole("button"));

    expect(startTransitionMock).toHaveBeenCalledTimes(1);
    expect(startTransitionMock).toHaveBeenCalledWith(expect.any(Function));
    expect(pushMock).toHaveBeenCalledWith(
      `/cars?${new URLSearchParams(searchParamsMock).toString()}`,
    );
  });

  it("disables the button when isPending is true", () => {
    renderWithContext({ isPending: true });

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});
