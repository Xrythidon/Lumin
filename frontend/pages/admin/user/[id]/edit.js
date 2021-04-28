import React from 'react'
import UserEditScreen from "../../../../screens/AdminPanel/UserEditScreen";

const UserEdit = ({id}) => {
    return (
        <UserEditScreen id={id}/>
    )
}

export default UserEdit

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    return {
      props: {
        id,
      },
    };
  }
  