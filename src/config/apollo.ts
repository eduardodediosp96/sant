import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { LocalStorageWrapper, persistCacheSync } from "apollo3-cache-persist";

const DEMO_API_URL = "https://demo.vendure.io/shop-api";
const API_URL =
  typeof process !== "undefined"
    ? process.env.VENDURE_API_URL ?? DEMO_API_URL
    : DEMO_API_URL;

function skipLimitPagination(keyArgs: any = false) {
  console.log("que fue gaaaaaaaaaa", { keyArgs });
  return {
    keyArgs,
    merge(existing: any, incoming: any, { args }: any) {
      // console.log("adasda", { existing });
      // const merged = existing.items ? existing.items.slice(0) : [];
      // console.log("merged", { merged });

      // if (args) {
      //   // Assume an offset of 0 if args.offset omitted.
      //   const { take = 0 } = args;
      //   for (let i = 0; i < incoming.items.length; ++i) {
      //     merged[take + i] = incoming.items[i];
      //   }
      // } else {
      //   // It's unusual (probably a mistake) for a paginated field not
      //   // to receive any arguments
      //   throw new Error("No args provided to paginated field");
      // }
      return [...existing, ...incoming];
    },
  };
}

const cache = new InMemoryCache({
  typePolicies: {
    // Query: {
    //   fields: {
    //     Products: {
    //       fields: {
    //         items: offsetLimitPagination(["skip", "take"]),
    //       },
    //     },
    //   },
    // },
    Products: {
      fields: {
        items: offsetLimitPagination(["skip", "take"]),
      },
    },
  },
});

// export const cache = new InMemoryCache();

persistCacheSync({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

export const client = new ApolloClient({
  uri: API_URL,
  cache,
});
