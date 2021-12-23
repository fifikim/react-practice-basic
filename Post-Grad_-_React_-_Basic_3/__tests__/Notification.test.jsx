import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import Notification from "../src/components/Notification";

describe('Notification', () => {
  it('should contain the message I pass in', () => {
    const message = 'Notification to the end-user!';
    const notification = mount(<Notification message={message}/>);
    expect(notification.html()).toContain(message);
  });
});
