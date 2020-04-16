import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Checkbox } from "../checkbox";

Enzyme.configure({ adapter: new Adapter() });

describe("Checkbox", () => {
  it("should show text", () => {
    const wrapper = shallow(<Checkbox />);
    const text = wrapper.find("div div");
    expect(text.text()).toBe("Text goes here");
  });
  it("should hide the button when is clicked", () => {
    const wrapper = shallow(<Checkbox />);
    const checkbox = wrapper.find("input");
    checkbox.simulate("click");
    const text = wrapper.find("div div");
    expect(text.length).toBe(0);
  });
});
