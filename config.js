/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

const host = 'http://127.0.0.1'

const config = {

  // 下面的地址配合云端 Server 工作
  host,

  paperUrl: `https://${host}/paper`,

  // paperPaginationUrl: `https://${host}/paper/pagination`,
  paperPaginationUrl: `${host}/api/paper/pagination`,

  questionUrl: `https://${host}/question`,

  answerSheetUrl: `https://${host}/answer_sheet`,

  userUrl: `https://${host}/user`,
  userLoginUrl: `${host}/api/user/login`,

}

module.exports = config
