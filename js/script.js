
let success_alert = document.querySelector('#success_alert');
let error_alert = document.querySelector('#error_alert');
let success_alert_light = document.querySelector('#success_alert_light');
let error_alert_light = document.querySelector('#error_alert_light');

success_alert.addEventListener("click",()=>{
	li.Alert({theme:"dark",title:'succses',message:"it was succsesful",icon:"success",type:"button",color_icon:'#17FD32',position:"center"})
});

error_alert.addEventListener("click",()=>{
	li.Alert({theme:"dark",title:'error',message:"there was a error",icon:"alert",type:"time",time:1000,color_icon:'red',position:"left"})
});

success_alert_light.addEventListener("click",()=>{
	li.Alert({theme:"light",title:'succses',message:"it was succsesful",icon:"success",type:"button",color_icon:'#17FD32',position:"center"})
});

error_alert_light.addEventListener("click",()=>{
	li.Alert({theme:"light",title:'error',message:"there was a error",icon:"alert",type:"time",time:1000,color_icon:'red',position:"left"})
});

