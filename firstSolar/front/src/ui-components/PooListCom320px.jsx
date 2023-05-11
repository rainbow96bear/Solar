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
  View,
} from "@aws-amplify/ui-react";
import {
  Netlist320px,
  Dexlist320px,
} from "../components/netdexlist/Netdexlist";
import Poolitem320px from "../components/Pool/Poolitem320px";
import { motion, LayoutGroup } from "framer-motion";
import { dexList, getMainPoolList, netList } from "../api";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../modules/isLoading.js";
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

export default function PooListCom320px(props) {
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
  }, [pageIndex, location, queryParams]);

  const getPoolList = async () => {
    try {
      dispatch(setIsLoading(true));
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
        dispatch(setIsLoading(false));
      }, 5000);
    } catch (error) {
      dispatch(setIsLoading(false));
      console.error(error);
    }
  };

  React.useEffect(() => {
    getPoolList();
  }, [pageIndex]);

  React.useEffect(() => {
    if (didMount.current) setPageIndex(1);
    else didMount.current = true;
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
    siblingCount: 1,
  });

  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  return (
    <>
      {isMobile ? (
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
                        setCurrentPagePoolList={setCurrentPagePoolList}
                        setTotalPages={setTotalPages}
                        pageIndex={pageIndex}
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
                  />
                ))}
              </motion.div>
            </LayoutGroup>

            <Flex
              width="88vw"
              justifyContent="center"
              padding="30px 0px 50px 0px"
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
        </View>
      ) : (
        <></>
      )}
    </>
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
