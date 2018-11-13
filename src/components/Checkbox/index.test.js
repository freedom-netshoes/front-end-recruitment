import Checkbox from './';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Checkbox label="M" handleCheckboxChange={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
