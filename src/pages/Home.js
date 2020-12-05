import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import SingleTreeDisplay from '../components/tree/SingleTreeDisplay';
import TreesDisplay from '../components/tree/TreesDisplay';
import Spinner from '../components/common/Spinner';

export const Home = () => {
  const { getTree } = useFetch(
    process.env.REACT_APP_URL,
    [],
  );
  const [trees, setTrees] = useState('');

  const showImage = (singleTree) => {
    setTrees(singleTree);
  };

  const hideImage = () => {
    setTrees('');
  };

  return (
    <Container>
      <Row>
        <Col>
          {getTree.length === 0 ? (
            <Spinner />
          ) : (
            getTree.trees.map((tree) => {
              return (
                <TreesDisplay
                  tree={tree}
                  showImage={showImage}
                  key={`${tree.name}${Math.floor(Math.random() * 10 + 1)}`}
                />
              );
            })
          )}
        </Col>
        <Col>{trees ? <SingleTreeDisplay tree={trees} hideImage={hideImage} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;
