import Checkbox from './';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Checkbox label="M" handleCheckboxChange={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should have innerText equals label propertie', () => {
    const label = 'M';
    const wrapper = mount(
      <Checkbox label={label} handleCheckboxChange={() => {}} />
    );

    const text = wrapper.find('span').text();

    expect(text).toEqual(label);
  });

});
