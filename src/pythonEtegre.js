var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('file', fs.createReadStream('C:/Users/ŞevvalBayramlı/Documents/mrb.txt.txt'));

var config = {
  method: 'post',
  url: 'https://sevval12.atlassian.net/rest/api/3/issue/DEN-11/attachments',
  headers: { 
    'Authorization': 'Basic c2V2dmFsYmF5cmFtbGkxMkBnbWFpbC5jb206YmRjaEFUVVZSeWF0S291TXRva0Q2M0I4', 
    'Content-Type': 'multipart/form-data', 
    'X-Atlassian-Token': 'nocheck', 
    'Cookie': 'atlassian.xsrf.token=cd2c748f-3ad1-422d-9270-93e6a0d5624e_2b5694b68331830652e1be2f3292e4066aa14602_lin', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

