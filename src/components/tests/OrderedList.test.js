import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import OrderedList from '../OrderedList';

describe('Our test suite', () => {

    it('renders all the mocked animal options', () => {
        const animals = ['duck', 'bear', 'whale'];

        const wrapper = render(<OrderedList options={animals} />);

        expect(wrapper.find('.options')).toBeDefined();
        expect(wrapper.find('.value')).toHaveLength(animals.length);
    });

    it('renders no animal options', () => {
        const animals = [];
        const wrapper = shallow(<OrderedList options={animals} />);

        expect(wrapper.find('.empty').exists()).toBe(true);
    });

    it('renders a single animal option', () => {
        const animals = ['duck'];
        const wrapper = mount(<OrderedList options={animals} />);

        expect(wrapper.contains(<li key='duck' className="value">duck</li >)).toBeTruthy();
    });

    it('renders correct text in animal option', () => {
        const animals = ['duck', 'bear', 'whale'];
        const wrapper = mount(<OrderedList options={animals} />);

        expect(wrapper.find('.value').get(0).props.children).toEqual('duck');
    });
});