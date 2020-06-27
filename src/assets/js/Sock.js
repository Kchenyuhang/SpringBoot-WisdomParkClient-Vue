import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
var stompClient = null
// var ipAndPort = '120.26.185.155:8079'
// var ipAndPort = '2p7173d335.zicp.vip:17280'
// var ipAndPort = 'localhost:8079'
export function initWebSocket() {
  this.connection()
  let that = this
  // 断开重连机制,尝试发送消息,捕获异常发生时重连
  this.timer = setInterval(() => {
    try {
      that.stompClient.send('test')
    } catch (err) {
      console.log('断线了: ' + err)
      that.connection()
    }
  }, 5000)
}
export function connection() {
  // 建立连接对象
  // var socket = new SockJS('http://' + ipAndPort + '/websocket')
  var socket = new SockJS('/api/websocket')
  // 获取STOMP子协议的客户端对象
  stompClient = Stomp.over(socket)
  // 定义客户端的认证信息,按需求配置
} //连接 后台
export function disconnect() {
  if (this.stompClient) {
    this.stompClient.disconnect()
  }
} // 断开连接

export function beforeDestroy() {
  // 页面离开时断开连接,清除定时器
  this.disconnect()
  clearInterval(this.timer)
}
export function sendMessage(messages) {
  console.log(messages)
  stompClient.send('/app/sendToAll', {}, messages) //用户加入接口
}
export function sendMessageToErrends(msg, fromUserId, userId) {
  //第一部分为后端处理的地址，第二部分head头（认证的消息），第三部分为内容
  var data = { fromUserId: fromUserId, toUserId: userId, msg: msg }
  // 统一前缀配置
  stompClient.send('/app/sendToUserErrends', {}, JSON.stringify(data))
}
export function getErrendsMessage(userId) {
  // 建立连接对象
  var socket = new SockJS('/api/websocket')
  // 获取STOMP子协议的客户端对象
  this.stompClient = Stomp.over(socket)
  // 定义客户端的认证信息,按需求配置
  let headers = {
    Authorization: ''
  }
  // 向服务器发起websocket连接
  this.stompClient.connect(
    headers,
    () => {
      this.stompClient.subscribe(
        '/topic/errendsuser' + userId,
        (msg) => {
          // 订阅服务端提供的某个topic
          console.log('广播成功')
          console.log(msg) // msg.body存放的是服务端发送给我们的信息
          localStorage.setItem("message1", msg.body);
        },
        headers
      )
    },
    (err) => {
      // 连接发生错误时的处理函数
      console.log('失败')
      console.log(err)
    }
  )
}
