/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
export default function LoginAccount(props) {
  const { overrides, ...rest } = props;
  const [view, setView] = React.useState(false);
  const account = useSelector((state) => state.account.account.account);

  const { pathname } = useLocation();
  const ref = React.useRef();

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
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [view]);

  return (
    <LoginAccountCover className="LoginAccountCover" ref={ref}>
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
        <Flex
          gap="10px"
          direction="row"
          width="220px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="15px"
          padding="9px 9px 9px 9px"
          className="LoginAccountCover_accountBox"
          {...getOverrideProps(overrides, "Frame 15")}
        >
          <AccountCover>
            <Text
              fontFamily="Kanit"
              fontSize="18px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="20px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="1.65px"
              width="165px  "
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={account}
              {...getOverrideProps(overrides, "account")}
            ></Text>
          </AccountCover>
          <Flex
            padding="0px 0px 0px 0px"
            width="20px"
            height="13.75px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "dropdownIcon")}
          >
            {!view ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            )}
          </Flex>
        </Flex>
      </Flex>
      {view && (
        <MenuDropDown>
          <ul>
            <li>
              <div>메뉴1</div>
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
    </LoginAccountCover>
  );
}

const LoginAccountCover = styled.div`
  .LoginAccountCover_accountBox {
    // text-overflow: ellipsis;
    // overflow: hidden;
    // white-space: nowrap;
  }
`;

const AccountCover = styled.div`
  width: 165px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  p {
    text-overflow: ellipsis;
  }
`;

const MenuDropDown = styled.div`
  border: 1px solid gainsboro;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  right: 10px;
  width: 220px;
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
