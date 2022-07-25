import React,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useCartContext} from "../Componentes/CartContextfinal";
import Form from "./Forms";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {db} from "../firebaseConfig";
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import {mobile} from "../responsive";





const Container = styled.div``;

const Remove=styled.div`

display: flex;
justify-content: center;
padding-bottom:10px;
`;


const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Desc = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://st.depositphotos.com/1424188/3258/i/600/depositphotos_32583067-stock-photo-karate-taekwondo-martial-arts-man.jpg")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const TopButton = styled.button`
  display: flex;
  justify-content: space-between;
  margin-top:10px;
  padding:10px 20px;
  margin-bottom:10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left:30px;
  padding: 20px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;


const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
  
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 40px 40px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;



const Carrito = ({product}) => {
  const [data, setData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState('');
  
  const { cartList, clearList, removeProduct,totalPrice } = useCartContext();
  

  const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

   const handleSubmit = (e) => {
        /* const formatedCart = cart.map((prod) => {
            return {
                cantidad: prod.cantidad,
                id: prod.id,
            };
        }); */
        e.preventDefault();
        const objOrden = {
            buyer: {
                name: data.name,
                phone: data.phone,
                email: data.email,
            },
            cartList,
            total: totalPrice(),
            date: serverTimestamp(),
        };

    const ref = collection(db, 'orders');
        addDoc(ref, objOrden).then((response) => {
            setOrderId(response.id);
            removeProduct();
        });
    };
    if (orderId !== '') {
        return <h1 style={{height: "65vh", display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",}}>Gracias por tu compra, tu número de envío es: {orderId}</h1>;
    }





  return (
    <Container>
    {
  cartList.length === 0 ? 
  <Wrapper>
    <Title>Carrito de Compras</Title>
    <Desc>El carrito se encuentra vacio , para volver al Menu <Link to="/">CLICK AQUI</Link></Desc>
  </Wrapper> :
     <Wrapper>
     <Title>Carrito de Compras</Title>
     <Top>
          
        <ul> 
             {
                cartList.map( producto => <li key={producto.id} style= { {listStyleType: 'none'} } >
                    <Product>
                        <ProductDetail>
                            <Image src={producto.img}/>
                                    <Details>
                                    <ProductName>
                                    <b>Producto: {producto.Nombre}</b>
                                    </ProductName>
                                    <ProductId>
                                    <b>ID:</b> {producto.id}
                                    </ProductId>
                                    {/* < h4>{producto.descripcion}</h4> */}
                                    <ProductColor color={producto.Color} />
                                    <ProductSize>
                                    <b>Size:</b> {producto.Size}
                                    </ProductSize>
                                    </Details>
                                    
                        </ProductDetail> 
                          <PriceDetail>
                                <ProductAmountContainer>
                                  
                                  <ProductAmount>Cantidad : {producto.cantidad}</ProductAmount>
                            
                                </ProductAmountContainer>
                                <ProductPrice>
                                   Total : {producto.precio}
                                   <Remove href="/" onClick={() => removeProduct(producto.id)}><HighlightOffSharpIcon/></Remove>
                                </ProductPrice>
                              </PriceDetail>
                             
                    </Product>
                    </li>  )
             }

        </ul >
        <Summary>
            <SummaryTitle>Pedido</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>$ {totalPrice()}</SummaryItemPrice>
            </SummaryItem>
            <Form
                        handleChange={handleChange}
                        data={data}
                        handleSubmit={handleSubmit}
                    />
          </Summary>
      </Top>
      <Top>
      <Link to= "/"> <TopButton>Continuar Comprando</TopButton></Link>
      <TopButton  onClick={clearList}>Vaciar Carrito</TopButton>
      </Top>
      </Wrapper>
}

</Container>
  )
}




export default Carrito