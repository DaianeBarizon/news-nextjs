import ItemSeparator from '../components/ItemSeparator/ItemSeparator';
import Header from '../components/Header/Header';
import CardNews from '../components/CardNews';
import { Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
  <>
    <Header />
    <ItemSeparator/>
    <Container>
      <Row>
        <CardNews />
      </Row>
    </Container>
  </>
  );
}

