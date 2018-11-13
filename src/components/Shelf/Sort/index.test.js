import Sort from './';

import store from '../../../services/store';


describe('Sort', () => {
  it('should mount correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Sort sort='lowestprice' updateSort={() => {}} />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

});
