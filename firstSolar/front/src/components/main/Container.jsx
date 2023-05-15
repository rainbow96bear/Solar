import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import {
  dexList,
  getMainPoolList,
  getSearch,
  netList,
  rankList,
} from "../../api/index";
import RankListCContainer from "../rankList/Container";
import {
  PooListCom320px,
  PooListCom768px,
  PoolListCom1024px,
} from "../../ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Loader, usePagination } from "@aws-amplify/ui-react";
import { useLocation } from "react-router-dom";
import { setIsLoading } from "../../modules/isLoading";
import {
  mainNet1024px1,
  platform,
  mainNet768px1,
  mainNet768px2,
  platform768px1,
  platform768px2,
  networkArray,
  dexArray,
} from "../../mainNet";
let interval;

const MainContainer = () => {
  const [items, setItems] = useState([]);
  const isLoading = useSelector((state) => state.isLoading);
  const [isLoading2, setIsLoading2] = useState(false);

  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:481px) and (max-width:991px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });
  const oracleId = async () => {
    try {
      setIsLoading2(true);
      clearInterval(interval);
      const oracleId = await rankList();
      setItems(oracleId);
      setIsLoading2(false);
      intervalFunc();
    } catch (error) {
      console.error(error);
    }
  };

  const intervalFunc = () => {
    interval = setInterval(() => {
      setItems((prev) => {
        const nextTop = prev[prev.length - 1];
        const newShown = prev.slice(0, prev.length - 1);
        return [nextTop, ...newShown];
      });
    }, 10000);
  };

  const didMount = useRef(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [currentPagePoolList, setCurrentPagePoolList] = useState([]);
  const [pageIndex, setPageIndex] = useState(
    Number(queryParams.get("page")) || 1
  );
  const [filter, setFilter] = useState(String(queryParams.get("filter")));
  const [searchData, setSearchData] = useState(
    String(queryParams.get("searchData"))
  );

  const [totalPages, setTotalPages] = useState(1);

  const [mainNetList, setMainNetList] = useState([]);
  const [mainNetList1, setMainNetList1] = useState([]);
  const [mainNetList2, setMainNetList2] = useState([]);

  const [platformList, setPlatformList] = useState([]);
  const [platformList1, setPlatformList1] = useState([]);
  const [platformList2, setPlatformList2] = useState([]);
  const [sortTVL, setSortTVL] = useState("down");
  const [sortAPY, setSortAPY] = useState("down");

  const dispatch = useDispatch();

  const paginationProps = usePagination({
    totalPages: totalPages,
    currentPage: pageIndex,
    siblingCount: 2,
  });

  const aesAPY = (a, b) => {
    if (a.apy < b.apy) return -1;
    if (a.apy > b.apy) return 1;
    return 0;
  };

  const descAPY = (a, b) => {
    if (a.apy > b.apy) return -1;
    if (a.apy < b.apy) return 1;
    return 0;
  };

  const aesTVL = (a, b) => {
    if (a.tvl < b.tvl) return -1;
    if (a.tvl > b.tvl) return 1;
    return 0;
  };

  const descTVL = (a, b) => {
    if (a.tvl > b.tvl) return -1;
    if (a.tvl < b.tvl) return 1;
    return 0;
  };

  const getPoolList = async () => {
    try {
      dispatch(setIsLoading(true));
      if (searchData != "null") {
        if (filter == "null") {
          const { poolListData, resultTotalPages } = await getSearch(
            searchData,
            pageIndex
          );

          setCurrentPagePoolList(poolListData);
          setTotalPages(resultTotalPages);
          dispatch(setIsLoading(false));
        } else if (filter != "null") {
          // 필터 있을 때 실행할 코드
        }
      } else {
        if (filter == "null") {
          const { poolListData, resultTotalPages } = await getMainPoolList(
            pageIndex
          );
          setCurrentPagePoolList(poolListData);
          setTotalPages(resultTotalPages);
          dispatch(setIsLoading(false));
        } else if (filter != "null") {
          if (networkArray.includes(filter)) {
            const data = await netList(filter, pageIndex);
            setCurrentPagePoolList(data.poolListData);
            setTotalPages(Math.ceil(data.poolListDataLength / 10));
            dispatch(setIsLoading(false));
          } else if (dexArray.includes(filter)) {
            const data = await dexList(filter, pageIndex);

            setCurrentPagePoolList(data.poolListData);
            setTotalPages(Math.ceil(data.poolListDataLength / 10));
            dispatch(setIsLoading(false));
          }
        }
      }
    } catch (error) {
      dispatch(setIsLoading(false));
      console.error(error);
    }
  };

  useEffect(() => {
    oracleId();
    setMainNetList(Object.keys(mainNet1024px1));
    setMainNetList1(Object.keys(mainNet768px2));
    setMainNetList2(Object.keys(mainNet768px1));
    setPlatformList(Object.values(platform));
    setPlatformList1(Object.values(platform768px2));
    setPlatformList2(Object.values(platform768px1));
  }, []);

  useEffect(() => {
    queryParams.set("page", pageIndex);
    queryParams.set("filter", filter);

    const newUrl = `${location.pathname}?${queryParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [pageIndex, filter, queryParams]);

  useEffect(() => {
    (async () => {
      await getPoolList();
    })();
  }, [pageIndex]);

  useEffect(() => {
    if (didMount.current) setPageIndex(1);
    else didMount.current = true;
  }, [filter]);

  return (
    <Main>
      <RankListCContainer
        items={items}
        isLoading2={isLoading2}
      ></RankListCContainer>
      {isLoading ? (
        <Flex minHeight="500px" alignItems="center">
          <Loader width="80px" height="80px" />
        </Flex>
      ) : (
        <>
          {isMobile && (
            <PooListCom320px
              mainNetList={mainNetList2}
              mainNetList1={mainNetList1}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              filter={filter}
              setFilter={setFilter}
              currentPagePoolList={currentPagePoolList}
              setCurrentPagePoolList={setCurrentPagePoolList}
              setTotalPages={setTotalPages}
              networkArray={networkArray}
              platformList={platformList2}
              platformList1={platformList1}
              paginationProps={paginationProps}
            />
          )}
          {isTablet && (
            <PooListCom768px
              mainNetList={mainNetList2}
              mainNetList1={mainNetList1}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              filter={filter}
              setFilter={setFilter}
              currentPagePoolList={currentPagePoolList}
              setCurrentPagePoolList={setCurrentPagePoolList}
              setTotalPages={setTotalPages}
              networkArray={networkArray}
              platformList={platformList2}
              platformList1={platformList1}
              paginationProps={paginationProps}
            />
          )}
          {isDesktop && (
            <PoolListCom1024px
              mainNetList={mainNetList}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              filter={filter}
              setFilter={setFilter}
              currentPagePoolList={currentPagePoolList}
              setCurrentPagePoolList={setCurrentPagePoolList}
              setTotalPages={setTotalPages}
              networkArray={networkArray}
              platformList={platformList}
              sortAPY={sortAPY}
              setSortAPY={setSortAPY}
              sortTVL={sortTVL}
              setSortTVL={setSortTVL}
              aesAPY={aesAPY}
              aesTVL={aesTVL}
              descAPY={descAPY}
              descTVL={descTVL}
              paginationProps={paginationProps}
            />
          )}
        </>
      )}
    </Main>
  );
};

export default MainContainer;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
