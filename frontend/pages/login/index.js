import React from 'react'
import LoginScreen from "../../screens/LoginScreen";

const Login = ({redirect}) => {
    return (
        <LoginScreen redirect={redirect}/>
    )
}

export default Login

export async function getServerSideProps(ctx) {
    const { redirect } = ctx.query;
    return {
      props: {
        redirect : redirect ? redirect : null,
      },
    };
  }
  
  