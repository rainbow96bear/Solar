import {
  Chain,
  Wallet,
  getWalletConnectConnector,
} from "@rainbow-me/rainbowkit";

const kaikasWallet = ({ chains, projectId }) => ({
  id: "Kaikas",
  name: "kaikas",
  iconUrl:
    "https://lh3.googleusercontent.com/vQ4txSWDboUlo0L9Q0VBl-vx7lEkiphTm9W6eFZxmleN3JkZ9TEkvmtFdsSvMGVNXXaW3ofeZAh5r7bNfH4L2fHq1G4=w128-h128-e365-rj-sc0x00ffffff",
  iconBackground: "#0c2f78",
  downloadUrls: {
    browserExtension:
      "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=en",
    android: "https://play.google.com/store/apps/details?id=io.klutch.wallet",
    ios: "https://apps.apple.com/kr/app/kaikas-mobile-crypto-wallet/id1626107061",
    qrCode: "https://qr1.be/TB10",
  },
  createConnector: () => {
    console.log("나오나");
    const connector = getWalletConnectConnector({ projectId, chains });
    const getUri = async () =>
      (await connector.getProvider()).then((e) => {
        console.log(e);
      });
    // .connector;
    connector.getProvider().then((e) => {
      console.log(e);
    });
    return {
      connector,
      mobile: { getUri },
      // qrCode: {
      //   getUri: async () =>
      //     (
      //       await connector.getProvider().then(async () => {
      //         console.log(await connector.getProvider().connector);
      //       })
      //     ).connector.uri,
      //   instructions: {
      //     learnMoreUrl: "https://my-wallet/learn-more",
      //     steps: [
      //       {
      //         description:
      //           "We recommend putting My Wallet on your home screen for faster access to your wallet.",
      //         step: "install",
      //         title: "Open the My Wallet app",
      //       },
      //       {
      //         description:
      //           "After you scan, a connection prompt will appear for you to connect your wallet.",
      //         step: "scan",
      //         title: "Tap the scan button",
      //       },
      //     ],
      //   },
      // },
    };
  },
});

export default kaikasWallet;
