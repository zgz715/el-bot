import { resolve } from "path";
import dotenv from "dotenv";
import * as utils from "../../src/utils";

dotenv.config({
  path: resolve(__dirname, "../.env"),
});

export = {
  qq: parseInt(process.env.BOT_QQ || ""),
  setting: {
    enableWebsocket: true,
  },
  config: utils.config.parse(resolve(__dirname, "./index.yml")),
};
