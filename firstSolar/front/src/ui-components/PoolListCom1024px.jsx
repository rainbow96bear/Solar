/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, Pagination, usePagination } from "@aws-amplify/ui-react";
import Poolitem1024 from "../components/pool/Poolitem1024px";
import { motion, LayoutGroup } from "framer-motion";
import {
  Netlist1024px,
  Dexlist1024px,
} from "../components/netdexlist/Netdexlist";
import { getMainPoolList, netList, dexList } from "../api/index.js";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../modules/isLoading.js";
import { mainNet, platform } from "../mainNet";
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
export default function PoolListCom1024px(props) {
  const { overrides, ...rest } = props;
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

  const [sortAPY, setSortAPY] = React.useState();
  const [sortTVL, setSortTVL] = React.useState();

  const dispatch = useDispatch();
  React.useEffect(() => {
    queryParams.set("page", pageIndex);
    queryParams.set("filter", filter);

    const newUrl = `${location.pathname}?${queryParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [pageIndex, filter, location, queryParams]);

  const getPoolList = async () => {
    try {
      dispatch(isLoadingThunk({ isLoading: true }));
      if (!filter) {
        const { poolListData, resultTotalPages } = await getMainPoolList(
          pageIndex
        );
        setCurrentPagePoolList(poolListData);
        setTotalPages(resultTotalPages);
      } else if (filter) {
        if (networkArray.includes(filter)) {
          const data = await netList(filter, pageIndex);
          console.log("networkArray data : ", data);
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

  // const getFilteredList = async () => {
  //   try {
  //     dispatch(isLoadingThunk({ isLoading: true }));
  //     if (networkArray.includes(filter)) {
  //       netList(filter, pageIndex);
  //     } else if (dexArray.includes(filter)) {
  //       dexList(filter, pageIndex);
  //     }
  //     dispatch(isLoadingThunk({ isLoading: false }));
  //   } catch (error) {
  //     dispatch(isLoadingThunk({ isLoading: false }));
  //     console.error(error);
  //   }
  // };

  React.useEffect(() => {
    getPoolList();
  }, [pageIndex]);

  React.useEffect(() => {
    setPageIndex(1);
  }, [filter]);

  React.useEffect(() => {
    setMainNetList(Object.keys(mainNet));
    setPlatformList(Object.values(platform));
  }, []);

  const paginationProps = usePagination({
    totalPages: totalPages,
    currentPage: pageIndex,
    siblingCount: 2,
  });

  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });

  function aesAPY(a, b) {
    if (a.apy < b.apy) {
      return -1;
    }
    if (a.apy > b.apy) {
      return 1;
    }
    return 0;
  }

  function descAPY(a, b) {
    if (a.apy > b.apy) {
      return -1;
    }
    if (a.apy < b.apy) {
      return 1;
    }
    return 0;
  }

  function aesTVL(a, b) {
    if (a.tvl < b.tvl) {
      return -1;
    }
    if (a.tvl > b.tvl) {
      return 1;
    }
    return 0;
  }

  function descTVL(a, b) {
    if (a.tvl > b.tvl) {
      return -1;
    }
    if (a.tvl < b.tvl) {
      return 1;
    }
    return 0;
  }

  return (
    <>
      {isDesktop ? (
        <Flex
          display="flex"
          gap="26px"
          direction="column"
          width="87vw"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PoolListCom1024px")}
          {...rest}
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
            whileHover={{ borderRadius: "75px" }}
          >
            <Flex
              gap="21px"
              direction="column"
              width="unset"
              height="209px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="35px"
              padding="30px 51px 46px 51px"
              {...getOverrideProps(overrides, "Networks39913185")}
            >
              <Text
                fontFamily="ffProBlack"
                fontSize="28px"
                fontWeight="700"
                lineHeight="33.8863639831543px"
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
                {...getOverrideProps(overrides, "Networks List")}
              ></Text>
              <Flex
                gap="23px"
                direction="row"
                width="unset"
                height="78px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "NetWork List39913187")}
              >
                {mainNetList?.map((item, idx) => (
                  <Netlist1024px
                    key={`Netlist1024px-${idx}`}
                    item={item}
                    pageIndex={pageIndex}
                    setFilter={setFilter}
                    setCurrentPagePoolList={setCurrentPagePoolList}
                    setTotalPages={setTotalPages}
                  />
                ))}
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
              gap="21px"
              direction="column"
              width="unset"
              height="209px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="35px"
              padding="30px 51px 46px 51px"
              {...getOverrideProps(overrides, "Networks39913185")}
            >
              <Text
                fontFamily="ffProBlack"
                fontSize="28px"
                fontWeight="700"
                lineHeight="33.8863639831543px"
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
                {...getOverrideProps(overrides, "Networks List")}
              ></Text>

              <Flex
                gap="23px"
                direction="row"
                width="unset"
                height="78px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "NetWork List39913187")}
              >
                {platformList?.map((item, idx) => (
                  <Dexlist1024px
                    key={`Dexlist1024px-${idx}`}
                    item={item}
                    pageIndex={pageIndex}
                    setCurrentPagePoolList={setCurrentPagePoolList}
                    setTotalPages={setTotalPages}
                    setFilter={setFilter}
                  />
                ))}
              </Flex>
            </Flex>
          </motion.div>

          <motion.div
            style={{
              width: "89vw",
              height: "unset",
              borderRadius: "15px",
              backgroundColor: "rgba(248,251,251,0.35)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backgroundImage:
                "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
            }}
            whileHover={{ borderRadius: "35px" }}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="13px"
              padding="6px 0px 6px 0px"
              {...getOverrideProps(overrides, "Top")}
            >
              <Flex
                gap="94px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 32px 0px 116px"
                {...getOverrideProps(overrides, "Frame 143")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Frame 144")}
                >
                  <Text
                    fontFamily="ffProBook"
                    fontSize="15px"
                    fontWeight="600"
                    lineHeight="18.15340805053711px"
                    textAlign="center"
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
                    children="LP List"
                    {...getOverrideProps(overrides, "LP List")}
                  ></Text>
                </Flex>
                <Flex
                  gap="15px"
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
                  {...getOverrideProps(overrides, "Frame 142")}
                >
                  <Text
                    fontFamily="ffProBook"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="WALLET"
                    {...getOverrideProps(overrides, "WALLET")}
                  ></Text>
                  <Text
                    fontFamily="ffProBook"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="DEPOSITED"
                    {...getOverrideProps(overrides, "DEPOSITED")}
                  ></Text>
                  <Text
                    fontFamily="ffProBook"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="APY"
                    onClick={() => {
                      setSortAPY(
                        sortAPY == undefined
                          ? "up"
                          : sortAPY == "up"
                          ? "down"
                          : undefined
                      );
                    }}
                    {...getOverrideProps(overrides, "APY")}
                  ></Text>
                  <Text
                    fontFamily="ffProBook"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="TVL"
                    onClick={() => {
                      setSortTVL(
                        sortTVL == undefined
                          ? "up"
                          : sortTVL == "up"
                          ? "down"
                          : undefined
                      );
                    }}
                    {...getOverrideProps(overrides, "TVL")}
                  ></Text>
                  <Text
                    fontFamily="ffProBook"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="DAILY RATE"
                    {...getOverrideProps(overrides, "DAILY RATE")}
                  ></Text>
                  <Text
                    fontFamily="ffProBook"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Action"
                    {...getOverrideProps(overrides, "Action")}
                  ></Text>
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
              {sortAPY == undefined && sortTVL == undefined ? (
                // 정렬 안함
                currentPagePoolList?.map((item, idx) => (
                  <Poolitem1024
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
                    key={`PoolList1024px-${idx}`}
                    item={item}
                    length={currentPagePoolList.length}
                    idx={idx}
                  />
                ))
              ) : sortAPY == "up" ? (
                currentPagePoolList
                  .sort(aesAPY)
                  .map((item, idx) => (
                    <Poolitem1024
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
                      key={`PoolList1024px-${idx}`}
                      item={item}
                      length={currentPagePoolList.length}
                      idx={idx}
                    />
                  ))
              ) : sortAPY == "down" ? (
                currentPagePoolList
                  .sort(descAPY)
                  .map((item, idx) => (
                    <Poolitem1024
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
                      key={`PoolList1024px-${idx}`}
                      item={item}
                      length={currentPagePoolList.length}
                      idx={idx}
                    />
                  ))
              ) : sortTVL == "up" ? (
                currentPagePoolList
                  .sort(aesTVL)
                  .map((item, idx) => (
                    <Poolitem1024
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
                      key={`PoolList1024px-${idx}`}
                      item={item}
                      length={currentPagePoolList.length}
                      idx={idx}
                    />
                  ))
              ) : sortTVL == "down" ? (
                currentPagePoolList
                  .sort(descTVL)
                  .map((item, idx) => (
                    <Poolitem1024
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
                      key={`PoolList1024px-${idx}`}
                      item={item}
                      length={currentPagePoolList.length}
                      idx={idx}
                    />
                  ))
              ) : (
                <></>
              )}
            </motion.div>
          </LayoutGroup>

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
      ) : (
        <></>
      )}
    </>
  );
}
