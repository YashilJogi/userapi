import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { DisplayUserComponent } from "./DisplayUserComponent";

const configObj = {
  client_id: "5b0508f2ca735e171ade",
  client_secret: "1d367ad7cd99059976481b1528e302aa25c34bb4",
  repos_count: 5,
  repos_sort: "created: asc",
  token: "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",
};

export const UserContainer = () => {
  //api calls
  const [userData, setUserData] = useState({});
  const fetchUserDetails = async (searchKey) => {
    // console.log(searchKey);
    const {
      data
    } = await axios.get(
      `https://api.github.com/users/${searchKey}?client_id=${configObj.client_id}&client_secret=${configObj.client_secret}`,
      { headers: { Authorization: configObj.token } }
    );
    setUserData(data);

    // call the api fetch, axios npm i axios
  };

  return (
    <div>
      <SearchBar fetchUserDetails={fetchUserDetails} />
      <DisplayUserComponent userData={userData} />
    </div>
  );
};
