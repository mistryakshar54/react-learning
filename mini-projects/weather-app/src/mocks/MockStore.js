export default class MockStore {
  constructor(initialState = {}) {
    this.dispatch = jest.fn();
    this.subscribe = jest.fn();
    this.getState = jest.fn().mockReturnValue(initialState);
    this.replaceReducer = jest.fn();
  }
}
