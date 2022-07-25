import styled from "styled-components";


const Container = styled.div`
  width: 25vw;
  height: 20vh;
  margin: 50px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
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
  border: none;
  margin-top:10px;
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
