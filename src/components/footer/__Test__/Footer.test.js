import React from "react";
import { shallow } from "../../../enzyme";
import Footer from "../Footer";

describe("Footer tests", () => {
  it("renders Footer Component without Props", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".Footer")).toHaveLength(1);
  });
});
