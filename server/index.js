// @ts-ignore
// 导入 express 库
const express = require("express");
// 导入 cors 库，用于跨域请求处理
const cors = require("cors");
const dotenv = require("dotenv");
// 导入自定义的翻译函数
const { translate } = require("./translate");
dotenv.config();

// 创建一个 express 应用实例
const app = express();

// 使用 JSON 解析中间件
app.use(express.json());
// 使用跨域中间件处理跨域请求
app.use(cors());

// 处理 POST 请求 /translate
app.post("/translate", async (req, res) => {
  // 获取请求的 body 中的参数
  let input = req.body;
  // 将参数数组拼接成字符串
  let orgText = input.words.join("\n");
  // 调用自定义的翻译函数
  const finText = await translate({
    text: orgText,
    to: input.to ?? "zh-cn",
    server: "tencent",
  });

  // 根据翻译结果响应返回给客户端
  if (finText) {
    let words = finText.split("\n");
    res.json(words);
  } else {
    res.json([]);
  }
});

// 启动应用，监听指定端口
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
