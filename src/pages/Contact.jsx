import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Contact() {
  return (
    <Form>
      <Row className="mb-3">
        <Col sm={12} md={6}>
          <Form.Group controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" />
          </Form.Group>
        </Col>

        <Col sm={12} md={6}>
          <Form.Group controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last Name" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={12} md={6}>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="email" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={12} md={6}>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
