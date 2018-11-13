import Clearfix from './';

describe('Clearfix', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Clearfix />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
