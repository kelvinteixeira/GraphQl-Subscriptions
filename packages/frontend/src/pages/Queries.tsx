import React from "react";
import { gql, useQuery } from "@apollo/client";

const USERS_QUERY = gql`
  query UsersQuery {
    users {
      _id
      name
      email
      active
    }
  }
`;

type UsersProps = {
  users: Array<{
    _id: string;
    name: string;
    email: string;
    active: boolean;
  }>;
};

export function Queries() {
  const { data, loading, error } = useQuery<UsersProps>(USERS_QUERY);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro :(</p>;

  return (
    <>
      <div>
        <h1>Queries</h1>
        <p>Query é renderizada quando a tela é carregada :)</p>
      </div>
      {data &&
        data.users.map((user) => (
          <div key={user._id} style={{border: "1px red solid"}}>
            <p>id:{user._id}</p>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>active: {user.active ? "true" : "false"}</p>
          </div>
        ))}
    </>
  );
}
