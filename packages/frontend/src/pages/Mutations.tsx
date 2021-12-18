import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATEUSER_MUTATION = gql`
  mutation CreateUserMutation($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      _id
      name
      email
      active
    }
  }
`;

export function Mutations() {
  const [handleCreateUser, { data, loading, error }] =
    useMutation(CREATEUSER_MUTATION);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro :(</p>;

  async function onCreateUser() {
    await handleCreateUser({
      variables: {
        name: "User Example",
        email: "User.example@email.com",
      },
    });
  }

  return (
    <>
      <div>
        <h1>Mutations</h1>
        <p>Quando clica no botão a mutation criará um dado novo</p>
        <button type="button" onClick={onCreateUser}>
          Clique aqui para criar usuário
        </button>
      </div>
      {data && (
        <div>
          <p>id:{data.createUser._id}</p>
          <p>name: {data.createUser.name}</p>
          <p>email: {data.createUser.email}</p>
          <p>active: {data.createUser.active ? 'true' : 'false'}</p>
        </div>
      )}
    </>
  );
}
