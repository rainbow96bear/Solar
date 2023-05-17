import { Flex, Image } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { dexList, netList } from "../../api";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../modules/isLoading";

const Netlist1024px = (props) => {
  const {
    overrides,
    item,
    pageIndex,
    filter,
    setFilter,
    setCurrentPagePoolList,
    setTotalPages,
    networkArray,
    value,
    ...rest
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        style={{
          width: "45vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(248,251,251,0.35)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "15px",
          scale: 1.15,
          backgroundColor: "#D0576B",
        }}
      >
        <Flex
          overflow="hidden"
          onClick={async () => {
            try {
              dispatch(setIsLoading(true));
              const temp = await netList(item, pageIndex);

              setCurrentPagePoolList(temp.poolListData);
              setFilter(item);
              setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(setIsLoading(false));
            } catch (error) {
              console.error(error);
              dispatch(setIsLoading({ isLoading: false }));
            }
          }}
          gap="10px"
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
          borderRadius="13px"
          backgroundColor={
            item == filter ? "rgba(235,069,074,1)" : "rgba(248,251,251,0.35)"
          }
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/mainNet/${item}.jpg`}
            width="38px"
            height="38px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="20px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39913189")}
          ></Image>
        </Flex>
      </motion.div>
    </>
  );
};

const Dexlist1024px = (props) => {
  const {
    overrides,
    item,
    pageIndex,
    setCurrentPagePoolList,
    setTotalPages,
    setFilter,
    filter,
    ...rest
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        style={{
          width: "45vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(5,3,2,0.75)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "15px",
          scale: 1.15,
          backgroundColor: "rgba(0,125,122,1)",
        }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(setIsLoading(true));
              const temp = await dexList(item, pageIndex);

              setCurrentPagePoolList(temp.poolListData);
              setFilter(item);
              setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(setIsLoading(false));
            } catch (error) {
              console.error(error);
              dispatch(setIsLoading(false));
            }
          }}
          gap="10px"
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
          borderRadius="13px"
          padding="10px 10px 10px 10px"
          backgroundColor={item == filter ? "rgba(0,125,122,1)" : ""}
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/platform/${item}.jpg`}
            width="38px"
            height="38px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="20px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39913189")}
          ></Image>
        </Flex>
      </motion.div>
    </>
  );
};

const Netlist768px = (props) => {
  const {
    overrides,
    item,
    pageIndex,
    setCurrentPagePoolList,
    setTotalPages,
    setFilter,
    filter,
    ...rest
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        style={{
          width: "45vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(248,251,251,0.35)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "15px",
          scale: 1.15,
          backgroundColor: "rgba(235,069,074,1)",
        }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(setIsLoading(true));
              const temp = await netList(item, pageIndex);
              setCurrentPagePoolList(temp.poolListData);
              setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              setFilter(item);
              dispatch(setIsLoading(false));
            } catch (error) {
              console.error(error);
              dispatch(setIsLoading(false));
            }
          }}
          gap="10px"
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
          borderRadius="10px"
          padding="10px 10px 10px 10px"
          backgroundColor={
            item == filter ? "rgba(235,069,074,1)" : "rgba(248,251,251,0.35)"
          }
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/mainNet/${item}.jpg`}
            width="40px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="35px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39913189")}
          ></Image>
        </Flex>
      </motion.div>
    </>
  );
};

const Dexlist768px = (props) => {
  const {
    overrides,
    item,
    setCurrentPagePoolList,
    setTotalPages,
    setFilter,
    pageIndex,
    filter,
    ...rest
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        style={{
          width: "45vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(5,3,2,0.75)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "15px",
          scale: 1.15,
          backgroundColor: "rgba(0,125,122,1)",
        }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(setIsLoading(true));
              const temp = await dexList(item, pageIndex);
              setCurrentPagePoolList(temp.poolListData);
              setFilter(item);
              setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(setIsLoading(false));
            } catch (error) {
              console.error(error);
              dispatch(setIsLoading(false));
            }
          }}
          gap="10px"
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
          borderRadius="10px"
          padding="10px 10px 10px 10px"
          backgroundColor={item == filter ? "rgba(0,125,122,1)" : ""}
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/platform/${item}.jpg`}
            width="40px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="35px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39913189")}
          ></Image>
        </Flex>
      </motion.div>
    </>
  );
};

const Netlist320px = (props) => {
  const {
    overrides,
    item,
    setCurrentPagePoolList,
    setTotalPages,
    setFilter,
    pageIndex,
    filter,
    ...rest
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        style={{
          width: "45vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(248,251,251,0.35)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "15px",
          scale: 1.15,
          backgroundColor: "rgba(235,069,074,1)",
        }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(setIsLoading(true));
              const temp = await netList(item, pageIndex);
              setCurrentPagePoolList(temp.poolListData);
              setFilter(item);
              setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(setIsLoading(false));
            } catch (error) {
              console.error(error);
              dispatch(setIsLoading(false));
            }
          }}
          gap="10px"
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
          borderRadius="13px"
          padding="10px 10px 10px 10px"
          backgroundColor={
            item == filter ? "rgba(235,069,074,1)" : "rgba(248,251,251,0.35)"
          }
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/mainNet/${item}.jpg`}
            width="38px"
            height="38px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="20px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39913189")}
          ></Image>
        </Flex>
      </motion.div>
    </>
  );
};

const Dexlist320px = (props) => {
  const {
    overrides,
    item,
    setCurrentPagePoolList,
    setTotalPages,
    setFilter,
    pageIndex,
    filter,
    ...rest
  } = props;
  const dispatch = useDispatch();

  return (
    <>
      <motion.div
        style={{
          width: "45vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(5,3,2,0.75)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "15px",
          scale: 1.15,
          backgroundColor: "rgba(0,125,122,1)",
        }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(setIsLoading(true));
              const temp = await dexList(item, pageIndex);
              setCurrentPagePoolList(temp.poolListData);
              setFilter(item);
              setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(setIsLoading(false));
            } catch (error) {
              console.error(error);
              dispatch(setIsLoading(false));
            }
          }}
          gap="10px"
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
          borderRadius="13px"
          padding="10px 10px 10px 10px"
          backgroundColor={item == filter ? "rgba(0,125,122,1)" : ""}
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/platform/${item}.jpg`}
            width="38px"
            height="38px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="20px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39913189")}
          ></Image>
        </Flex>
      </motion.div>
    </>
  );
};

export {
  Netlist1024px,
  Dexlist1024px,
  Netlist768px,
  Dexlist768px,
  Netlist320px,
  Dexlist320px,
};
