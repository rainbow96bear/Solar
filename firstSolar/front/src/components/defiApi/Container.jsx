import DefiComponent from "./Component";

const DefiContainer = () => {
  const testing = async () => {
    const exampleMessage = "Hello, World";
    try {
      const from = "0xCB8775C5943Dc32ed8C1A8182Ce9A53E5b87383a";
      const sign = await window.ethereum.request({
        method: "personal_sign",
        params: [exampleMessage, from],
      });
      console.log(sign);
    } catch (err) {
      console.error(err);
    }
  };

  return <DefiComponent testing={testing} />;
};
export default DefiContainer;
