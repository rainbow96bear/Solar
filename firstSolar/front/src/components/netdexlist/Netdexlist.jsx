import { Flex, Image } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { dexList, netList } from "../../api";
import { motion } from "framer-motion";
import { isLoadingThunk } from "../../modules/isLoading";
import { useDispatch } from "react-redux";

const Netlist1024px = (props) => {
  const { overrides, ...rest } = props;
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
        whileHover={{ borderRadius: "13px", scale: 1.15 }}
      >
        <Flex
          overflow="hidden"
          onClick={async () => {
            try {
              dispatch(isLoadingThunk({ isLoading: true }));
              const temp = await netList(props?.item, props?.pageIndex);
              props.setCurrentPagePoolList(temp.poolListData);
              props.setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              props.setFilter(props?.item);
              dispatch(isLoadingThunk({ isLoading: false }));
            } catch (error) {
              console.error(error);
              dispatch(isLoadingThunk({ isLoading: false }));
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
          borderRadius="15px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/mainNet/${props?.item}.jpg`}
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
  const { overrides, ...rest } = props;
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
        whileHover={{ borderRadius: "13px", scale: 1.15 }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(isLoadingThunk({ isLoading: true }));
              const temp = await dexList(props?.item, props?.pageIndex);
              props.setCurrentPagePoolList(temp.poolListData);
              props.setFilter(props?.item);
              props.setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(isLoadingThunk({ isLoading: false }));
            } catch (error) {
              console.error(error);
              dispatch(isLoadingThunk({ isLoading: false }));
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
          borderRadius="15px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/platform/${props?.item}.jpg`}
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
  const { overrides, ...rest } = props;
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
        whileHover={{ borderRadius: "13px", scale: 1.15 }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(isLoadingThunk({ isLoading: true }));
              const temp = await netList(props?.item, props?.pageIndex);
              props.setCurrentPagePoolList(temp.poolListData);
              props.setFilter(props?.item);
              props.setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(isLoadingThunk({ isLoading: false }));
            } catch (error) {
              console.error(error);
              dispatch(isLoadingThunk({ isLoading: false }));
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
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/mainNet/${props?.item}.jpg`}
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
  const { overrides, ...rest } = props;
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
        whileHover={{ borderRadius: "13px", scale: 1.15 }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(isLoadingThunk({ isLoading: true }));
              const temp = await dexList(props?.item, props?.pageIndex);
              props.setCurrentPagePoolList(temp.poolListData);
              props.setFilter(props?.item);
              props.setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(isLoadingThunk({ isLoading: false }));
            } catch (error) {
              console.error(error);
              dispatch(isLoadingThunk({ isLoading: false }));
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
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/platform/${props?.item}.jpg`}
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
  const { overrides, ...rest } = props;
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
        whileHover={{ borderRadius: "13px", scale: 1.15 }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(isLoadingThunk({ isLoading: true }));
              const temp = await netList(props?.item, props?.pageIndex);
              props.setCurrentPagePoolList(temp.poolListData);
              props.setFilter(props?.item);
              props.setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(isLoadingThunk({ isLoading: false }));
            } catch (error) {
              console.error(error);
              dispatch(isLoadingThunk({ isLoading: false }));
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
          borderRadius="15px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/mainNet/${props?.item}.jpg`}
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
  const { overrides, ...rest } = props;
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
        whileHover={{ borderRadius: "13px", scale: 1.15 }}
      >
        <Flex
          onClick={async () => {
            try {
              dispatch(isLoadingThunk({ isLoading: true }));
              const temp = await dexList(props?.item, props?.pageIndex);
              props.setCurrentPagePoolList(temp.poolListData);
              props.setFilter(props?.item);
              props.setTotalPages(Math.ceil(temp.poolListDataLength / 10));
              dispatch(isLoadingThunk({ isLoading: false }));
            } catch (error) {
              console.error(error);
              dispatch(isLoadingThunk({ isLoading: false }));
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
          borderRadius="15px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 1939913188")}
        >
          <Image
            src={`/imgs/platform/${props?.item}.jpg`}
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
