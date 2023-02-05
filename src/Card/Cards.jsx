import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <>
      <div className="container-fluid">
        <Card className="Card.Img">
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text> Lorem ipsum dolor sit amet.</Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default Cards;
