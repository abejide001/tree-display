/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import style from './styles';

const SingleTreeDisplay = ({ tree, hideImage }) => {
  const { name, species_name, image } = tree
  return (
    <Card style={style}>
      <Card.Img variant="top" src={image} alt="tree" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{species_name}</Card.Text>
        <Button variant="secondary" onClick={() => hideImage()}>
          Hide Image
        </Button>
      </Card.Body>
    </Card>
  );
};

SingleTreeDisplay.propTypes = {
  tree: PropTypes.instanceOf(Object).isRequired,
  hideImage: PropTypes.func.isRequired,
};

export default SingleTreeDisplay;
