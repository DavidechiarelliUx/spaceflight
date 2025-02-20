import {Card,Col, Button} from "react-bootstrap"
import { IArticle } from "../interfaces/IArticle";
import { useNavigate } from "react-router-dom";
interface ArticleCardProps{
    article : IArticle;
    buttonText : string;
}
const ArticleCard = ({article, buttonText}:ArticleCardProps)=> {

    const navigate=useNavigate()
    return (
      <Col md={4}>
        <Card className="mb-3">
          <Card.Img variant="top" src={article.image_url} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.summary}</Card.Text>
            <Card.Text>Pubblicato il: {new Date(article.published_at).toLocaleDateString()}</Card.Text>
            <Button variant="primary" onClick={() => navigate(`/details/${article.id}`)}>{buttonText}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
} 

export default ArticleCard;