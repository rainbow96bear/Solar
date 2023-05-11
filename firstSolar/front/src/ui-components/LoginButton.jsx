import styled from "styled-components";
import "../css/Font.css";
import { useDispatch, useSelector } from "react-redux";
import { setConnect } from "../modules/connect.js";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { motion } from "framer-motion";
import { Button } from "@aws-amplify/ui-react";
const LoginButton = (props) => {
  const { overrides, ...rest } = props;
  const dispatch = useDispatch();
  return (
    <WalletIcon
      onClick={() => {
        dispatch(setConnect(true));
      }}
    >
      <motion.div
        width={{ base: "49px", small: "49px" }}
        height={{ base: "49px", small: "49px" }}
        style={{
          alignSelf: "center",
          borderRadius: "33px",
          backgroundColor: "rgba(247,239,227,0.75)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundImage:
            "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
        }}
        whileHover={{
          scale: 0.93,
          backgroundColor: "rgba(247,239,227,0.75)",
        }}
      >
        <Button
          width={{ base: "49px", small: "49px" }}
          height={{ base: "49px", small: "49px" }}
          borderRadius="35px"
          alignSelf="center"
          shrink="0"
          size="small"
          isDisabled={false}
          fontFamily="ffCondExtraLight"
          children="Connect"
          textAlign="center"
          fontSize={{ base: "7px", small: "7px" }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </motion.div>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="30px"
      >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
      </svg> */}
    </WalletIcon>
  );
};

export default LoginButton;

const WalletIcon = styled.div`
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;
