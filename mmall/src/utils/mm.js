var _mm = {
    request: function (param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (response) {
                // 请求成功
                if(0 === response.status){
                    typeof param.success === 'function' && param.success(response.data, response.msg);
                }
                // 没有登录,强制登录
                else if(10 === response.status){
                    _this.doLogin();
                }
                // 请求数据错误
                else if(1 === response.status){
                    typeof param.error === 'function' && param.error(response.msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    doLogin: function(){
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    },
};


module.exports = _mm;