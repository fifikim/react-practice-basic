import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import UniqueList from "../src/components/UniqueList";

describe("UniqueList Basic Functionality", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<UniqueList />);
  });
  
  it("item input element exists", () => {
    expect(wrapper.find(".item-input").hostNodes().exists()).toBe(true);
    expect(wrapper.find(".item-input").hostNodes()).toHaveLength(1);
  });
  
  it("add item button element exists", () => {
    expect(wrapper.find(".add-button").hostNodes().exists()).toBe(true);
    expect(wrapper.find(".add-button").hostNodes()).toHaveLength(1);
  });
  
  it("remove item button element exists", () => {
    expect(wrapper.find(".remove-button").hostNodes().exists()).toBe(true);
    expect(wrapper.find(".remove-button").hostNodes()).toHaveLength(1);
  }); 
  
  it("clear item button element exists", () => {
    expect(wrapper.find(".clear-button").hostNodes().exists()).toBe(true);
    expect(wrapper.find(".clear-button").hostNodes()).toHaveLength(1);
  }); 
  
  it("items list starts out empty", () => {
    const items = wrapper.find(".items").hostNodes();
    expect(items.text()).toEqual("");
  }); 
  
  it("input starts out empty", () => {
    const input = wrapper.find(".item-input").hostNodes();
    expect(input.text()).toEqual("");
  }); 
  
  it("input value changes on key presses", () => {
    const input = wrapper.find(".item-input").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    expect(input.instance().value).toEqual("apple");
  });
  
  it("item is added after Enter keydown", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(items.text()).toEqual("apple");
  });
  
  it("item is added after clicking the Add Item button", () => {
    const add = wrapper.find(".add-button").hostNodes();
    const input = wrapper.find(".item-input").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    add.simulate("click");
    expect(items.text()).toEqual("apple");
  });
  
  it("duplicate item is not added", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(items.text()).toEqual("apple");
    input.simulate("change", { target: { value: "apple" } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(items.text()).toEqual("apple");
  });
  
  it("item is removed after clicking Remove Item button", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const remove = wrapper.find(".remove-button").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(items.text()).toEqual("apple");
    input.simulate("change", { target: { value: "apple" } });
    remove.simulate("click");
    expect(items.text()).toEqual("");
    expect(input.instance().value).toEqual("");
  });
  
  it("list is cleared after clicking the Clear Items button", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const clear = wrapper.find(".clear-button").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(items.text()).toEqual("apple");
    input.simulate("change", { target: { value: "banana" } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(items.text()).toEqual("applebanana");
    input.simulate("change", { target: { value: "orange" } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(items.text()).toEqual("applebananaorange");
    clear.simulate("click");
    expect(items.text()).toEqual("");
    expect(input.instance().value).toEqual("");
  });
});

describe("UniqueList Advanced Functionality", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<UniqueList />);
  });
  
  it("input is not cleared attempting to clear an empty list", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const clear = wrapper.find(".clear-button").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    clear.simulate("click");
    expect(input.instance().value).toEqual("apple");
    expect(items.text()).toEqual("");
  });
  
  it("input is cleared attempting to clear a list with items in it", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const clear = wrapper.find(".clear-button").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(input.instance().value).toEqual("");
    expect(items.text()).toEqual("apple");
    input.simulate("change", { target: { value: "banana" } });
    expect(input.instance().value).toEqual("banana");
    clear.simulate("click");
    expect(input.instance().value).toEqual("");
    expect(items.text()).toEqual("");
  });
  
  it("input is not cleared attempting to remove something not in the list", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const remove = wrapper.find(".remove-button").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    remove.simulate("click");
    expect(input.instance().value).toEqual("apple");
    expect(items.text()).toEqual("");
    input.simulate("change", { target: { value: "apple" } });
    expect(input.instance().value).toEqual("apple");
    expect(items.text()).toEqual("");
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(input.instance().value).toEqual("");
    expect(items.text()).toEqual("apple");
    input.simulate("change", { target: { value: "apples" } });
    remove.simulate("click");
    expect(input.instance().value).toEqual("apples");
    expect(items.text()).toEqual("apple");
  });
  
  it("input is not cleared attempting to add something already in the list", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const add = wrapper.find(".add-button").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "apple" } });
    add.simulate("click");
    expect(input.instance().value).toEqual("");
    expect(items.text()).toEqual("apple");
    input.simulate("change", { target: { value: "apple" } });
    add.simulate("click");
    expect(input.instance().value).toEqual("apple");
    expect(items.text()).toEqual("apple");
  });
  
  it("input is trimmed before all operations", () => {
    const input = wrapper.find(".item-input").hostNodes();
    const remove = wrapper.find(".remove-button").hostNodes();
    const items = wrapper.find(".items").hostNodes();
    input.simulate("change", { target: { value: "   apple   " } });
    input.simulate("keydown", { 
      key: "Enter",  
      type: "keydown",
      which: 13,
      keyCode: 13,
    });
    expect(input.instance().value).toEqual("");
    expect(items.text()).toEqual("apple");
    input.simulate("change", { target: { value: "  apple  " } });
    remove.simulate("click");
    expect(input.instance().value).toEqual("");
    expect(items.text()).toEqual("");
  });
});