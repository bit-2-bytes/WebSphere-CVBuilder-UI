import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FormAuthoring() {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const checkPreview = () => {
    axios.put(process.env.REACT_APP_API_URL + params.id, { name }).then(() => {
      navigate(`.././${params.id}`);
    });
  };
  return (
    <>
      <h1>Authoring Forms page</h1>
      <input
        placeholder="Enter your name"
        onInput={(e) => setName(e.target.value)}
      ></input>
      <button onClick={checkPreview}>Check Preview</button>
    </>
  );
}

export default FormAuthoring;
