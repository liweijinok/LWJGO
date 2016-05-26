//var r = /\d{2,4}/;
//var rr= r.test(30);
//console.log(rr);
//function h(a){
//		console.log(a);
//};
//h("hhh");
function format(num){
	var y = num.getFullYear()+"年";
	var m = num.getMonth()+"月";
	var d = num.getDate()+"日";
	var week=["日","一","二","三","四","五","六"];
	var w = week[num.getDay()];
	var h = num.getHours();
	var am=h>=12? "下午":"上午";
	h=h>12? h-12:h;
	h=h<10? "0"+h:""+h;
	var mi=num.getMinutes();
	mi=mi<10? "0"+mi:""+mi;
	var s=num.getSeconds();
	s=s<10? "0"+s:""+s;
	console.log(y+m+d+am+h+":"+mi+":"+s);
}
var i =new Date();
format(i);
