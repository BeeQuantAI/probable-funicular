"use server";
import { getEnv } from "@src/utils";
import { GraphQLClient } from "graphql-request";

export async function getServerGqlClient() {
  return new GraphQLClient(getEnv().GraphqlEndpoint);
}
