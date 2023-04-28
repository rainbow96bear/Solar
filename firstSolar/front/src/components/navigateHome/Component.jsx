import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigatorComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return <></>;
};
export default NavigatorComponent;
