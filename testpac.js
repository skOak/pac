const fs = require('fs');
const vm = require('vm');

// 读取PAC文件中的代码
const pacCode = fs.readFileSync('global.pac', 'utf-8');
// 创建虚拟机上下文
const context = vm.createContext({
  // 在这里可以定义一些用于PAC文件执行的上下文变量
});
// 执行PAC文件中的代码
vm.runInContext(pacCode, context);

// 准备测试数据，包括一组URL和主机
const testData = [
  { url: 'http://example.com/index.html', host: 'example.com' },
  { url: 'https://google.com/index.html', host: 'google.com' },
  { url: 'https://sun.io/index.html', host: 'sun.io' },
  { url: 'https://hemin.io/index.html', host: 'hemin.io' },
  // 添加更多的测试数据
];

// 执行PAC代码并测试每个数据点
testData.forEach(({ url, host }) => {
    console.log(host, '\t:', context.FindProxyForURL(url, host));
});

