import React from "react";
import { render, cleanup, waitForElement, act, fireEvent } from "@testing-library/react";
import PostComponent from "./Post";
import fetchData from "../utls/utils";
jest.mock("../utls/utils"); // this happens automatically with automocking

afterEach(cleanup);

let mockResp = {
  data: { userId: 1, id: 1, title: "sample title" },
  message: "",
  status: 200,
};
test("Renders component", async () => {
  fetchData.mockResolvedValueOnce(mockResp);
  const { getByTestId } = render(<PostComponent />);
  expect(getByTestId("loading")).toHaveTextContent("Loading");
  const currentPostSpan = await waitForElement(() => getByTestId("currentPost"));
  expect(currentPostSpan).toHaveTextContent("sample title");

  expect(fetchData).toHaveBeenCalledTimes(1);
  expect(fetchData).toHaveBeenCalledWith(1);
});

test("Renders next post on clicking next button ", async () => {
  let nextMockResp = { ...mockResp, data: { ...mockResp.data, title: "next title" } };

  fetchData
    .mockResolvedValueOnce(mockResp)
    .mockResolvedValueOnce(nextMockResp);

  let renderedComp;
  renderedComp = render(<PostComponent />);
  const nextButton = await waitForElement(() =>renderedComp.getByTestId("nextBtn"));
  
  act(() => {
    fireEvent.click(nextButton);
  });

  const currentPost = await waitForElement(() =>renderedComp.getByTestId("currentPost"));
  expect(fetchData).toHaveBeenCalledTimes(3);
  expect(fetchData).toHaveBeenCalledWith(2);
  expect(currentPost).toHaveTextContent("next title");
});

test("Renders previous post on clicking previous button ", async () => {
  let prevMockResp = { ...mockResp, data: { ...mockResp.data, title: "prev title" } };

  fetchData
    .mockResolvedValueOnce(mockResp)
    .mockResolvedValueOnce(prevMockResp);

  let renderedComp;
  await act( async() => {
    renderedComp = render(<PostComponent />);
  })
  const prevBtn = renderedComp.getByTestId("prevBtn");
  
  act(() => {
    fireEvent.click(prevBtn);
  });

  const currentPost = await waitForElement(() =>renderedComp.getByTestId("currentPost"));
  expect(fetchData).toHaveBeenCalledWith(0);
  expect(currentPost).toHaveTextContent("prev title");
});

test("Renders error span if fetch data throws error", async () => {
  let errorResp = {
    ...mockResp,
    message: "sample error",
    status: 500,
  };

  fetchData.mockResolvedValueOnce(errorResp);

  let renderedComp;
  renderedComp = render(<PostComponent />);
  const errorSpan = await waitForElement(() => renderedComp.getByTestId("error"));
  
  expect(fetchData).toHaveBeenCalledWith(1);
  expect(errorSpan).toHaveTextContent("sample error");
});
