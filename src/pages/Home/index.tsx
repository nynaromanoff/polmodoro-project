
import { Container } from '../../components/container/Container';
import { CountDown } from '../../components/countDown/CountDown';
import { Form } from '../../components/form/Form';
import { MainTemplate } from '../../templates/MainTemplate';
export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <Form />
      </Container>
    </MainTemplate>
  );
}