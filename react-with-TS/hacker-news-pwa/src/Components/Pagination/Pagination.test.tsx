import * as React from "react";
import Enzyme,{mount} from 'enzyme';
import Pagination from "./Pagination";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

it("renders snapshot", () => {
    const component = renderer.create(
        <Pagination currentPage={1} nextPage={() => {}} />
    );
    expect(component).toMatchSnapshot();
});