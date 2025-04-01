import postcssNested from "postcss-nested";
import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    postcssNested,
    postcssPresetEnv({
      stage: 1,
      features: {
        "custom-media-queries": true,
        "media-query-ranges": true,
        "nesting-rules": true,
      },
    }),
    autoprefixer,
  ],
};
