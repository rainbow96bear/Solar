/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Icon,
  Image,
  SearchField,
  View,
  SwitchField,
  Menu,
  MenuItem,
  Divider,
  Loader,
  useTheme,
} from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import LoginAccount from "./LoginAccount";
import ConnectModal from "./ConnectModal";
import LoggedinUser from "./LoggedinUser";
export default function BeforeHeadCom320px(props) {
  const { overrides, ...rest } = props;
  const [searchView, setSearchView] = React.useState(false);
  const { tokens } = useTheme();
  const connect = useSelector((state) => state.connect.connect.connect);
  return (
    <Cover>
      <Flex>
        <Flex
          width="90vw"
          height={searchView ? "96px" : "48px"}
          display={{
            base: "flex",
            small: "none",
            medium: "none",
            large: "none",
            xl: "none",
            xxl: "none",
          }}
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "BeforeHeadCom320px")}
          {...rest}
        >
          {searchView ? (
            <SearchField
              width="300px"
              height="33px"
              placeholder="Search"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              overflow="hidden"
              top="65.63%"
              bottom="0%"
              left="3.13%"
              right="3.13%"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="quiet"
              {...getOverrideProps(overrides, "SearchField")}
            ></SearchField>
          ) : (
            <></>
          )}
          <Flex
            gap="0"
            direction="row"
            width="320px"
            height="50px"
            justifyContent="center"
            alignItems="center"
            // position="absolute"
            top="calc(50% - 25px - 23px)"
            left="0%"
            right="0%"
            padding="0px 14px 0px 14px"
            {...getOverrideProps(overrides, "Menu")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 50")}
            >
              <Flex
                direction="row"
                width="35px"
                height="35px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                // padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 48")}
              >
                <Image
                  src={logo}
                  width="35px"
                  height="35px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="50px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(
                    overrides,
                    "unsplash:PfBvNnGIhmQ39443727"
                  )}
                ></Image>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="30px"
                height="30px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                padding="5px 5px 5px 5px"
                {...getOverrideProps(overrides, "Frame 49")}
              >
                <Menu
                  menuAlign="start"
                  size="large"
                  className="my-menu-content"
                  triggerClassName="my-menu-trigger"
                >
                  <MenuItem onClick={() => alert("Download")}>
                    Download
                  </MenuItem>
                  <MenuItem onClick={() => alert("Create a Copy")}>
                    Create a Copy
                  </MenuItem>
                  <MenuItem onClick={() => alert("Mark as Draft")}>
                    Mark as Draft
                  </MenuItem>
                  <Divider />
                  <MenuItem isDisabled onClick={() => alert("Delete")}>
                    Delete
                  </MenuItem>
                  <MenuItem onClick={() => alert("Attend a workshop")}>
                    Attend a workshop
                  </MenuItem>
                </Menu>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="30px"
              height="30px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              padding="10px 10px 10px 10px"
              {...getOverrideProps(overrides, "Frame 49")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="30px"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
              {/* <SwitchField
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 47")}
          >
            <SwitchField
              className="my-custom-switchfield"
              onChange={() => {
                setSearchView(!searchView);
              }}
            ></SwitchField>
            <div className="header_right">
              {connect ? (
                document.cookie ? (
                  <LoggedinUser></LoggedinUser>
                ) : (
                  <>
                    <ConnectModal></ConnectModal>
                    <Loader
                      width="30px"
                      height="30px"
                      emptyColor={tokens.colors.red}
                      filledColor={tokens.colors.red[40]}
                    />
                  </>
                )
              ) : (
                <div className="header_conenct">
                  <LoginButton></LoginButton>
                </div>
              )}
            </div> */}
            </Flex>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 47")}
          >
            <SwitchField
              onChange={() => {
                setSearchView(!searchView);
              }}
            ></SwitchField>
            {connect ? (
              document.cookie ? (
                <LoggedinUser></LoggedinUser>
              ) : (
                <ConnectModal></ConnectModal>
              )
            ) : (
              <LoginButton></LoginButton>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Cover>
  );
}

const Cover = styled.div`
  .my-menu-content.amplify-menu-content {
    --amplify-components-button-border: none;
  }

  .my-menu-trigger.amplify-menu-trigger {
    --amplify-components-button-border-color: transparent;
  }

  .my-custom-switchfield {
    --amplify-components-switchfield-track-checked-background-color: #ffa500;
  }
`;
