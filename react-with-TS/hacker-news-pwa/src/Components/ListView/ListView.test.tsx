import React from "react";
import Enzyme, { mount } from 'enzyme';
import ListView, { ListViewProps, styles } from "./ListView";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { NewsType } from "../News/News";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    newsData: [
        {
            comments_count: 1,
            domain: 'abc',
            id: 1,
            points: 1,
            time: 123,
            time_ago: 'abc',
            title: 'sample',
            type: 'string',
            url: 'myUrl',
            user: 'ABC'
        },
        {
            comments_count: 3,
            domain: 'abc',
            id: 13,
            points: 1,
            time: 123,
            time_ago: 'abc',
            title: 'sample',
            type: 'string',
            url: 'myUrl',
            user: 'ABC'
        }
    ]
}

const createShallowComponent = (props = defaultProps) => {
    return mount(<ListView {...props} />)
}

test("renders snapshot", () => {
    const component = renderer.create(
        <ListView { ...defaultProps } />
    );
    expect(component).toMatchSnapshot();
});

test('Shows empty when there is no data', () => {
    const wrapper = createShallowComponent({ newsData : [] });
    const emptyHeader = wrapper.find('#emptyListHeader');
    expect(emptyHeader.length).toBe(1);
    expect(emptyHeader.text()).toBe('No Data!!')
});

test('Shows list when there is data', () => {
    const wrapper = createShallowComponent();
    const listItems = wrapper.findWhere( node => node.name() === 'li'   )
    expect(listItems.length).toBe(2);
});

test('Shows list when there is data', () => {
    const wrapper = createShallowComponent();
    const listItems = wrapper.findWhere( node => node.name() === 'li'   )
    expect(listItems.length).toBe(2);
});
