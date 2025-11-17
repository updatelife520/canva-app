// Canva应用入口：注册应用并定义交互逻辑
canva.registerApp({
  // 应用元信息
  name: "简易文本工具",
  description: "快速在设计中添加自定义文本",
  icon: "https://cdn-icons-png.flaticon.com/128/134/134142.png", // 示例图标（可替换为你的图标URL）

  // 应用启动时执行
  onLaunch: async () => {
    // 向用户显示输入框，获取文本内容
    const userInput = await canva.showPrompt({
      title: "添加文本",
      message: "请输入要添加的文本内容：",
      defaultValue: "Hello, Canva!"
    });

    if (userInput) {
      // 在当前设计中添加文本元素
      await canva.createElement({
        type: "TEXT",
        properties: {
          content: userInput,
          fontSize: 24,
          fontFamily: "Arial",
          fill: { type: "SOLID", color: "#333333" },
          x: 100, // 位置坐标（相对画布）
          y: 100
        }
      });

      // 提示用户操作成功
      canva.showToast({
        message: "文本已添加到设计中！",
        duration: 3000
      });
    }
  }
});