import Shelf from './';

import store from '../../services/store';

describe('Shelf', () => {
  
  it('should mount correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
      <Shelf />
      </Provider>
    );
      
    expect(wrapper).toMatchSnapshot();
  });
});