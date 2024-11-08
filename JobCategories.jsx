import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Styles/JobCategories.css";

const jobCategories = [
  { title: "Retail & Product", jobs: "No Job Available" },
  { title: "Content Writer", jobs: "4 Jobs Available" },
  { title: "Human Resource", jobs: "No Job Available" },
  { title: "Market Research", jobs: "1 Job Available" },
  { title: "Retail & Product", jobs: "No Job Available" },
  { title: "Software", jobs: "1 Job Available" },
  { title: "Finance", jobs: "1 Job Available" },
  { title: "Management", jobs: "No Job Available" },
];

const JobCategories = () => {
  return (
    <Container className="job-categories">
      <div className="category-header">
        <h2 className="section-title">Browse by category</h2>
        <p className="section-subtitle">Find the job that's perfect for you. About 800+ new jobs every day.</p>
      </div>
      <Row className="gy-4">
        {jobCategories.map((category, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="category-card">
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.jobs}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobCategories;
