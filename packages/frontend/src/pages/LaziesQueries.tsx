import React from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GETUSERBYEMAIL_QUERY = gql`
  query GetUserByEmailQuery($email: String!) {
    getUserByEmail(email: $email) {
      _id
      name
      email
      active
    }
  }
`;

type GetUserByEmailProps = {
  getUserByEmail: {
    _id: string;
    name: string;
    email: string;
    active: boolean;
  };
};

export function LaziesQueries() {
  const [handleUsers, { data, loading, error }] =
    useLazyQuery<GetUserByEmailProps>(GETUSERBYEMAIL_QUERY);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro :(</p>;

  async function onListUsers() {
    await handleUsers({
      variables: {
        email: "teste1@gmail.com",
      },
    });
  }

  return (
    <>
      <div>
        <h1>Lazy Queries</h1>
        <p>Só quando clica no botão a query é executada :)</p>
        <button type="button" onClick={onListUsers}>
          Clique aqui para listar usuário com email "teste1@gmail.com"
        </button>
      </div>
      {data && (
        <div>
          <p>id:{data.getUserByEmail._id}</p>
          <p>name: {data.getUserByEmail.name}</p>
          <p>email: {data.getUserByEmail.email}</p>
          <p>active: {data.getUserByEmail.active ? "true" : "false"}</p>
        </div>
      )}
    </>
  );
}
