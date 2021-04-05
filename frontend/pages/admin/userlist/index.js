import React from 'react'
import UserListScreen from "../../../screens/UserListScreen";

const UserList = () => {
    return (
        <UserListScreen/>
    )
}

export default UserList

// export async function getServerSideProps(ctx) {
//     const { id } = ctx.query;
//     return {
//       props: {
//         id,
//       },
//     };
//   }
  