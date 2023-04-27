/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  Text,
  Pagination,
  usePagination,
} from "@aws-amplify/ui-react";

import Poolitem768px from "../components/pool/Poolitem768px";
import {
  Netlist768px,
  Dexlist768px,
} from "../components/netdexlist/Netdexlist";
import { motion, LayoutGroup } from "framer-motion";
import { getMainPoolList, netList, dexlist, dexList } from "../api/index.js";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../modules/isLoading.js";
import {
  mainNet768px1,
  mainNet768px2,
  platform768px1,
  platform768px2,
} from "../mainNet";

import { useLocation } from "react-router-dom";

const networkArray = [
  "ethereum",
  "optimism",
  "metis",
  "aurora",
  "bsc",
  "kava",
  "heco",
  "polygon",
  "fantom",
];

const dexArray = [
  "uniswap",
  "pancakeswap",
  "sushi",
  "quickswap",
  "linch",
  "curve",
  "bnt",
  "knc",
  "matcha",
  "bal",
];

export default function PooListCom768px(props) {
  const { overrides, ...rest } = props;
  const didMount = React.useRef(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [currentPagePoolList, setCurrentPagePoolList] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(
    Number(queryParams.get("page")) || 1
  );
  const [filter, setFilter] = React.useState(String(queryParams.get("filter")));

  const [totalPages, setTotalPages] = React.useState(1);
  const [mainNetList, setMainNetList] = React.useState([]);
  const [platformList, setPlatformList] = React.useState([]);
  const [mainNetList1, setMainNetList1] = React.useState([]);
  const [platformList1, setPlatformList1] = React.useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    queryParams.set("page", pageIndex);
    queryParams.set("filter", filter);

    const newUrl = `${location.pathname}?${queryParams?.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [pageIndex, filter, location, queryParams]);

  const getPoolList = async () => {
    try {
      dispatch(isLoadingThunk({ isLoading: true }));
      if (filter == "null") {
        const { poolListData, resultTotalPages } = await getMainPoolList(
          pageIndex
        );
        setCurrentPagePoolList(poolListData);
        setTotalPages(resultTotalPages);
      } else if (filter != "null") {
        if (networkArray.includes(filter)) {
          const data = await netList(filter, pageIndex);
          setCurrentPagePoolList(data.poolListData);
          setTotalPages(Math.ceil(data.poolListDataLength / 10));
        } else if (dexArray.includes(filter)) {
          const data = await dexList(filter, pageIndex);

          setCurrentPagePoolList(data.poolListData);
          setTotalPages(Math.ceil(data.poolListDataLength / 10));
        }
      }

      setTimeout(() => {
        dispatch(isLoadingThunk({ isLoading: false }));
      }, 5000);
    } catch (error) {
      dispatch(isLoadingThunk({ isLoading: false }));
      console.error(error);
    }
  };

  React.useEffect(() => {
    getPoolList();
  }, [pageIndex]);

  React.useEffect(() => {
    if (didMount.current == true) {
      setPageIndex(1);
    } else if (didMount.current == false) {
      didMount.current = true;
    }
  }, [filter]);

  React.useEffect(() => {
    setMainNetList(Object.keys(mainNet768px1));
    setPlatformList(Object.values(platform768px1));
    setMainNetList1(Object.keys(mainNet768px2));
    setPlatformList1(Object.values(platform768px2));
  }, []);

  const paginationProps = usePagination({
    totalPages: totalPages,
    currentPage: pageIndex,
    siblingCount: 2,
  });

  const isTablet = useMediaQuery({
    query: "(min-width:481px) and (max-width:991px)",
  });

  return (
    <>
      {isTablet ? (
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
                  "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
              }}
              width={{ base: "80vw", medium: "87vw" }}
              whileHover={{ borderRadius: "75px" }}
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
                  children="Networks List"
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
                  "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
              }}
              whileHover={{ borderRadius: "75px" }}
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
                  children="Dex List"
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
                    {platformList1?.map((item, idx) => (
                      <Dexlist768px
                        key={`platformList768px-2${idx}`}
                        item={item}
                        setCurrentPagePoolList={setCurrentPagePoolList}
                      />
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>

            <LayoutGroup>
              <motion.div
                layout
                initial={{ borderRadius: 25 }}
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {currentPagePoolList.map((item, idx) => (
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
                  />
                ))}
              </motion.div>
            </LayoutGroup>
            <Flex
              width="80vw"
              justifyContent="center"
              padding="30px 0px 0px 0px"
            >
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
      ) : (
        <></>
      )}
    </>
  );
}

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
