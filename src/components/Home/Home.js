import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

const Home = () => {
  const navigate = useNavigate();

  const handleNewDocs = () => {
    navigate(`/documents/${uuidV4()}`);
  };
  return (
    <div>
      Welcome
      <button onClick={handleNewDocs}>New</button>
    </div>
  );
};

export default Home;
