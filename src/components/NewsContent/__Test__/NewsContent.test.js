import React from "react";
import { shallow } from "../../../enzyme";
import NewsContent from "../NewsContent";

describe("NewsContent tests", () => {
  it("renders NewsContent Component without Props", () => {
    const wrapper = shallow(<NewsContent />);
    expect(wrapper.find(".NewsContent")).toHaveLength(1);
  });
  it("renders NewsContent Component with Props", () => {
    const data = ['one','two','three']
    const wrapper = shallow(<NewsContent title="demo" newsData={data} />);
    expect(wrapper.find(".NewsContent")).toHaveLength(1);
  });
});
