import React from "react";
import { gql, useMutation, useSubscription } from "@apollo/client";

const USERADDED_SUBSCRIPTION = gql`
  subscription UserAddedSubscription {
    userAdded {
      _id
      name
      email
      active
    }
  }
`;

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

export function Subscriptions() {
  const { data, loading, error } = useSubscription(USERADDED_SUBSCRIPTION);
  const [handleCreateUser, { data: mutationData, error: mutationError }] =
    useMutation(CREATEUSER_MUTATION);

  if (error || mutationError) return <p>Erro :(</p>;
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
        <h1>Subscriptions</h1>
        <button type="button" onClick={onCreateUser}>
          Para ativar a subscription, clique para mutation publicar evento
        </button>
      </div>
      {!loading && (
        <div>
          <p>Toda vez que uma mutation é disparada é feita a publicação na subscription :)</p>
          <p>id:{data.userAdded._id}</p>
          <p>name: {data.userAdded.name}</p>
          <p>email: {data.userAdded.email}</p>
          <p>active: {data.userAdded.active ? "true" : "false"}</p>
        </div>
      )}
    </>
  );
}
