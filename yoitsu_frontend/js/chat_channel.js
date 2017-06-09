function chat_channel() {
  ActionCable.startDebugging()
  window.App = {}
  window.App.cable = ActionCable.createConsumer("ws://chat.netoge-haijin.moe/cable")
  window.App.chat_channel = window.App.cable.subscriptions.create({channel: "ChatChannel", room_id: 1, access_token: 'BKS2aPhjgWRiyZr7LuTcsXyd'}, {
    connected: function() {
      writeLog("connected")
    },
    disconnected: function() {
      writeLog("disconnected")
    },
    rejected: function() {
      writeLog("rejected")
    },
    received: function(data) {
      writeLog(data)
      //TODO append received msg to billboard here

    },
    send_msg: function(data) {
      writeLog("sending")
      this.perform("send_msg",{msg:data})
    },
  });

  function writeLog(message) {
    console.log("===WS: " + message)
  }
}