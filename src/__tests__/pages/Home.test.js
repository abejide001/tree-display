import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'react-bootstrap';
import Home from '../../pages/Home';
import Spinner from '../../components/common/Spinner';

let wrapper;
let containerWrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
  containerWrapper = wrapper.dive();
});

describe('Home Component', () => {
  it('should have two Col elements', () => {
    const col = containerWrapper.find(Col);
    expect(col.length).toBe(2);
  });

  it('should have one Row element', () => {
    const row = containerWrapper.find(Row);
    expect(row.length).toBe(1);
  });

  it('should have one Spinner', () => {
    const spinner = containerWrapper.find(Spinner);
    expect(spinner.length).toBe(1);
  });
});
