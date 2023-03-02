monitorService = function(){

    let event = {
        onLogin: ()=>{},
        onAlert: ()=>{}
    }

    function init(){
        $('button').click(function(){
            event.onLogin("登入了喔")
        })

        setTimeout(()=>{
            event.onAlert("超過時間")
        },3000);
    }

    function onLogin( _callback = callbackDefault ){
        event.onLogin = _callback
    }

    function onAlert(_callback = callbackDefault ){
        event.onAlert = _callback;
    }

    function callbackDefault(){

    }

    {
		$(document).ready(function () {
			init();
		});
	}

    return {
        onLogin,
        onAlert
    }

}

var monitorService = new monitorService();