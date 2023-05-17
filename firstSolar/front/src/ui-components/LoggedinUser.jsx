import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Text, Button } from "@aws-amplify/ui-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setConnect } from "../modules/connect";
import { logout } from "../api";
import { setAccount } from "../modules/account.js";
import { setLogin } from "../modules/login";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../css/Font.css";

const LoggedinUser = (props) => {
  const { overrides, ...rest } = props;
  const [view, setView] = useState(false);
  const account = useSelector((state) => state.account);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    setView(false);
  }, [pathname]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (view && ref.current && !ref.current.contains(e.target)) {
        setView(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [view]);

  const logoutMethod = async () => {
    await logout(document.cookie.split(":")[0], account);

    let cookieName = document.cookie.split(":")[0] + ":" + account;
    let cookieValue = "";

    let expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() - 1);

    document.cookie =
      cookieName +
      "=" +
      cookieValue +
      "; expires=" +
      expiresDate.toGMTString() +
      "; path=/";

    dispatch(setConnect(false));
    dispatch(setLogin(false));
    dispatch(setAccount(""));
    navigate("/");
  };

  window.ethereum.on("accountsChanged", (accounts) => {
    logoutMethod();
  });

  return (
    <LoggedinUserCover ref={ref}>
      <motion.div
        width={{ base: "49px", small: "49px" }}
        height={{ base: "49px", small: "49px" }}
        style={{
          alignSelf: "center",
          borderRadius: "33px",
          backgroundColor: "rgba(247,239,227,0.75)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundImage:
            "linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))",
        }}
        whileHover={{
          scale: 0.93,
          backgroundColor: "rgba(247,239,227,0.75)",
        }}
      >
        <Button
          textAlign="center"
          width={{ base: "49px", small: "49px" }}
          height={{ base: "49px", small: "49px" }}
          borderRadius="35px"
          alignSelf="center"
          shrink="0"
          size="small"
          isDisabled={false}
          fontFamily="ffCondExtraLight"
          children="My Page"
          fontSize={{ base: "7px", small: "7px" }}
          onClick={() => {
            navigate(`/mypage?${account}`);
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </motion.div>
      <motion.div
        width={{ base: "49px", small: "49px" }}
        height={{ base: "49px", small: "49px" }}
        style={{
          alignSelf: "center",
          borderRadius: "33px",
          backgroundColor: "rgba(247,239,227,0.75)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundImage:
            "linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))",
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
          children="LogOut"
          fontSize={{ base: "7px", small: "10px" }}
          onClick={() => {
            logoutMethod();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </motion.div>
      {/* <svg
        className="asdf"
        onClick={() => {
          setView(!view);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        viewBox="0 0 448 512"
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg> */}
      {view && (
        <MenuDropDown>
          <ul>
            <li>
              {/* <Link to={`/mypage?${account}`}>
                <div>My Page</div>
              </Link> */}
            </li>

            <Divider></Divider>
            <li>
              <div
                onClick={() => {
                  logoutMethod();
                }}
              >
                Logout
              </div>
            </li>
          </ul>
        </MenuDropDown>
      )}
    </LoggedinUserCover>
  );
};
export default LoggedinUser;

const LoggedinUserCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 9px;
  padding: 0px;
  position: relative;
  z-index: 1;
`;

const MenuDropDown = styled.div`
  border: 1px solid gainsboro;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  right: 0px;
  width: 200px;
  background: white;
  z-index: 1cd;
  opacity: 0.99;

  ul {
    list-style: none;
    padding-inline-start: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 20px;
    display: flex;
    flex-direction: column;

    li {
      font-size: 20px;

      .afterheader_dropdown_account {
        width: 100%;
        padding-left: 5px;
        padding-right: 5px;
        background: gainsboro;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        border-radius: 15px;
      }

      a {
        color: black;
        text-decoration: none;
      }

      .logoutButton {
        margin-top: 10px;
        border-radius: 30px;
        width: 100%;
        background: black;
        color: white;
      }
    }
  }
`;
