import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import PostComponent from "./Post";
import fetchData from "../utls/utils";
jest.mock("../utls/utils"); // this happens automatically with automocking

afterEach(cleanup);

it("fetches and displays data", async () => {
  let mockResp = {
    data: { userId: 1, id: 1, title: "sample title" },
    message: "",
    status: 200,
  };
  fetchData.mockResolvedValueOnce(mockResp);
  const { getByTestId } = render(<PostComponent />);
  expect(getByTestId("loading")).toHaveTextContent("Loading");
  const resolvedSpan = await waitForElement(() => getByTestId("resolved"));
  expect(resolvedSpan).toHaveTextContent("sample title");

  expect(fetchData).toHaveBeenCalledTimes(1);
  expect(fetchData).toHaveBeenCalledWith(1);
});

it("shows error if thrown", async () => {
  let mockResp = {
    data: {},
    message: "Sample Error",
    status: 500,
  };
  fetchData.mockResolvedValueOnce(mockResp);
  const { getByTestId } = render(<PostComponent />);
  expect(getByTestId("loading")).toHaveTextContent("Loading");
  const errorSpan = await waitForElement(() => getByTestId("error"));
  expect(errorSpan).toHaveTextContent("Sample Error");
  expect(fetchData).toHaveBeenCalledTimes(2);
});
