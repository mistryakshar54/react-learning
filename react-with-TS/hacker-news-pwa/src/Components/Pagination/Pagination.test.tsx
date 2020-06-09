import React from "react";
import Enzyme, { shallow, mount} from 'enzyme';
import Pagination, { PaginationProps } from "./Pagination";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps : PaginationProps= {
    currentPage : 1,
    nextPage: () => {}

}
const createShallowComponent = (props = defaultProps) => {
    return shallow( <Pagination {...props} /> )
}

it("renders snapshot", () => {

    const component = renderer.create(
        <Pagination currentPage={1} nextPage={() => {}} />
    );
    expect(component).toMatchSnapshot();
});

test( 'Previous Button is disabled when current page is 0' , () => {
    const wrapper = createShallowComponent({ ...defaultProps, currentPage : 0 } );
    const previousIcon = wrapper.find('#previIcon');
    expect(previousIcon.length).toBe(1);
    expect(previousIcon.prop('disabled')).toBe(true);
});

test( 'Next Button is disabled when current page is the last one' , () => {
    const wrapper = createShallowComponent({ ...defaultProps, currentPage : 17 } );
    const nextIcon = wrapper.find('#nextIcon');
    expect(nextIcon.length).toBe(1);
    expect(nextIcon.prop('disabled')).toBe(true);
});
