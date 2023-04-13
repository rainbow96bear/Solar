import { resolve } from "path";
import { require } from "module";

export default {
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },
};
