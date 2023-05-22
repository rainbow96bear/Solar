/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, Pagination, Loader } from "@aws-amplify/ui-react";

import Poolitem768px from "../components/Pool/Poolitem768px";
import {
  Netlist768px,
  Dexlist768px,
} from "../components/netdexlist/Netdexlist";
import { motion, LayoutGroup } from "framer-motion";
import { useSelector } from "react-redux";

export default function PooListCom768px(props) {
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
    <Flex
      display="flex"
      gap="52px"
      direction="column"
      width="87vw"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PooListCom768px")}
      {...rest}
    >
      <Flex
        gap="25px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
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
          width={{ base: "80vw", medium: "87vw" }}
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "rgba(247,239,227,0.75)",
          }}
        >
          <Flex
            gap="23px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="35px"
            padding="28px 38px 28px 38px"
            {...getOverrideProps(overrides, "Networks List39563128")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="24px"
              fontWeight="700"
              lineHeight="29.045454025268555px"
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
              children="MainNet"
              {...getOverrideProps(overrides, "Networks List39563127")}
            ></Text>
            <Flex
              gap="18px"
              direction="column"
              width="unset"
              height="178px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Networks39422850")}
            >
              <Flex
                gap="30px"
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
                  <Netlist768px
                    key={`Netlist768px-1${idx}`}
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
                gap="30px"
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
                  <Netlist768px
                    key={`Netlist768px-2${idx}`}
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
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "rgba(247,239,227,0.75)",
          }}
        >
          <Flex
            gap="23px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="35px"
            padding="28px 38px 28px 38px"
            {...getOverrideProps(overrides, "Networks List39563128")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="24px"
              fontWeight="700"
              lineHeight="29.045454025268555px"
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
              children="Dex"
              {...getOverrideProps(overrides, "Networks List39563127")}
            ></Text>
            <Flex
              gap="18px"
              direction="column"
              width="unset"
              height="178px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Networks39422850")}
            >
              <Flex
                gap="30px"
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
                  <Dexlist768px
                    key={`platformList768px-1${idx}`}
                    item={item}
                    setCurrentPagePoolList={setCurrentPagePoolList}
                    setTotalPages={setTotalPages}
                    setFilter={setFilter}
                    pageIndex={pageIndex}
                    filter={filter}
                  />
                ))}
              </Flex>
              <Flex
                gap="30px"
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
                  <Dexlist768px
                    key={`platformList768px-2${idx}`}
                    item={item}
                    setCurrentPagePoolList={setCurrentPagePoolList}
                    setTotalPages={setTotalPages}
                    setFilter={setFilter}
                    pageIndex={pageIndex}
                    filter={filter}
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
                <Poolitem768px
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
                  key={`PoolList768px-${idx}`}
                  item={item}
                  last={idx == currentPagePoolList.length - 1 ? true : false}
                  currentPagePoolList={currentPagePoolList}
                />
              ))}
            </motion.div>
          </LayoutGroup>
        )}
        <Flex width="80vw" justifyContent="center" padding="30px 0px 0px 0px">
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
    </Flex>
  );
}
