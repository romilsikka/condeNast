import React from "react";
import { shallow } from "../../../enzyme";
import SearchBar from "../SearchBar";
// import sinon from 'sinon';

describe("SearchBar tests", () => {
  it("renders SearchBar Component without Props", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find(".searchBarWrapper")).toHaveLength(1);
  });
  it("renders SearchBar Component with Props", () => {
    const wrapper = shallow(<SearchBar saveKeywords={()=>{}} />);
    expect(wrapper.find(".searchBarWrapper")).toHaveLength(1);
  });
  // it('simulates onkeyUp events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<SearchBar saveKeywords={onButtonClick} />);
  //   wrapper.find('.searchBar').simulate('KeyUp');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});
