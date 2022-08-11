import { ApolloClient, InMemoryCache } from "@apollo/client";
import { LocalStorageWrapper, persistCacheSync } from "apollo3-cache-persist";

const DEMO_API_URL = "https://demo.vendure.io/shop-api";
const API_URL =
  typeof process !== "undefined"
    ? process.env.VENDURE_API_URL ?? DEMO_API_URL
    : DEMO_API_URL;
const cache = new InMemoryCache();

// export const cache = new InMemoryCache();

persistCacheSync({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

export const client = new ApolloClient({
  uri: API_URL,
  cache,
});
