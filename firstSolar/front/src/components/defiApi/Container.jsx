import axios from "axios";
import { useState } from "react";

import DefiComponent from "./Component";

const DefiContainer = () => {
  const [defi0x, setDefi0x] = useState([]);
  const testing = async () => {
    const result = (await axios.post("http://localhost:8080/api/defi")).data;
    console.log(result);
    setDefi0x(result.accountDefi.data);
  };

  return <DefiComponent testing={testing} defi0x={defi0x} />;
};
export default DefiContainer;
