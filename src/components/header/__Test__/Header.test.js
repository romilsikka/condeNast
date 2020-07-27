import React from "react";
import { shallow } from "../../../enzyme";
import Header from "../Header";

describe("Header tests", () => {
  it("renders Header Component without Props", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".Header")).toHaveLength(1);
  });
  it("renders Header Component with Props", () => {
    const wrapper = shallow(<Header title="demo" />);
    expect(wrapper.find(".Header")).toHaveLength(1);
  });
});
