import React from "react";
import { shallow } from "../../../enzyme";
import NewsCard from "../NewsCard";

describe("Header tests", () => {
  it("renders NewsCard Component without Props", () => {
    const wrapper = shallow(<NewsCard />);
    expect(wrapper.find(".NewsCard")).toHaveLength(1);
  });
  it("renders NewsCard Component with Props", () => {
    const wrapper = shallow(<NewsCard title="demo" description="description" url="url" image="image" />);
    expect(wrapper.find(".NewsCard")).toHaveLength(1);
  });
});
