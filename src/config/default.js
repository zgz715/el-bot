module.exports = {
  name: "el-bot",
  plugins: [
    // "dev",
    "answer",
    // "cli",
    // "forward",
    // "rss",
    // "limit",
    // "teach"
  ],
  db_path: "./tmp/el-bot.json",
  master: [910426929],
  admin: [910426929],
  limit: {
    interval: 30000,
    count: 20,
    sender: {
      // 超过十分钟清空记录
      interval: 600000,
      // 连续次数
      maximum: 3,
      tooltip: "我生气了",
      // 禁言时间
      time: 600,
    },
  },
  teach: {
    listen: ["master", "admin"],
    reply: "我学会了！",
    else: "你在教我做事？",
  },
};