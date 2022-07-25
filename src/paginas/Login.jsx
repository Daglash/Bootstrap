import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://st2.depositphotos.com/3334457/5828/i/600/depositphotos_58281871-stock-photo-karate-women-in-action.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="Usuario"/>
          <Input placeholder="Contraseña" type="password"/>
          <Button>LOGIN</Button>
          <Link>NO TE ACORDASA TU CONTRASEÑA?</Link>
          <Link>CREAR UNA NUEVA CUENTA</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
