import React from 'react'
import { Button, Card } from "react-bootstrap";

const SingleTreeDisplay = ({ tree, hideImage }) => {
    return (
        <Card style={{ width: "18rem", margin: "50px" }}>
            <Card.Img variant="top" src={tree.image} alt="tree" />
            <Card.Body>
                <Card.Title>{tree.name}</Card.Title>
                <Card.Text>
                    {tree.species_name}
                </Card.Text>
                <Button variant="secondary" onClick={() => hideImage()}>Hide Image</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleTreeDisplay;
