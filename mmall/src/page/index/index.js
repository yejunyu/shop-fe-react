/*
 * @Author: yejunyu 
 * @Date: 2018-03-13 14:20:54 
 * @Last Modified by: yejunyu
 * @Last Modified time: 2018-03-14 17:01:25
 */
var _mm = require('util/mm');

_mm.request({
    url: 'http://localhost:8080/manage/product/list.do',
    success:function(res){
        console.log(res)
    },
    error: function(err){
        console.log(err);
        
    }
})