// 创建一个 <style> 元素
var styleElement = document.createElement('style');

// 加载本地字体样式
var fontStyles = `
  @font-face {
    font-family: 'CustomFont';
    src: url('./GothamBold.otf') format('otf');
    /* 可选的其他字体属性 */
  }

  /* 在其他元素中应用自定义字体样式 */
  .custom-font-element {
    font-family: 'CustomFont';
  }
`;

// 将字体样式添加到 <style> 元素中
styleElement.innerHTML = fontStyles;

// 将 <style> 元素添加到文档头部
document.head.appendChild(styleElement);
