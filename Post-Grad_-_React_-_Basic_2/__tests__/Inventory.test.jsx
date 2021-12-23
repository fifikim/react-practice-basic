import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Inventory from "../src/Inventory";

Enzyme.configure({adapter: new Adapter()});

describe("Inventory", () => {
  let wrapper;
  let items;
  
  beforeEach(() => {
    const originalItems = [
      {id: 1, name: "foo", quantity: 1},
      {id: 2, name: "bar", quantity: 0},
      {id: 3, name: "baz", quantity: 3},
    ];
    items = originalItems.map(e => ({...e}));
    wrapper = mount(<Inventory items={originalItems}/>);
  });
  
  describe("rendering", () => {
    it('has an element with a \'data-test="items"\'' + 
       'class with items.length children', () => {
      const actualItems = wrapper.find('[data-test="items"]').hostNodes();
      expect(actualItems.exists()).toBe(true);
      expect(actualItems.children().length).toEqual(items.length);
    });
    
    test('all items have \'data-test="item-name"\'' +
         'with correct names', () => {
      const names = wrapper.find('[data-test="item-name"]').hostNodes();
      expect(names.exists()).toBe(true);
      expect(names.length).toEqual(items.length);
      const actualNames = names.map(e => e.at(0).text());
      const expectedNames = items.map(e => e.name);
      expect(actualNames).toEqual(expectedNames);
    });
    
    test('all items have \'data-test="item-qty"\'' +
         'with correct quantities', () => {
      const qtys = wrapper.find('[data-test="item-qty"]').hostNodes();
      expect(qtys.exists()).toBe(true);
      expect(qtys.length).toEqual(items.length);
      const actualQtys = qtys.map(e => +e.at(0).text());
      const expectedQtys = items.map(e => e.quantity);
      expect(actualQtys).toEqual(expectedQtys);
    });
    
    test('all items have data-test="increment-qty"', () => {
      const incs = wrapper.find('[data-test="increment-qty"]').hostNodes();
      expect(incs.exists()).toBe(true);
      expect(incs.length).toEqual(items.length);
    });

    test('all items have data-test="decrement-qty"', () => {
      const decs = wrapper.find('[data-test="decrement-qty"]').hostNodes();
      expect(decs.exists()).toBe(true);
      expect(decs.length).toEqual(items.length);
    });
  });
  
  describe("interactivity", () => {
    test("incrementing quantities works", () => {
      const incs = wrapper.find('[data-test="increment-qty"]').hostNodes();
      expect(incs.exists()).toBe(true);
      expect(incs.length).toEqual(items.length);
      const qtys = wrapper.find('[data-test="item-qty"]').hostNodes();
      expect(qtys.exists()).toBe(true);
      expect(qtys.length).toEqual(items.length);
      
      for (let i = 1; i < 4; i++) {
        incs.forEach(e => e.simulate("click"));
        const actualQtys = qtys.map(e => +e.at(0).text());
        const expectedQtys = items.map(e => e.quantity + i);
        expect(actualQtys).toEqual(expectedQtys);
      }
    });
    
    test("decrementing quantities works", () => {
      const decs = wrapper.find('[data-test="decrement-qty"]').hostNodes();
      expect(decs.exists()).toBe(true);
      expect(decs.length).toEqual(items.length);
      const qtys = wrapper.find('[data-test="item-qty"]').hostNodes();
      expect(qtys.exists()).toBe(true);
      expect(qtys.length).toEqual(items.length);
      
      for (let i = 1; i < 4; i++) {
        decs.forEach(e => e.simulate("click"));
        const actualQtys = qtys.map(e => +e.at(0).text());
        const expectedQtys = items.map(e => Math.max(0, e.quantity - i));
        expect(actualQtys).toEqual(expectedQtys);
      }
    });
    
    test("incrementing and decrementing together", () => {
      const decs = wrapper.find('[data-test="decrement-qty"]').hostNodes();
      expect(decs.exists()).toBe(true);
      expect(decs.length).toEqual(items.length);
      const incs = wrapper.find('[data-test="increment-qty"]').hostNodes();
      expect(incs.exists()).toBe(true);
      expect(incs.length).toEqual(items.length);
      const qtys = wrapper.find('[data-test="item-qty"]').hostNodes();
      expect(qtys.exists()).toBe(true);
      expect(qtys.length).toEqual(items.length);
      let expectedQtys = items.map(e => e.quantity);
      
      [1, -1, -1, 1, -1, 1, 1, -1, 1, -1, 1].forEach(step => {
        [decs, null, incs][step+1]
          .forEach(e => e.simulate("click"))
        ;
        const actualQtys = qtys.map(e => +e.at(0).text());
        expectedQtys = expectedQtys.map(e => Math.max(0, e + step));
        expect(actualQtys).toEqual(expectedQtys);
      });
    });
  });
});
