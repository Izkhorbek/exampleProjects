"use client";

import { Service } from "@/server";
import { useEffect, useState } from "react";

const ClientPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    Service.getPosts()
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Client Component</h1>
      {isLoading && "Loading .... "}{" "}
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default ClientPage;
