import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("data:image/jpeg;base64,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")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = ({ handleChange, data, handleSubmit }) => {
  return (
    <Container>
      <Wrapper>
        <Title>Ultimos pasos</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Nombre"
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
          <Input 
            placeholder="Email"
            type="text"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <Input 
            placeholder="Telefono"
            type="number"
            name="phone"
            onChange={handleChange}
            value={data.phone}
          />
          <Button>Finalizar compra</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
