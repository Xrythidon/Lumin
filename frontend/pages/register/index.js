import React from 'react'
import RegisterScreen from "../../screens/RegisterScreen";

const Register = ({redirect}) => {
    return (
        <RegisterScreen redirect={redirect}/>
    )
}

export default Register

export async function getServerSideProps(ctx) {
    const { redirect } = ctx.query;
    return {
      props: {
        redirect : redirect ? redirect : null,
      },
    };
  }
  
  