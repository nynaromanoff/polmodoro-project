import { Container } from "../../components/container/Container";
import { Footer } from "../../components/footer/Footer";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}