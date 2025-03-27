# Cursor 不完全上手指北

> 介绍 Cursor AI IDE 的上手指南，包括下载安装、关键功能和实用技巧

## 下载并安装 Cursor

前往 [Cursor 官网](https://www.cursor.com/) 下载。

## 关键功能

### 1. 支持从 vscode 迁移

#### 功能

- 一键导入 VS Code 配置
- 支持导入扩展、主题、设置和键绑定

#### 使用

- 导航到 Cursor 设置 > 通用 > 帐户
- 使用一键导入功能

### 2. 自动补全

Cursor Tab 是 Cursor 的原生自动完成功能，比 GitHub Copilot 更强大，能够提供整个差异建议，并具有特别好的记忆能力。

#### 功能

- 可以在光标周围进行编辑，而不仅仅是插入额外的代码
- 可以一次修改多行
- 基于您最近的更改和 linter 错误提供建议

#### 使用

- 接受建议：按 Tab 键
- 拒绝建议：按 Esc 键或继续输入
- 逐字接受建议：按 Ctrl/⌘ + →

### 3. cursor chat

像是对话助手，用户可以与之交流代码的问题、请教实现细节、或者了解某些编程概念

#### 功能

- 自动包含整个代码库的上下文
- 可以搜索网络
- 可以索引文档
- 支持用户指定的代码块引用

#### 使用

- 打开 AI 面板：按 Ctrl/⌘ + L
- 提交查询：在输入框中输入后按 Enter
- 切换 AI 模型：按 Ctrl/⌘ + /

### 4. Cmd K (代码生成和编辑)

允许你在编辑器窗口中生成新代码或编辑现有代码

#### 功能

- 内联生成：在未选择代码时生成新代码
- 内联编辑：选择代码后进行编辑
- 支持跟进指令：可以进一步细化提示

#### 使用

- 按 Ctrl/⌘ + K 打开提示栏
- 输入指令并按 Enter 生成或编辑代码
- 使用 @ 符号引用其他上下文

### 5. 代码索引和文件排除

#### 功能

- 为你的代码库建立索引，以提供上下文相关的建议和查询。它对于理解大型项目非常有用，尤其是那些难以全面把握的代码库
- 可以将敏感或无关文件排除在 AI 索引之外，以保护隐私并减少不必要的建议干扰

#### 使用

- 在 Cursor 设置 > 功能 > 代码库索引 中启用
  ![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(5).png>)

- 使用 .cursorignore 文件排除不需要索引的文件
  ![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(6).png>)

### 6. composer

#### 功能

- 用于代码创作和编辑的功能模块，它可以帮助开发者更高效地编写和改进代码
- 它会比较清晰地在左边列出在你累计的对话中，你要修改那些文件的哪些地方，并且你可以直接 apply 相关的修改

#### 使用

- 在 Cursor 的设置里打开它，你需要按这个顺序访问它的设置页面：File > Prefereces > Cursor Settings > Features > Enable Composer
  ![20241115102130](https://codertzm.oss-cn-chengdu.aliyuncs.com/20241115102130.png)
- Ctrl/⌘ + I，打开 composer 面板

### 7. 自定义 API 密钥

#### 功能

- 允许你使用自己的 API 密钥，以便以自己的成本发送无限量的 AI 消息

#### 使用

- 在 Cursor 设置 > 模型 中输入相应的 API 密钥
- 点击 "验证" 按钮以确认密钥有效

  ![20241115100921](https://codertzm.oss-cn-chengdu.aliyuncs.com/20241115100921.png)

### 8. 隐私模式（Privacy mode）

#### 功能

- 隐私模式确保你的代码不会被 Cursor 或任何第三方存储

#### 使用

- 在 Cursor 设置 > 通用 > 隐私模式 中启用
  ![20241115101028](https://codertzm.oss-cn-chengdu.aliyuncs.com/20241115101028.png)

### 9. 自定义规则（Rules for AI）

为 Cursor 添加自定义指令，这些指令将应用于 Cursor Chat 和 Ctrl/⌘ K 等功能

#### 功能

- 可以设置全局规则
- 支持项目特定的规则

#### 使用

- 全局规则：在 Cursor 设置 > 通用 > AI 规则 中修改
  ![20241115101158](https://codertzm.oss-cn-chengdu.aliyuncs.com/20241115101158.png)
- 项目规则：在项目根目录创建 .cursorrules 文件

### 10. 利用网页搜索增强 AI 回答

#### 功能

- 启用网页搜索功能，让 AI 在回答问题时能够获取最新信息

#### 使用方法

- 在 Cursor 设置 > 功能 > 聊天 中启用 "始终搜索网页寻找答案"
  ![20241115101324](https://codertzm.oss-cn-chengdu.aliyuncs.com/20241115101324.png)

## 常用快捷键

### Edit

- Ctrl/⌘ + K：允许在编辑器窗口中生成新代码或编辑现有代码

![](https://codertzm.oss-cn-chengdu.aliyuncs.com/image.png)

![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(1).png>)

### chat

- Ctrl/⌘ + L： 打开聊天
- Ctrl/⌘ + Alt/Option + L： 打开聊天历史（需要在打开聊天面板的情况下使用）

![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(2).png>)

### composer

- Ctrl/⌘ + I，打开 composer 面板
- composer 是 Cursor 的特色功能，它的功能是在一个对话窗口里同时对多个文件进行修改

### Fix

- Ctrl/⌘ + Shift + E：对 linter 错误进行 AI 修复

![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(3).png>)

## 实用技巧

### 1. 解析当前项目，优化程序

提示词：请分析项目、整理问题、并给出改进建议

### 2. 设置 Rules for AI

![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(4).png>)

1. 配置 rules 让 cursor 更加智能
2. 给编辑器配置 rules：
   - 在项目根目录下，创建.cursorrules 文件
   - 具体 rules 规则可参考：[https://github.com/PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)

### 3. 同步代码索引

为了得到准确的回答，记得开启这两项

![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(5).png>)

其中：

codebase indexing 是将本地代码库分割成小块的语言数据，然后将每个小块发送给 cursor 服务器，使用 open AI 的 embeding API 进行嵌入，并且将文件的相对路径一起存储到远程的矢量数据库中，既保证了代码的安全性，又能利用索引提高回答质量

如果你不希望核心代码或者与项目无关的代码（日志文件、第三方工具、环境变量、打包后的文件）被索引，也可以设置忽略文件或目录（已经存在的 ignore 文件记得备份，不然会被覆盖）：

![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(6).png>)

### 4. chat vs composer

在 cursor 中，有两处是可以用来对话的：

![](<https://codertzm.oss-cn-chengdu.aliyuncs.com/image%20(7).png>)

问题：什么时候用 chat 或 composer？

回答：chat 用于思考层面，composer 用于快速编辑

- chat：

  - 当你对需要实现的功能不太确定，所涉及的逻辑又十分复杂，并且这个逻辑又涉及到多个文件的时候，不妨在 chat 里询问清楚
  - 把自己想到的创意的点子说出来，让 chat 为你提供一些有参考价值的建议

- composer：

  - 当思路被理清楚，分解成指令
  - 你认为这个任务很简单
  - 你任务要实现的功能非常明确

### 5. 乱改代码的问题

给 cursor 提出问题前，为了防止他出现非常离谱的回答

- 可以让他先复述一遍你的需求
- 添加一句：不要影响其他功能和界面布局样式

### 6. 日志输出

给项目加上日志，提示词：在 【功能】的执行过程中，输出关键信息

### 7. README 文档

让 cursor 对 项目 README 文档进行更新和维护，这样重新回到项目的时候，也可以让 cursor 读取这个 README 文档

### 8. 增加注释

让 cursor 生成代码的时候增加注释，帮助自己理解实现的逻辑

### 9. 调试时 save all

使用 composer 时，当处于在项目测试和改 bug 阶段，先选择 save all，此时代码处于运行的状态，如果满意，选择 accept all，如果不满意，选择 reject all

### 10. 多用 @codebase

使用 composer 和 chat 功能时，多用 @codebase，否则 cursor 经常不知道项目内容是什么

## 参考

- [Cursor - Build Software Faster](https://docs.cursor.com/get-started)
- [Cursor 十大使用技巧：免费无限量使用 Cursor Pro 会员指南\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1YAtReqEkH/?spm_id_from=333.337.search-card.all.click&vd_source=ec61df0d63e147463c27541f414a804d)
- [实用的 Cursor 使用技巧分享\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1RBm2YJEb9/?spm_id_from=333.337.search-card.all.click&vd_source=ec61df0d63e147463c27541f414a804d)
- [掌握 Cursor AI 编辑器：15 个核心功能详解](https://mp.weixin.qq.com/s/Vt3YYaxDIE8owCZbN3Qyjw)
- [Cursor 完全使用教程](https://cloud.tencent.com/developer/article/2451299)
