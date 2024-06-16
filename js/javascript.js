var newMsg = {};

var PMH = 160;//PM2.5阈值

var PM = metadata.value* (300)/65535;

var value = JSON.parse(msg.warning_light);//解析json字符串

//警示灯为关闭状态,且PM大于等于阈值时,打开警示灯

if (!value && (PM >= PMH)) {
newMsg.method = "setValue";
newMsg.params = [1,1,1,1,1,1,1,1];

//输入遥测健

//对空的信

} else if(value && (PM<PMH)){//警示灯开启状态,且PM小于阈值时,关闭警示灯                                                          输入传感器设             点击“添加”

newMsg.method = "setValue";

newMsg.params = [0,0,0,0,0,0,0,0];

//备流測寶名

}

return {

msg: newMsg,

metadata: metadata,

msgType: msgType
};
