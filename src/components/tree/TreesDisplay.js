import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import style from './styles';

const TreesDisplay = ({ tree, showImage }) => {
  return (
    <Card style={style}>
      <Card.Body>
        <Card.Title>{tree.name}</Card.Title>
        <Card.Text>{tree.species_name}</Card.Text>
        <Button variant="secondary" onClick={() => showImage(tree)}>
          Show Image
        </Button>
      </Card.Body>
    </Card>
  );
};

TreesDisplay.propTypes = {
  tree: PropTypes.instanceOf(Object).isRequired,
  showImage: PropTypes.func.isRequired,
};

export default TreesDisplay;
