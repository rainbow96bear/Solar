/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Text, Button } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setConnect } from "../modules/connect";
import { setAccount } from "../modules/account";
import { setLogin } from "../modules/login";
import { logout } from "../api";
import { motion } from "framer-motion";
import "../css/Font.css";

export default function LoginAccount(props) {
  const { overrides, ...rest } = props;
  const [view, setView] = React.useState(false);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const ref = React.useRef();
  const navigate = useNavigate();

  React.useEffect(() => {
    setView(false);
  }, [pathname]);

  React.useEffect(() => {
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
    <LoginAccountCover className="LoginAccountCover" ref={ref}>
      <motion.div
        style={{
          width: "49px",
          height: "49px",
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
          width="49px"
          height="49px"
          borderRadius="35px"
          alignSelf="center"
          shrink="0"
          size="small"
          isDisabled={false}
          fontFamily="ffCondExtraLight"
          children="My Page"
          fontSize="10px"
          onClick={() => {
            navigate(`/mypage?${account}`);
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </motion.div>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        padding="10px 10px 10px 10px"
        onClick={() => {
          setView(!view);
        }}
        {...getOverrideProps(overrides, "LoginAccount")}
        {...rest}
      >
        <motion.div
          style={{
            width: "unset",
            height: "unset",
            alignSelf: "center",
            borderRadius: "33px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "rgba(241,231,217,1)",
            backgroundImage:
              "linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))",
          }}
          whileHover={{
            scale: 0.98,
            backgroundColor: "rgba(247,239,227,0.75)",
          }}
        >
          <Flex
            gap="10px"
            direction="row"
            width="188px"
            height="unset"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px dashed rgba(0,0,0,1)"
            borderRadius="15px"
            padding="9px 9px 9px 9px"
            className="LoginAccountCover_accountBox"
            {...getOverrideProps(overrides, "Frame 15")}
          >
            <AccountCover>
              <Text
                fontFamily="ffCondExtraLight"
                fontSize="18px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="1.65px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={
                  account.slice(0, 5) +
                  "..." +
                  account.slice(account.length - 4, account.length)
                }
                {...getOverrideProps(overrides, "account")}
              ></Text>
            </AccountCover>
            <Flex
              padding="0px 0px 0px 0px"
              width="13px"
              height="13px"
              display="flex"
              gap="unset"
              alignItems="unset"
              justifyContent="center"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "dropdownIcon")}
            >
              {!view ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
              )}
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
      {view && (
        <>
          <MenuDropDown>
            <ul>
              <li>
                {/* <div
                  onClick={() => {
                    navigate(`/mypage?${account}`);
                  }}
                >
                  My Page
                </div> */}
              </li>

              <Divider></Divider>
              <li>
                <Text
                  fontSize="15px"
                  fontFamily="ffCondExtraLight"
                  onClick={() => {
                    logoutMethod();
                  }}
                >
                  Disconnect
                </Text>
              </li>
            </ul>
          </MenuDropDown>
        </>
      )}
    </LoginAccountCover>
  );
}

const LoginAccountCover = styled.div`
  display: flex;
  gap: 13px;

  .LoginAccountCover_accountBox {
    cursor: pointer;
  }
`;

const AccountCover = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  gap: 10px;
  white-space: nowrap;
  p {
    text-overflow: ellipsis;
  }
`;

const MenuDropDown = styled.div`
  width: 188px;
  border: 1px dashed gainsboro;
  border-radius: 10px;
  position: absolute;
  top: 65px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 1000000;

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
      cursor: pointer;

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
