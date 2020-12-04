import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import style from './styles';

const SingleTreeDisplay = ({ tree, hideImage }) => {
  return (
    <Card style={style}>
      <Card.Img variant="top" src={tree.image} alt="tree" />
      <Card.Body>
        <Card.Title>{tree.name}</Card.Title>
        <Card.Text>{tree.species_name}</Card.Text>
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
