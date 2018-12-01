function resave(){
	var datas=document.cookie.split("=");
	var list=document.getElementById("list");
	for(var i=1;i<datas.length;i++){
		var op=document.createElement("h4");
	    op.innerHTML=datas[i];
	    list.appendChild(op);
	}
}

function add(){
	var name=document.getElementById("usrname");
	var msg=document.getElementById("usrmsg");
	if(name.value!=""&&msg.value!="")
	{   
		var op=document.createElement("h4");
		var s=name.value+":<br/>"+msg.value;
	    op.innerHTML=s;
	    var list=document.getElementById("list");
	    list.appendChild(op);
		name.value="";msg.value="";s="";
		
		var es=list.getElementsByTagName("h4");
		for(var i=0;i<es.length;i++){
			s+="="+es[i].innerHTML;
			
		}
		var Cookies=document.cookie;
	    var date=new Date();
	    var expireDays=10;
	    date.setTime(date.getTime()+expireDays*24*3600*1000);
	    document.cookie=s+"; expires="+date.toGMTString()+"; path=/";	
	}
}