import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Container, Card} from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";

const ArticleDetails =() => {

    const {id} = useParams();
    const [article, setArticles]= useState<IArticle | null>(null);

    const fetchArticleDetails = async() =>{
        try {
            const resp =await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
            if(resp.ok){
                const data = await resp.json();
                setArticles(data);
            }
        }catch(error){
            console.error("errore nel fetch", error);
        }
    }

    useEffect(()=>{
        fetchArticleDetails()
    },[id]);
    return (
      <Container className="mt-5">
        <Card>
          <Card.Img variant="top" src={article?.image_url} alt={article?.title} />
          <Card.Body>
            <Card.Title>{article?.title} - {article?.news_site}</Card.Title>
            <Card.Text>{article?.summary}</Card.Text>
            {article?.published_at ? new Date(article.published_at).toLocaleDateString() : "Data non disponibile"}
          </Card.Body>
        </Card>
      </Container>
    );
}

export default ArticleDetails;