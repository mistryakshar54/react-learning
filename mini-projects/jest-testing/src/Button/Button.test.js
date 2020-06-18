import React from "react";
import { render, cleanup, waitForElement, fireEvent, act } from "@testing-library/react";
import PostBtn from "./Button";

afterEach(cleanup);

it("fetches and displays data", async () => {
  const btnClick = jest.fn();
    const props = {
      label: "abc",
      testId: "def",
      clickHandler: btnClick,
    };
  let renderedComp ;
  act(() => {
    renderedComp = render(<PostBtn {...props} />);
    // fireEvent.click( renderedComp.findByTestId('def') );
  });
  console.log(renderedComp.debug());
  console.log(renderedComp.findByTestId('def'));
//   expect(btnClick).toHaveBeenCalled();
});
