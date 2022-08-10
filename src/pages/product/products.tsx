import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  CUSTOMER_LOGIN,
  REGISTER_CUSTOMER_ACCOUNT,
} from "../../providers/customerAuth/mutations";
import { FETCH_PRODUCTS } from "../../providers/products/queries";
import {
  ProductInventoryData,
  ProductInventoryVars,
} from "../../providers/products/types";

function Products() {
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(1);

  const { loading, error, data, fetchMore } = useQuery<
    ProductInventoryData,
    ProductInventoryVars
  >(FETCH_PRODUCTS, { variables: { take: ITEMS_PER_PAGE } });

  const [register, { error: registerError }] = useMutation(
    REGISTER_CUSTOMER_ACCOUNT
  );

  const [login, { error: loginError }] = useMutation(CUSTOMER_LOGIN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("que chucha fuee", { data });
  return (
    <>
      {/* <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        darme mas
      </button> */}
      <button
        onClick={() => {
          // register({
          //   variables: {
          //     customer: {
          //       firstName: "asdasd",
          //       emailAddress: "1234gaaaa@gmail.com",
          //     },
          //   },
          // });
          setPage(page + 1);
          fetchMore({
            variables: {
              take: ITEMS_PER_PAGE * page,
            },
          });
          // console.log("typed", { data });
        }}
      >
        dadasd GAAAAAA {page}
      </button>
      <button
        onClick={() => {
          login({
            variables: {
              username: "eduardodediosp96@gmail.com",
              password: "Newstar123@",
            },
          });
        }}
      >
        login GAAAAAA
      </button>
      <div>
        {data &&
          data?.products &&
          data?.products.items.map((item: any) => {
            return <div>{item.name}</div>;
          })}
      </div>
    </>
  );
}

export default Products;
