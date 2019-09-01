// 利用ipcRenderer进行进程通信
const { ipcRenderer } = require('electron')
// 监听页面Dom渲染完成以后 利用Electron提供的ipcRender来发送一个事件两个参数 一个是事件名称(message) 一个是携带的参数(String)
window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('message', 'hello from render')
  ipcRenderer.on('replay', (event, arg) => {
    console.log(arg)
    document.getElementById('message').innerHTML = arg
  })
})
