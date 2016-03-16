var spawn = require('child_process').spawn,
    ipconfig  = spawn('ipconfig', ['-all']);

// 捕获标准输出并将其打印到控制台
ipconfig.stdout.on('data', function (data) {
    console.log('标准输出：\n' + data);
});

// 捕获标准错误输出并将其打印到控制台
ipconfig.stderr.on('data', function (data) {
    console.log('标准错误输出：\n' + data);
});

// 注册子进程关闭事件
ipconfig.on('exit', function (code, signal) {
    console.log('子进程已退出，代码：' + code);
});