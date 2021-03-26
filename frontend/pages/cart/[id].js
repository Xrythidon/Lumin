import {useEffect} from "react";
import { useRouter } from "next/router";
import CartScreen from "../../screens/CartScreen";

const Product = ({id, qty}) => {
  const router = useRouter();
  //const { id } = router.query;

  useEffect(() => {

  },[])

  
    
  return ( id && <CartScreen id={id} qty={qty}/>);
};

export async function getServerSideProps(ctx) {
  const { id, qty } = ctx.query;

  return {
    props: {
      id,
      qty
    },
  };
}

export default Product;


