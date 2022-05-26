const { version } = require("../package.json");
const harmonyMainnet = require("./tokens/harmony-mainnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "FoxSwap Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/foxswap-circle_05.svg",
    keywords: ["foxswap", "default"],
    tokens: [...harmonyMainnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
