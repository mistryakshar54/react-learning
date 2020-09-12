import React from 'react';
import { mount } from 'enzyme';
import SearchBarComponent from './searchBar';
import { Provider } from 'react-redux';
import MockStore from '../../mocks/MockStore';
test('it shallow mounts the component' , () => {
    const store = new MockStore();
    const dispatch = jest.fn();
    const handleLocSearch = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <SearchBarComponent />
      </Provider>
    );
    const input = wrapper.find("input");
    // console.log("Input" , input.val())
    input.simulate("change", { target: { value: "Hello" } });
    // console.log("Input Changed" , input.val())
    expect(handleLocSearch).toHaveBeenCalled();

    expect( wrapper).toMatchSnapshot();
});