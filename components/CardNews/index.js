import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import Category from '../Category/Category';
import Photo from '../Photo/Photo';
import Title from '../Title/Title';
import WriterWrapper from '../writerWrapper/WriterWrapper';
import Description from '../Description/Description';
import { getNews } from '../../utils/api/news';
import { Col } from 'react-bootstrap';

// async function functionNews() {
//   const cnews = await getNews()
//   return cnews.data; // outra forma //Não consegui
// }

export default function index() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    // getNews().then((response) => {
    //   setNews(response.data);
    // })

    const functionNews = async () => {
        const news = await getNews()
        setNews(news.data) // outra forma
    };    
    functionNews();
  }, []);

  console.log('news', news);

    return (
      <>
        {news.map(value => (
            <Col xs={4} md={4} sm={12}>
              <Wrapper key={value.id}>
                <Category text={value.category} color="red" background="green"/>
                <Photo photo={value.photo} alt={value.title}/>
                <Title title={value.title} />
                <WriterWrapper photo={value.photo_writer} alt={value.writer} writter={value.writer}/>
                <Description description={value.description}/>
              </Wrapper>
            </Col>
        ))}
     </>
   );
}

/* Quando notícia for a mais recente Col recebe outro valor para ficar maior */
/* Não consegui montar exatamente igual ao layout */
/* Não consegui receber o valor de ...props em category */
