import React from 'react';
import { shallow } from 'enzyme';
import { Button, Card } from 'react-bootstrap';
import SingleTreeDisplay from '../../../components/tree/SingleTreeDisplay';

let wrapper;
let cardWrapper;

const baseProps = {
  tree: {
    name: 'Baobab',
    species_name: '',
    image:''
  },
  hideImage: jest.fn(),
};

beforeEach(() => {
  wrapper = shallow(<SingleTreeDisplay {...baseProps} />);
  cardWrapper = wrapper.dive().dive();
});

describe('Single Tree Componenet', () => {
  it('should have one Card.Title element', () => {
    const cardTitle = cardWrapper.find(Card.Title);
    expect(cardTitle.length).toBe(1);
  });

  it('should contain tree name', () => {
    const cardTitle = cardWrapper.find(Card.Title);
    expect(cardTitle.text()).toContain(baseProps.tree.name);
  });

  it('should have one Card.Text element', () => {
    const cardText = cardWrapper.find(Card.Text);
    expect(cardText).toHaveLength(1);
  });

  it('should have one Card.Img element', () => {
    const cardImage = cardWrapper.find(Card.Img);
    expect(cardImage).toHaveLength(1);
  });

  it('should fire the click button and have one Button element', () => {
    const button = cardWrapper.find(Button).simulate('click');
    expect(baseProps.hideImage).toHaveBeenCalled();
    expect(button.length).toBe(1);
  });
});
