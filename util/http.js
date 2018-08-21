import {config} from "/config.js"

class HTTP {
  request(params) {
    if(!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header: {
        'appkey':params.appkey,
        'content-type': 'application/json'
      },
      success:(res) => {
        let code = res.statusCode
        if(code.startsWith('2')) {
          
        } else {

        }
      },
      fail:(err) => {

      }
    })
  }
}