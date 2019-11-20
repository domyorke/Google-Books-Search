// Importing react, other objects from List and Grid components, and local css.
import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// Component namesstart with a capital letter, otherwise React treats them as DOM tags
// Passing the Book component props and deconstructing props object
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    // Return imported ListItem from List component
    <ListItem>
      {/* Curly braces are a special syntax that lets JSX know to read Javascript  */}
      {/* Return Row object from grid component and add a className*/}
      <Row className="flex-wrap-reverse">
        {/* Return Col from grid component and add size styling  */}
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        {/* Another colomn which contains a link to the book and opens it in a new tab*/}
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        {/* Authors colomn */}
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        {/* Thumbnail colomn */}
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        {/* Book description colomn */}
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
