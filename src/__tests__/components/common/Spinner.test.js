import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../components/common/Spinner';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Spinner />);
});

describe('Spinner Component', () => {
  it('should have one img element', () => {
    const img = wrapper.find('img');
    expect(img.length).toBe(1);
  });
});
