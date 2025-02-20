import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { Container, Row } from "react-bootstrap"
import { IArticle } from "../interfaces/IArticle"
const ArticleList = () => {

    const [articles,setArticles ] =useState<IArticle[]>([]);

    const fetchArticles = async () => {
      try {
        const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
        if (resp.ok) {
          const data = await resp.json();
          setArticles(data.results);
        } else {
          console.error("Errore nella risposta API:", resp.status);
        }
      } catch (error) {
        console.error("Errore nel fetch:", error);
      }
    };


    useEffect(()=> {
        fetchArticles()
    }, [])
    console.log(articles)
    return(
        <Container>
            <h2>Notizie</h2>
             <Row>
                {articles.map((article)=> (
                    <ArticleCard key={article.id} article={article} buttonText="leggi di più"/>
                ))}
            </Row> 
        </Container>
    )
}

export default ArticleList