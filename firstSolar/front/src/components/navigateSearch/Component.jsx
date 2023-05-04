import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigatorComponent = () => {
  const location = useLocation();
  const searchData = location.state?.searchData;
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/search/?searchData=${searchData}&page=1&filter=null`);
  }, []);
  return <></>;
};
export default NavigatorComponent;
