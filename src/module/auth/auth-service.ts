"use server";

import { CreateUserInput, getServerGqlClient, gql } from "@src/module/graphql";

const loginMutation = gql(`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      code
      message
      data
    }
  }
`);

export type LoginPayload = {
  email: string;
  password: string;
};
export async function login(payload: LoginPayload) {
  const gqlClient = await getServerGqlClient();

  const response = await gqlClient.request(loginMutation, payload);

  console.log("login response", { response });
}

const registerMutation = gql(`
  mutation Register($input: CreateUserInput!) {
    register(input: $input) {
      code
      message
      data
    }
  }
`);

export type RegisterPayload = CreateUserInput;
export async function register(payload: RegisterPayload) {
  const gqlClient = await getServerGqlClient();

  const response = await gqlClient.request(registerMutation, {
    input: payload,
  });

  console.log("register response", { response });
}
