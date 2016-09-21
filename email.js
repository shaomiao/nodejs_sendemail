var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
 
// 开启一个 SMTP 连接池
var transport = nodemailer.createTransport(smtpTransport({
  host: "smtp.qq.com", // 主机
  secure: true, // 使用 SSL
  port: 465, // SMTP 端口
  auth: {
    user: "from@qq.com", // 账号
    pass: "xxxx" // 密码
  }
}));
 
// 设置邮件内容
var mailOptions = {
  from: "<from@qq.com>", // 发件地址
  to: "to@qq.com", // 收件列表
  subject: "hello word", // 标题
  html: "<b>hello word 世界，你好！</b>" // html 内容
}
 
// 发送邮件
transport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
  transport.close(); // 如果没用，关闭连接池
});