/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, Pagination, usePagination } from "@aws-amplify/ui-react";
import Poolitem1024 from "../components/pool/Poolitem1024px.jsx";
import { motion, LayoutGroup } from "framer-motion";
import {
  Netlist1024px,
  Dexlist1024px,
} from "../components/netdexlist/Netdexlist";
import { getMainPoolList, netList, dexList, getSearch } from "../api/index.js";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../modules/isLoading.js";
import { mainNet1024px1, platform } from "../mainNet";
import { useLocation, useNavigate } from "react-router-dom";

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
  const didMount = React.useRef(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [currentPagePoolList, setCurrentPagePoolList] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(
    Number(queryParams.get("page")) || 1
  );
  const [filter, setFilter] = React.useState(String(queryParams.get("filter")));
  const [searchData, setSearchData] = React.useState(
    String(queryParams.get("searchData"))
  );

  const [totalPages, setTotalPages] = React.useState(1);
  const [mainNetList, setMainNetList] = React.useState([]);
  const [platformList, setPlatformList] = React.useState([]);

  const [sortTVL, setSortTVL] = React.useState("down");
  const [sortAPY, setSortAPY] = React.useState("down");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    queryParams.set("page", pageIndex);
    queryParams.set("filter", filter);

    const newUrl = `${location.pathname}?${queryParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [pageIndex, filter, queryParams]);

  const getPoolList = async () => {
    try {
      dispatch(isLoadingThunk({ isLoading: true }));
      if (searchData != "null") {
        // 검색이다.
        if (filter == "null") {
          const { poolListData, resultTotalPages } = await getSearch(
            searchData,
            pageIndex
          );
          setCurrentPagePoolList(poolListData);
          setTotalPages(resultTotalPages);
        } else if (filter != "null") {
          // 필터 있을 때 실행할 코드
        }
        // setTimeout(() => {
        //   dispatch(isLoadingThunk({ isLoading: false }));
        // }, 5000);
      } else {
        // 검색이 아니다. 메인 페이지

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

        // setTimeout(() => {
        //   dispatch(isLoadingThunk({ isLoading: false }));
        // }, 5000);
      }
    } catch (error) {
      dispatch(isLoadingThunk({ isLoading: false }));
      console.error(error);
    }
  };

  React.useEffect(() => {
    (async () => {
      await getPoolList();
      dispatch(isLoadingThunk({ isLoading: false }));
    })();
  }, [pageIndex]);

  React.useEffect(() => {
    if (didMount.current) setPageIndex(1);
    else didMount.current = true;
  }, [filter]);

  React.useEffect(() => {
    setMainNetList(Object.keys(mainNet1024px1));
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

  const aesAPY = (a, b) => {
    if (a.apy < b.apy) {
      return -1;
    }
    if (a.apy > b.apy) {
      return 1;
    }
    return 0;
  };

  const descAPY = (a, b) => {
    if (a.apy > b.apy) {
      return -1;
    }
    if (a.apy < b.apy) {
      return 1;
    }
    return 0;
  };

  const aesTVL = (a, b) => {
    if (a.tvl < b.tvl) {
      return -1;
    }
    if (a.tvl > b.tvl) {
      return 1;
    }
    return 0;
  };

  const descTVL = (a, b) => {
    if (a.tvl > b.tvl) {
      return -1;
    }
    if (a.tvl < b.tvl) {
      return 1;
    }
    return 0;
  };

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
                "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
            }}
            whileHover={{
              borderRadius: "75px",
              backgroundColor: "rgba(247,239,227,0.75)",
            }}
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
                display="flex"
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
                    networkArray={networkArray}
                    filter={filter}
                    value={idx}
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
                "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
            }}
            whileHover={{
              borderRadius: "75px",
              backgroundColor: "rgba(247,239,227,0.75)",
            }}
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
                display="flex"
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
                    dexArray={dexArray}
                    filter={filter}
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
                "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
            }}
            whileHover={{
              borderRadius: "35px",
              backgroundColor: "rgba(247,239,227,0.75)",
            }}
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
                    display="flex"
                    direction="column"
                    justifyContent="center"
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
                    display="flex"
                    direction="column"
                    justifyContent="center"
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
                    display="flex"
                    direction="column"
                    justifyContent="center"
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
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    grow="1"
                    shrink="1"
                    basis="0"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSortAPY(
                        sortAPY == "down"
                          ? "up"
                          : sortAPY == "up"
                          ? "down"
                          : "up"
                      );
                      setSortTVL(undefined);
                    }}
                  >
                    <Text
                      fontFamily="ffProBook"
                      fontSize="12px"
                      fontWeight="600"
                      lineHeight="14.522727012634277px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="center"
                      width="unset"
                      height="25px"
                      gap="unset"
                      alignItems="unset"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="APY"
                      style={{ cursor: "pointer" }}
                      {...getOverrideProps(overrides, "APY")}
                    ></Text>
                    <svg
                      display="flex"
                      direction="column"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="15px"
                      height="15px"
                    >
                      <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                    </svg>
                  </Flex>
                  <Flex
                    grow="1"
                    shrink="1"
                    basis="0"
                    style={{
                      cursor: "pointer",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setSortTVL(
                        sortTVL == "down"
                          ? "up"
                          : sortTVL == "up"
                          ? "down"
                          : "up"
                      );
                      setSortAPY(undefined);
                    }}
                  >
                    <Text
                      fontFamily="ffProBook"
                      fontSize="12px"
                      fontWeight="600"
                      lineHeight="14.522727012634277px"
                      textAlign="center"
                      display="flex"
                      justifyContent="center"
                      direction="column"
                      width="unset"
                      height="25px"
                      gap="unset"
                      alignItems="unset"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="TVL"
                      {...getOverrideProps(overrides, "TVL")}
                    ></Text>
                    <svg
                      display="flex"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="15px"
                      height="15px"
                    >
                      <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                    </svg>
                  </Flex>
                  <Text
                    fontFamily="ffProBook"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="flex"
                    direction="column"
                    justifyContent="center"
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
                    display="flex"
                    direction="column"
                    justifyContent="center"
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
                    children="ACTION"
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
              {sortAPY == "up" ? (
                currentPagePoolList
                  ?.sort(aesAPY)
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
                  ?.sort(descAPY)
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
                  ?.sort(aesTVL)
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
                  ?.sort(descTVL)
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
              onChange={pageNum => {
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
