import React from "react";
import { gql, useQuery } from "@apollo/client";

const HELLO_QUERY = gql`
  query HelloQuery {
    hello
  }
`;

export function Hello() {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro :(</p>;

  return <h1>{data.hello}</h1>;
}
