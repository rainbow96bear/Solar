/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, Pagination, View, Loader } from "@aws-amplify/ui-react";
import {
  Netlist320px,
  Dexlist320px,
} from "../components/netdexlist/Netdexlist";
import Poolitem320px from "../components/Pool/Poolitem320px";
import { motion, LayoutGroup } from "framer-motion";
import { useSelector } from "react-redux";

export default function PooListCom320px(props) {
  const {
    overrides,
    mainNetList,
    mainNetList1,
    pageIndex,
    setPageIndex,
    filter,
    setFilter,
    currentPagePoolList,
    setCurrentPagePoolList,
    setTotalPages,
    networkArray,
    platformList,
    platformList1,
    paginationProps,
    ...rest
  } = props;

  const isLoading = useSelector((state) => state.isLoading);
  return (
    <View
      display="flex"
      width="88vw"
      height="1364px"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PooListCom320px")}
      {...rest}
    >
      <Flex
        gap="29px"
        direction="column"
        width="320px"
        height="380px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="calc(50% - 190px - 492px)"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PoolList")}
      >
        <motion.div
          style={{
            width: "89vw",
            height: "unset",
            borderRadius: "33px",
            backgroundColor: "rgba(248,251,251,0.35)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
          }}
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "rgba(247,239,227,0.75)",
          }}
        >
          <Flex
            gap="14px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="15px"
            padding="40px 26px 40px 26px"
            {...getOverrideProps(overrides, "NetworksList")}
          >
            <Text
              fontFamily="ffCondBold"
              fontSize="18px"
              fontWeight="700"
              lineHeight="21.784090042114258px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="18px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="MainNet"
              {...getOverrideProps(overrides, "Networks List")}
            ></Text>
            <Flex
              gap="12px"
              direction="column"
              width="unset"
              height="106px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Networks39422981")}
            >
              <Flex
                gap="12px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 3839412790")}
              >
                {mainNetList?.map((item, idx) => (
                  <Netlist320px
                    key={`Netlist320px-1${idx}`}
                    item={item}
                    filter={filter}
                    setFilter={setFilter}
                    setCurrentPagePoolList={setCurrentPagePoolList}
                    setTotalPages={setTotalPages}
                    pageIndex={pageIndex}
                  />
                ))}
              </Flex>
              <Flex
                gap="12px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 3839412790")}
              >
                {mainNetList1?.map((item, idx) => (
                  <Netlist320px
                    key={`Netlist320px-2${idx}`}
                    item={item}
                    pageIndex={pageIndex}
                    setCurrentPagePoolList={setCurrentPagePoolList}
                    setTotalPages={setTotalPages}
                    setFilter={setFilter}
                    filter={filter}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </motion.div>

        <motion.div
          style={{
            width: "89vw",
            height: "unset",
            borderRadius: "33px",
            backgroundColor: "rgba(248,251,251,0.35)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
          }}
          whileHover={{ borderRadius: "75px" }}
        >
          <Flex
            gap="14px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="15px"
            padding="40px 26px 40px 26px"
            {...getOverrideProps(overrides, "NetworksList")}
          >
            <Text
              fontFamily="ffCondBold"
              fontSize="18px"
              fontWeight="700"
              lineHeight="21.784090042114258px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="18px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Dex"
              {...getOverrideProps(overrides, "Networks List")}
            ></Text>
            <Flex
              gap="12px"
              direction="column"
              width="unset"
              height="106px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Networks39422981")}
            >
              <Flex
                gap="12px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 3839412790")}
              >
                {platformList?.map((item, idx) => (
                  <Dexlist320px
                    key={`Dexlist320px-1${idx}`}
                    item={item}
                    filter={filter}
                    setFilter={setFilter}
                    setCurrentPagePoolList={setCurrentPagePoolList}
                    setTotalPages={setTotalPages}
                    pageIndex={pageIndex}
                  />
                ))}
              </Flex>
              <Flex
                gap="12px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 3839412790")}
              >
                {platformList1?.map((item, idx) => (
                  <Dexlist320px
                    key={`Dexlist320px-2${idx}`}
                    item={item}
                    filter={filter}
                    setFilter={setFilter}
                    setCurrentPagePoolList={setCurrentPagePoolList}
                    setTotalPages={setTotalPages}
                    pageIndex={pageIndex}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </motion.div>

        {isLoading ? (
          <Flex
            minHeight="500px"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Loader width="80px" height="80px" />
          </Flex>
        ) : (
          <LayoutGroup>
            <motion.div
              layout
              initial={{ borderRadius: 25 }}
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {currentPagePoolList?.map((item, idx) => (
                <Poolitem320px
                  gap="17px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  key={`PoolList320px-${idx}`}
                  item={item}
                  currentPagePoolList={currentPagePoolList}
                />
              ))}
            </motion.div>
          </LayoutGroup>
        )}

        <Flex width="88vw" justifyContent="center" padding="30px 0px 50px 0px">
          <Pagination
            {...paginationProps}
            onChange={(pageNum) => {
              setPageIndex(pageNum);
            }}
            onNext={() => {
              setPageIndex(pageIndex + 1);
            }}
            onPrevious={() => {
              setPageIndex(pageIndex - 1);
            }}
          />
        </Flex>
      </Flex>
    </View>
  );
}

const FooterCompo = styled.div`
  z-index: 900;
  background-color: #f8f8f8;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .Footer_innerBox {
  }
`;

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin-top: 38px;
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  display: flex;
  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;
