import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from '../Congrats';
import checkPropTypes from 'check-prop-types';


Enzyme.configure({ adapter: new Adapter() })

test("renders without error", () => {
    const wrapper = shallow(<Congrats />);
    const component = wrapper.find('[data-test="component-congrats"]');
    expect(component.length).toBe(1);
});

test("renders message congratulation when `success` prop is true", () => {
    const props = { success: true };
    const wrapper = shallow(<Congrats {...props} />);
    const message = wrapper.find('[data-test="congrats-message"]');
    expect(message.text().length).not.toBe(0);
});


test("renders message congratulation when `success` prop is false", () => {
    const props = { success: false };
    const wrapper = shallow(<Congrats {...props} />);
    const message = wrapper.find('[data-test="congrats-message"]');
    expect(message.text()).toBe('');
});
