import React from "react";
import { shallow } from "../../../enzyme";
import NewsPage from "../NewsPage";

describe("NewsPage tests", () => {
  it("renders NewsPage Component without Props", () => {
    const wrapper = shallow(<NewsPage />);
    expect(wrapper.find(".NewsPage")).toHaveLength(1);
  });
});
