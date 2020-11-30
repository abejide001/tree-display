import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch"
import SingleTreeDisplay from "./SingleTreeDisplay";
import TreesDisplay from "./TreesDisplay";

export const TreeDisplay = () => {
  const { getTree } = useFetch("https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json")
  const [tree, setTree] = useState('')

  const showImage = (singleTree) => {
    setTree(singleTree);
  };

  const hideImage = () => {
    setTree("")
  }

  return (
    <Container>
      <Row>
        <Col>
          {getTree.length === 0
            ? <Spinner />
            : getTree.trees.map((tree) => {
              return (
                <TreesDisplay tree={tree} showImage={showImage} key={`${tree.name}${Math.floor((Math.random() * 10) + 1)}`} />
              );
            })}
        </Col>
        <Col>
          {tree ? <SingleTreeDisplay tree={tree} hideImage={hideImage} /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default TreeDisplay;

