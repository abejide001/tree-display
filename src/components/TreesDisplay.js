import React from 'react'
import { Button, Card } from "react-bootstrap";

const TreesDisplay = ({ tree, showImage }) => {
    return (
        <Card style={{ width: "18rem", margin: "50px" }}>
            <Card.Body>
                <Card.Title>{tree.name}</Card.Title>
                <Card.Text>{tree.species_name}</Card.Text>
                <Button variant="secondary" onClick={() => showImage(tree)}>Show Image</Button>
            </Card.Body>
        </Card>
    )
}
export default TreesDisplay
