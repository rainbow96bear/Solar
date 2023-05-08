/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { connectThunk } from "../modules/connect.js";
import { accountThunk } from "../modules/account.js";
import { loginThunk } from "../modules/login.js";
import metamaskLogo from "./images/metamaskLogo.jpg";
import kaikasLogo from "./images/kaikasLogo.jpg";
import trustLogo from "./images/trustLogo.jpg";
import coinbaseLogo from "./images/coinbaseLogo.png";
import axios from "axios";
import { Web3Button } from "@web3modal/react";
import { useWeb3 } from "../modules/useWeb3.js";
import { useWeb3K } from "../modules/useWeb3Kaikas.js";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import logo1 from "./images/6.png";
import { useWeb3T } from "../modules/useWeb3Trust.js";
import { useWeb3C } from "../modules/useWeb3Coinbase.js";

export default function ConnectModal(props) {
  const { overrides, ...rest } = props;

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const dispatch = useDispatch();
  const { account, login } = useWeb3();
  const { accountK, loginK } = useWeb3K();
  const { accountT, loginT } = useWeb3T();
  const { accountC, loginC } = useWeb3C();

  const metamaskLogin = async () => {
    try {
      if (!window.ethereum) {
        return;
      }
      console.log(window.ethereum);
      await login();
      const [_account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const data = await axios.post("http://localhost:8080/api/user/login", {
        account: _account,
        walletKind: "metamask",
      });
      dispatch(accountThunk({ account: _account }));
      dispatch(loginThunk({ login: true }));
    } catch (error) {
      console.error(error);
    }
  };

  const kaikasLogin = async () => {
    try {
      if (!window.klaytn) {
        return;
      }
      await loginK();
      const [_account] = await window.klaytn.enable();
      const data = await axios.post("http://localhost:8080/api/user/login", {
        account: _account,
        walletKind: "kaikas",
      });
      dispatch(accountThunk({ account: _account }));
      dispatch(loginThunk({ login: true }));
    } catch (error) {
      console.error(error);
    }
  };

  const trustLogin = async () => {
    try {
      await loginT();
    } catch (error) {
      console.error(error);
    }
  };
  const coinbaseLogin = async () => {
    try {
      console.log(window.ethereum);
      console.log(window.web3);
      console.log(window.web3.currentProvider.isCoinbaseWallet);
      await loginC();
      // const [_account] = await window.ethereum.request({
      //   method: "eth_requestAccounts",
      // });
      // const data = await axios.post("http://localhost:8080/api/user/login", {
      //   account: _account,
      //   walletKind: "coinbase",
      // });
      // dispatch(accountThunk({ account: _account }));
      // dispatch(loginThunk({ login: true }));
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <ModalCover
      onClick={e => {
        if (e.target !== e.currentTarget) return;
        dispatch(connectThunk({ connect: false }));
      }}
    >
      {/* <Flex
        gap="10px"
        direction="column"
        width="500px"
        height="400px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        margin="0px 23px 0px 10px"
        borderRadius="10px"
        padding="20px 20px 30px 20px"
        backgroundColor="rgba(252,253,254,1)"
        className="ConnectModal"
        {...getOverrideProps(overrides, "ConnectModal")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "ConnectModalTitle")}
        >
          <Text
            fontFamily="Do Hyeon"
            fontSize="32px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="40px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Connect Wallet"
            {...getOverrideProps(overrides, "Connect Wallet")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            className="cursorPointer"
            onClick={() => {
              dispatch(connectThunk({ connect: false }));
            }}
            {...getOverrideProps(overrides, "XIcon")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 1.13144e-15L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "ConnectModalButton")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="300px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(220,220,220,1)"
            borderRadius="10px"
            padding="9px 21px 9px 9px"
            className="cursorPointer"
            onClick={() => {
              metamaskLogin();
            }}
            {...getOverrideProps(overrides, "ConnectModalMetamask")}
          >
            <Image
              width="40px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={metamaskLogo}
              {...getOverrideProps(overrides, "metamaskLogo 1")}
            ></Image>
            <Text
              fontFamily="Do Hyeon"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="40px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Metamask"
              {...getOverrideProps(overrides, "Metamask")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="300px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(220,220,220,1)"
            borderRadius="10px"
            padding="9px 33px 9px 9px"
            className="cursorPointer"
            onClick={() => {
              trustLogin();
            }}
            {...getOverrideProps(overrides, "ConnectModalKaikas")}
          >
            <Image
              width="40px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={trustLogo}
              {...getOverrideProps(overrides, "kaikasLogo 1")}
            ></Image>
            <Text
              fontFamily="Do Hyeon"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="40px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Trust Wallet"
              {...getOverrideProps(overrides, "Kaikas")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="300px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(220,220,220,1)"
            borderRadius="10px"
            padding="9px 33px 9px 9px"
            className="cursorPointer"
            onClick={() => {
              coinbaseLogin();
            }}
            {...getOverrideProps(overrides, "ConnectModalKaikas")}
          >
            <Image
              width="40px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={coinbaseLogo}
              {...getOverrideProps(overrides, "kaikasLogo 1")}
            ></Image>
            <Text
              fontFamily="Do Hyeon"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="40px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Coinbase Wallet"
              {...getOverrideProps(overrides, "Kaikas")}
            ></Text>
          </Flex>

          <Web3Button
            className="Web3Button"
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connect Wallet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          ></Web3Button>
        </Flex>
      </Flex> */}

      <Flex
        gap="0"
        direction="row"
        width="50vw"
        height="unset"
        justifyContent="flex-start"
        alignItems="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        boxShadow="4px 37px 27px rgba(0, 0, 0, 0.25)"
        borderRadius="35px"
        {...getOverrideProps(overrides, "Sosim")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="column"
          width="174.15px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="35px 0px 0px 35px"
          padding="38px 27px 38px 27px"
          backgroundColor="rgba(252,253,254,1)"
          {...getOverrideProps(overrides, "Frame 201")}
        >
          <Flex
            gap="14px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 55")}
          >
            <Text
              fontFamily="ffProBook"
              fontSize="15px"
              fontWeight="500"
              lineHeight="18.15340805053711px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="WALLET"
              {...getOverrideProps(overrides, "CREATE")}
            ></Text>
            <Flex
              gap="19px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 54")}
            >
              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={() => {
                  metamaskLogin();
                }}
                {...getOverrideProps(overrides, "Frame 49")}
              >
                <Image
                  width="25px"
                  height="25px"
                  viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                  src={metamaskLogo}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector41212688")}
                ></Image>
                <Text
                  fontFamily="ffProBook"
                  fontSize="15px"
                  fontWeight="800"
                  color="rgba(114,113,113,1)"
                  lineHeight="18.15340805053711px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="MetaMask"
                  {...getOverrideProps(overrides, "Defi")}
                ></Text>
              </Flex>
              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={() => {
                  kaikasLogin();
                }}
                {...getOverrideProps(overrides, "Frame 50")}
              >
                <Image
                  width="25px"
                  height="25px"
                  viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                  src={kaikasLogo}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector41212691")}
                ></Image>
                <Text
                  fontFamily="ffProBook"
                  fontSize="15px"
                  fontWeight="800"
                  color="rgba(114,113,113,1)"
                  lineHeight="18.15340805053711px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Kaikas"
                  {...getOverrideProps(overrides, "Deposit")}
                ></Text>
              </Flex>

              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 52")}
              >
                <Icon
                  width="25px"
                  height="25px"
                  viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                  paths={[
                    {
                      d: "M18.8047 11.8049C18.9873 11.7826 19.1722 11.7826 19.3547 11.8049C19.4529 11.5916 19.47 11.2241 19.3813 10.8243C19.2495 10.2302 19.0709 9.86997 18.7024 9.92621C18.334 9.98245 18.3198 10.4129 18.4517 11.0075C18.5262 11.3416 18.6581 11.6278 18.8065 11.8049L18.8047 11.8049ZM15.6373 12.2771C15.9017 12.3884 16.0631 12.4586 16.127 12.3957C16.2388 12.2876 15.9212 11.8728 15.4102 11.6668C15.1152 11.5517 14.7937 11.5101 14.4766 11.546C14.1596 11.5819 13.8577 11.6941 13.6 11.8717C13.4226 11.9931 13.2565 12.1624 13.2801 12.2648C13.3304 12.4731 13.8715 12.1139 14.6166 12.071C15.0306 12.0465 15.3736 12.1685 15.6373 12.2776L15.6373 12.2771ZM15.1051 12.5627C14.5687 12.6418 14.218 12.9263 14.3085 13.1251C14.3617 13.144 14.3777 13.1702 14.6166 13.08C14.9695 12.9546 15.3509 12.9172 15.7237 12.9714C15.8964 12.9903 15.9786 13.0004 16.0158 12.9441C16.1022 12.8205 15.6781 12.4987 15.1057 12.5627L15.1051 12.5627ZM18.3086 13.5149C18.5085 13.1323 17.664 12.7392 17.4629 13.1251C17.2618 13.511 18.1087 13.8979 18.3098 13.5132L18.3086 13.5149ZM19.2347 12.3751C18.7817 12.3678 18.7645 13.2548 19.2193 13.2621C19.6741 13.2693 19.6912 12.3817 19.2359 12.3734L19.2347 12.3751ZM6.29596 16.7683C6.2179 16.7856 5.94113 16.849 5.79506 16.6375C5.48755 16.192 6.45208 15.5027 5.97248 14.6457C5.43432 13.673 4.32727 13.8918 3.8997 14.3373C3.38462 14.8718 3.38402 15.648 3.60402 15.6781C3.85653 15.7098 3.8453 15.3178 4.04045 15.0305C4.09498 14.9513 4.16565 14.883 4.24837 14.8297C4.33109 14.7763 4.42422 14.7389 4.52238 14.7197C4.62053 14.7004 4.72177 14.6996 4.82024 14.7174C4.91871 14.7352 5.01246 14.7712 5.09606 14.8234C5.78146 15.246 5.17708 15.8123 5.23089 16.417C5.31309 17.3457 6.32021 17.3285 6.50708 16.9181C6.51915 16.8978 6.52447 16.8746 6.52237 16.8515C6.52026 16.8284 6.51081 16.8064 6.49525 16.7884C6.49703 16.8379 6.53547 16.716 6.29714 16.7666L6.29596 16.7683ZM24.0207 15.8178C23.8226 15.1647 23.8687 15.3045 23.6197 14.6753C23.7646 14.4709 24.5239 13.3389 23.4382 12.267C22.8231 11.659 21.4334 11.3461 21.0076 11.2347C20.9189 10.6005 21.2826 7.96623 19.735 6.61318C20.9645 5.41325 21.7315 4.09138 21.7297 2.95771C21.7261 0.77724 18.8822 0.117975 15.3771 1.48383L14.635 1.78061C14.6314 1.77783 13.2919 0.540595 13.2718 0.523891C9.27709 -2.75684 -3.21692 10.3176 0.77783 13.4937L1.6507 14.1903C1.41514 14.7854 1.33206 15.4245 1.40824 16.0556C1.60694 17.9153 3.53719 19.4198 5.4018 19.4176C8.81581 26.8266 21.2448 26.8388 24.4613 19.5847C24.5642 19.3358 25 18.2143 25 17.2249C25 16.2354 24.4033 15.8178 24.0225 15.8178L24.0207 15.8178ZM5.3332 18.4994C3.98368 18.4655 2.52653 17.3218 2.38164 15.9654C2.01676 12.5516 6.7732 11.7743 7.3492 15.2788C7.61768 16.9292 7.07303 18.5356 5.33143 18.4978L5.3332 18.4994ZM4.23856 12.1407C3.34204 12.3049 2.55196 12.7832 2.06821 13.4464C1.77962 13.2198 1.24029 12.7782 1.14626 12.6112C0.376877 11.2275 1.98838 8.54643 3.11554 7.03135C5.90151 3.2879 10.2641 0.454847 12.2848 0.968784C12.613 1.0562 13.7006 2.24333 13.7006 2.24333C13.7006 2.24333 11.681 3.29793 9.80933 4.76847C7.28651 6.59759 5.38051 9.25581 4.23856 12.1407ZM18.3654 17.7728C18.3654 17.7728 16.2518 18.0679 14.2547 17.3791C14.6219 16.2566 15.8514 17.7188 19.9556 16.6102C20.8598 16.3663 22.0473 15.8863 22.9716 15.1987C23.1705 15.6313 23.3119 16.0854 23.3926 16.5506C23.6091 16.5138 24.2354 16.5216 24.0692 17.5584C23.8746 18.6648 23.3755 19.5629 22.5357 20.3893C22.0112 20.9244 21.3868 21.3643 20.6936 21.6872C20.3075 21.8777 19.9051 22.0375 19.4907 22.1649C16.3263 23.1382 13.0861 22.068 12.0394 19.7706C11.9545 19.5953 11.8843 19.414 11.8295 19.2283C11.3842 17.7138 11.762 15.8969 12.9436 14.7532C13.0164 14.6803 13.0903 14.5945 13.0903 14.4865C13.08 14.3935 13.0404 14.3055 12.9767 14.2337C12.5628 13.6697 11.1322 12.708 11.4196 10.8466C11.6266 9.51027 12.8679 8.5687 14.0258 8.62438L14.3215 8.64053C14.823 8.66837 15.2612 8.72907 15.6746 8.74521C16.3659 8.77305 16.9874 8.67895 17.7231 8.10154C17.9715 7.90665 18.1708 7.73738 18.5073 7.68337C18.6433 7.65166 18.7848 7.64636 18.9231 7.6678C19.0613 7.68925 19.1935 7.73698 19.3116 7.8081C19.9029 8.17782 19.9857 9.07373 20.0165 9.72854C20.0336 10.1027 20.0815 11.0092 20.0981 11.267C20.1353 11.8611 20.3009 11.9447 20.6368 12.0465C20.8255 12.105 21.0005 12.1484 21.2584 12.2169C22.0396 12.4235 22.5003 12.6334 22.7959 12.9024C22.9467 13.0414 23.0452 13.2231 23.0763 13.4196C23.1685 14.0527 22.5547 14.8339 20.929 15.5444C18.1667 16.7516 15.389 16.349 14.9868 16.3062C13.7952 16.1553 13.1163 17.6046 13.8307 18.5974C15.1696 20.4577 21.0691 19.7111 22.7823 17.4086C22.8231 17.353 22.7894 17.3201 22.7392 17.353C20.269 18.9443 16.9993 19.4805 15.1424 18.8007C14.8603 18.6977 14.2713 18.4421 14.1997 17.8725C16.7781 18.6236 18.3985 17.9137 18.3985 17.9137C18.3985 17.9137 18.5185 17.7583 18.3654 17.7728ZM9.38413 7.0152C10.3741 5.93777 11.5935 5.00066 12.6858 4.47447C12.694 4.46987 12.7037 4.46799 12.7132 4.46912C12.7227 4.47025 12.7315 4.47433 12.7383 4.48071C12.7451 4.48709 12.7494 4.49541 12.7506 4.50436C12.7518 4.51331 12.7498 4.52239 12.7449 4.53015C12.6586 4.67826 12.4912 4.99453 12.438 5.23452C12.4359 5.24277 12.4365 5.25143 12.4397 5.25935C12.443 5.26727 12.4487 5.27407 12.4561 5.27884C12.4636 5.28362 12.4724 5.28615 12.4814 5.28609C12.4904 5.28603 12.4992 5.28338 12.5066 5.2785C13.1861 4.84252 14.3682 4.37536 15.4043 4.31522C15.4141 4.31459 15.4238 4.31694 15.4321 4.32193C15.4403 4.32691 15.4466 4.33425 15.45 4.34288C15.4535 4.3515 15.4539 4.36094 15.4512 4.3698C15.4485 4.37866 15.4429 4.38647 15.4351 4.39206C15.2638 4.51635 15.1105 4.66124 14.9791 4.82303C14.9744 4.8292 14.9715 4.83647 14.9708 4.84406C14.9702 4.85165 14.9717 4.85927 14.9753 4.86609C14.9789 4.87292 14.9844 4.87869 14.9912 4.88278C14.9981 4.88686 15.0059 4.88912 15.014 4.88929C15.742 4.8943 16.768 5.13429 17.4387 5.48731C17.4836 5.51125 17.4517 5.59366 17.4008 5.58308C13.2878 4.69552 10.1222 6.61485 9.44681 7.07701C9.43781 7.08247 9.42704 7.08472 9.41643 7.08337C9.40582 7.08202 9.39607 7.07714 9.38894 7.06962C9.3818 7.0621 9.37776 7.05243 9.37753 7.04235C9.3773 7.03227 9.38089 7.02245 9.38767 7.01464L9.38413 7.0152Z",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector41212700")}
                ></Icon>
                <Text
                  fontFamily="ffProBook"
                  fontSize="15px"
                  fontWeight="800"
                  color="rgba(114,113,113,1)"
                  lineHeight="18.15340805053711px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Connect Wallet"
                  {...getOverrideProps(overrides, "Add Liquidity")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <motion.div
          style={{
            gap: "10px",
            direction: "column",
            width: "100vw",
            height: "unset",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            grow: "1",
            shrink: "1",
            basis: "0",
            alignSelf: "stretch",
            position: "relative",
            borderRadius: "0px 35px 35px 0px",
            padding: "27px 38px 27px 38px",
            backgroundImage:
              "linear-gradient(-90deg, rgba(32,32,32,1), rgba(32,32,32,1))",
          }}
          whileHover={{
            backgroundImage: `url(${logo1})`,
            boxShadow: "38px 45px 28px rgba(0, 0, 0, 0.25)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="48vh"
            justifyContent="flex-end"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="0px 35px 35px 0px"
            // padding="27px 38px 27px 38px"
            // backgroundImage="linear-gradient(-90deg, rgba(32,32,32,1), rgba(32,32,32,1))"
            {...getOverrideProps(overrides, "Frame 202")}
          >
            <Flex
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              style={{ cursor: "pointer" }}
              backgroundColor="rgba(247,239,227,1)"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-end"
              alignItems="center"
              alignSelf="flex-end"
              shrink="0"
              position="relative"
              padding="15px 15px 15px 15px"
              borderRadius="30px"
              className="cursorPointer"
              onClick={() => {
                dispatch(connectThunk({ connect: false }));
              }}
              {...getOverrideProps(overrides, "XIcon")}
            >
              <Icon
                width="27px"
                height="27px"
                viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
                paths={[
                  {
                    d: "M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 1.13144e-15L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </Flex>

            <Flex
              gap="0px"
              direction="column"
              width="unset"
              height="unset"
              marginTop="5px"
              justifyContent="flex-end"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 56")}
            >
              <Text
                fontFamily="ffProBook"
                fontSize="25px"
                fontWeight="800"
                color="rgba(252,253,254,1)"
                lineHeight="42.35795211791992px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="So Easy So Simple "
                {...getOverrideProps(overrides, "So Easy So Simple")}
              ></Text>
              <Text
                fontFamily="ffProBook"
                fontSize="12px"
                fontWeight="500"
                color="rgba(252,253,254,1)"
                lineHeight="22.99431800842285px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Create a new Deposit  and Swap it one of your&#xA;own Defi"
                {...getOverrideProps(
                  overrides,
                  "Create a new Deposit and Swap it one of your own Defi"
                )}
              ></Text>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
    </ModalCover>
  );
}

const ModalCover = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  align-items: center;
  z-index: 88;

  .ConnectModal {
    display: flex;
    justify-content: center;

    .cursorPointer {
      cursor: pointer;
    }
  }
  .Web3Button {
    button {
      background-color: orange !import;
    }
  }
`;
