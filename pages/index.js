import ItemSeparator from '../components/ItemSeparator/ItemSeparator';
import Header from '../components/Header/Header';
import CardNews from '../components/CardNews';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
  <>
    <Header />
    <ItemSeparator/>
    <Container>
      <Row className="pb-5 pt-5">
        <Col xs={4} md={6}>
          <CardNews />
        </Col>
        <Col xs={4} md={3}>
          <CardNews />
        </Col>
        <Col xs={4} md={3}>
          <CardNews />
        </Col>
      </Row>
      <ItemSeparator/>
      <Row className="pb-5 pt-5">
        <Col xs={6} md={4}>
          <CardNews />
        </Col>
        <Col xs={6} md={4}>
          <CardNews />
        </Col>
        <Col xs={6} md={4}>
          <CardNews />
        </Col>
      </Row>
    </Container>
  </>
  );
}

/*

|- atoms
| |- buttonLink
| |- logo
| |- category
| |- photo
| |- title
| |- writer
| |- writerPhoto
| |- description
| |- itemSeparator
| |- input

|- molecules
| |- navbarMenu
| |- searchKeyword
| |- writerWrapper

|- organisms
| |- header
| |- CardNews

|- templates
| |- index

|- pages
| |- index

*/


/* 

Usei um átomo ItemSeparator direto na template
Template dentro da página page?
Confusão entre template e page ... :/
Confusão com bootstrap e styled-components (bootstrap utiliza className) ... :/
Resolver CardNews (Tudo é o mesmo componente, porém alguns tem imagem e outros não)
*/
