/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, SearchField, Text } from "@aws-amplify/ui-react";
import { connectThunk } from "../modules/connect.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./images/logo_new.png";

import LoginAccount from "./LoginAccount.jsx";
import ConnectModal from "./ConnectModal.jsx";
import LoadingButton from "./LoadingButton.jsx";
import ConnectButton from "./ConnectButton.jsx";
import { Web3Button } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";

export default function BeforeHeadCom1440px(props) {
  const { overrides, ...rest } = props;
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
  const login = useSelector(state => state.login.login.login);
  const [view, setView] = React.useState(false);
  const dispatch = useDispatch();
  const connect = useSelector(state => state.connect.connect.connect);
  const navigate = useNavigate();
  const { address, isConnecting, isDisconnected } = useAccount();
  const { pathname } = useLocation();
  const ref = React.useRef();

  React.useEffect(() => {
    setView(false);
  }, [pathname]);

  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      if (view && ref.current && !ref.current.contains(e.target)) {
        setView(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [view]);
  const logout = () => {
    document.cookie =
      document.cookie.split(":")[0] +
      account +
      "=; expires=Thu, 01 Jan 1999 00:00:10 GMT";
    dispatch(connectThunk({ connect: false }));
    navigate("/");
  };

  return (
    <Flex
      display={{
        base: "none",
        small: "none",
        medium: "none",
        large: "none",
        xl: "flex",
        xxl: "flex",
      }}
      gap="189px"
      direction="row"
      width="100vw"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 100px 0px 100px"
      {...getOverrideProps(overrides, "BeforeHeadCom1440px")}
      {...rest}
    >
      <div className="Header_left">
        <Flex
          gap="24px"
          direction="row"
          width="221px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 14px 0px 14px"
          ref={ref}
          {...getOverrideProps(overrides, "Menu39423087")}
        >
          <Link to="/">
            <Image
              src={logo}
              width="40px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              borderRadius="50px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "unsplash:PfBvNnGIhmQ")}
            ></Image>
          </Link>
          <Text
            fontFamily="Inter"
            fontSize="34px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="41.147727966308594px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="41px"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Menu"
            {...getOverrideProps(overrides, "Menu39423082")}
            onClick={() => {
              setView(!view);
            }}
          ></Text>
          {view && (
            <MenuDropDown>
              <ul>
                <li>
                  <Link to="/swap">
                    <div>Swap</div>
                  </Link>
                </li>
                <li>
                  <div>메뉴2</div>
                </li>
                <li>
                  <div>메뉴3</div>
                </li>
              </ul>
            </MenuDropDown>
          )}
        </Flex>
      </div>
      {/* <div className="Header_middle"> */}
      <SearchField
        width="unset"
        height="unset"
        placeholder="Search"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      {/* </div> */}
      <div className="Header_right">
        {connect ? (
          login ? (
            <LoginAccount></LoginAccount>
          ) : address ? (
            <Web3Button></Web3Button>
          ) : (
            <>
              <ConnectModal></ConnectModal>
              <LoadingButton></LoadingButton>
            </>
          )
        ) : (
          <div className="Header_connect">
            <ConnectButton></ConnectButton>
          </div>
        )}
      </div>
    </Flex>
  );
}

const MenuDropDown = styled.div`
  border: 1px solid gainsboro;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  left: 95px;
  // right: 150px;
  width: 200px;
  background: white;
  z-index: 100;

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
