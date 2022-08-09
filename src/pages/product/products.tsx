import { useMutation, useQuery } from "@apollo/client";
import {
  CUSTOMER_LOGIN,
  REGISTER_CUSTOMER_ACCOUNT,
} from "../../providers/customerAuth/mutations";
import { GET_ACTIVE_CUSTOMER } from "../../providers/customerAuth/queries";
import { CustomerInventoryData } from "../../providers/customerAuth/types";

function Products() {
  const { loading, error, data } =
    useQuery<CustomerInventoryData>(GET_ACTIVE_CUSTOMER);

  const [register, { error: registerError }] = useMutation(
    REGISTER_CUSTOMER_ACCOUNT
  );

  const [login, { error: loginError }] = useMutation(CUSTOMER_LOGIN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("typed", { data });
  return (
    <>
      <button
        onClick={() => {
          register({
            variables: {
              customer: {
                firstName: "asdasd",
                emailAddress: "1234gaaaa@gmail.com",
              },
            },
          });
        }}
      >
        dadasd GAAAAAA
      </button>
      <button
        onClick={() => {
          register({
            variables: {
              customer: {
                firstName: "asdasd",
                emailAddress: "1234gaaaa@gmail.com",
              },
            },
          });
          // fetchMore({
          //   variables: {
          //     skip: 5,
          //   },
          // });
          // console.log("typed", { data });
        }}
      >
        dadasd GAAAAAA
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
    </>
  );
}

export default Products;
