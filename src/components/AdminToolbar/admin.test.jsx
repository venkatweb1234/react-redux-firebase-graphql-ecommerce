import React from "react";
import AdminToolbar from "./admintool.component";
import { shallow } from "enzyme";
import { findByTestattr } from "../../_Utils/_common_test_functions";

const setup = (props = {}) => {
  const component = shallow(<AdminToolbar {...props} />);
  return component;
};

describe("Admin Tool Bar Ecomm", () => {
  let adminComp;
  beforeEach(() => {
    adminComp = setup();
  });
  it('Should pass the Admin Tool bar data', () =>{
      const wrapper = findByTestattr(adminComp, 'adminToolbattest');
      expect(wrapper.length).toBe(1);
  })
});
