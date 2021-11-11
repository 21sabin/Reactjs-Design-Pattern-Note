import { useState, useEffect } from "react";
import axios from "axios";

export const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      setResource(result.data);
    })();
  }, [getResourceFunc]);

  return resource;
};

// different ways to call useDataSouurce custom hooks

const user = useDataSource(async () => {
  const response = await axios.get("/users/123");
  return response;
});

const serverResource = (resourceUrl = async () => {
  const response = await axios.get("/users/123");
  return response;
});

const localStorageResources = (key) => () => {
  return localStorage.get(key);
};
//with this apporach we can configre another function that fetch data from localstorage as well, which gives more flexibility
const user = useDataSource(serverResource);
const user1 = useDataSource(localStorageResources("user"));
