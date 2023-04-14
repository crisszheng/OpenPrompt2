### 如何修改默认提示词词典

1. 在 [./data/src](https://github.com/Moonvy/OpenPromptStudio/tree/master/data/src) 中编辑 `.csv` 文件，你可以用 Excel、Numbers 或者纯文本编辑器编辑。

2. 在 [Notion](https://www.notion.so/) 中编辑（[./data/src/notion/fromNotion.js](https://github.com/Moonvy/OpenPromptStudio/tree/master/data/src/notion/fromNotion.js) ）


### 翻译服务

在 `./server` 文件夹中有一个翻译服务的简单实现，调用腾讯翻译
你需要申请一个[腾讯机器翻译的账号](https://bobtranslate.com/service/translate/tencent.html)（每月免费额度 500 万字）  
然后在项目根目录创建一个 `.env` 文件写入你的的 `SECRET_ID` 与 `SECRET_KEY`

`.env`：

```node
TENCENT_SECRET_ID = "AKIDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
TENCENT_SECRET_KEY = "a5XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

然后运行 `npm run serve` 启动本地翻译服务
