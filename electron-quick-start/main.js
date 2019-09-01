const { app, BrowserWindow, ipcMain } = require('electron')

// app.on监听一个ready方法 也就是窗口已经准备完毕 可以被渲染了 执行对应的创建窗口的函数
app.on('ready', () => {
  // 通过BrowserWindow模块来新建一个窗口 
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // 是否允许使用node api
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html')
  // const secondWindow = new BrowserWindow({
  //   width: 300,
  //   height: 400,
  //   // 指定父窗口 如果父窗口关闭了子窗口跟着关闭
  //   parent: mainWindow,
  //   // 是否允许使用node api
  //   webPreferences: {
  //     nodeIntegration: true
  //   }
  // })
  // secondWindow.loadFile('second.html')
  
  // 主进程根据事件名称进行监听 并且可以利用event对象下的sender发送信息给renderer process
  ipcMain.on('message', (event, arg) => {
    console.log(arg)
    event.sender.send('replay', 'replay from main')
  })
})