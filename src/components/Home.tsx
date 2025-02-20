import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";
const Home = () => {
  return (
    <>
    <Container fluid className="text-center">
      <Link to="/setting"> Go to setting page</Link>
      <Row className="">
        <Col>
          <h1>Benvenuti in SpaceFlight</h1>
        </Col>
      </Row>
    </Container>
    <Container>
      <ArticleList/>
    </Container>
    </>
  );
};

export default Home;
