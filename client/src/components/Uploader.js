import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function Uploader() {
  return (
    <Row className="d-flex justify-content-center my-2">
      <Col md={5}>
        <Card className="rounded-5 p-4 glass-morf">
          <Form>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label className="fw-bold">Upload Your Resume</Form.Label>
              <Form.Control type="file" size="lg" />
            </Form.Group>
            <Button type="submit" className="px-5 rounded-pill">
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default Uploader;
