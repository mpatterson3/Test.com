var i,msg;
for(i=0; i<100;i++){
	if(i%3==0){
		msg="Fizz";
	}
	else if(i%5==0){
		msg="Buzz";
	}
	else{msg = i};
	display(msg);
}
function display(msg){
	console.log(msg);
}

