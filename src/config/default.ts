export interface BotConfig {
  /**
   * 机器人名
   */
  name: string;
  /**
   * 插件配置
   */
  plugins: {
    default: string[];
    official?: string[];
    community?: string[];
    custom?: string[];
  };
  /**
   * 数据库存储路径
   */
  db_path: string;
  /**
   * 主人（超级管理员）
   */
  master: number[];
  /**
   * 管理员
   */
  admin: number[];
  /**
   * 其他插件配置
   */
  [propName: string]: any;
}

const defaultConfig: BotConfig = {
  name: "el-bot",
  plugins: {
    default: [
      // "dev",
      "answer",
      // "cli",
      // "forward",
      // "rss",
      // "limit",
      // "teach"
    ],
  },
  db_path: "./tmp/el-bot.json",
  master: [910426929],
  admin: [910426929],
};

export default defaultConfig;
