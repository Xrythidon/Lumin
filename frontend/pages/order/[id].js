import {useEffect} from "react";
import { useRouter } from "next/router";
import OrderScreen from "../../screens/OrderScreen";

const Order = ({id, qty}) => {
  const router = useRouter();
  //const { id } = router.query;

  useEffect(() => {

  },[])

  
    
  return ( id && <OrderScreen id={id}/>);
};

export async function getServerSideProps(ctx) {
  const { id, qty } = ctx.query;

  return {
    props: {
      id,
    },
  };
}

export default Order;


