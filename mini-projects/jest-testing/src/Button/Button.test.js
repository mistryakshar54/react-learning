import React from "react";
import { render, cleanup, waitForElement, fireEvent, act } from "@testing-library/react";
import PostBtn from "./Button";

afterEach(cleanup);

const props = {
  label: "abc",
  testId: "def",
  clickHandler: () =>{},
};

test("fetches and displays data", async () => {
  const btnClickFn = jest.fn();
  let btnProps = { ...props , clickHandler : btnClickFn };
  let renderedComp = render(<PostBtn {...btnProps} />);
  const buttonComp = await waitForElement(() => renderedComp.findByTestId('def'));
  act(() => {
    fireEvent.click(buttonComp);
  });
  expect(btnClickFn).toHaveBeenCalledTimes(1);
  expect(buttonComp).toHaveTextContent("abc");
});

test("Disables the button when isDisabled is set to true", async () => {
  const btnClickFn = jest.fn();
  let btnProps = { ...props, isDisabled : true ,clickHandler: btnClickFn };
  let renderedComp = render(<PostBtn {...btnProps} />);
  const buttonComp = await waitForElement(() => renderedComp.findByTestId('def'));
  expect(buttonComp).toBeDisabled();
});
