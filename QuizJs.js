function check(){
	var q1=document.quiz.Q1.value;
	var q2=document.quiz.Q2.value;
	var count=0;
	if(q1=="Karachi"){
		count++;
	}
	if(q2==5){
		count++;
	}
	if(count==2){
		document.getElementById("submitt").style.visibility="visible";
		document.getElementById("result").innerHTML="your score is "+count;
		document.getElementById("nextpage").style.visibility="visible";
	}
	else {
		document.getElementById("submitt").style.visibility="visible";
		document.getElementById("result").innerHTML="your score is "+count+" Sorry try again";
	}
	
}
function check_webSecond(){
	var q1=document.quiz.Q1.value;
	var q2=document.quiz.Q2.value;
	var count=0;
	if(q1=="china"){
		count++;
	}
	if(q2==12){
		count++;
	}
	if(count==2){
		document.getElementById("submitt").style.visibility="visible";
		document.getElementById("result").innerHTML="your score is "+count;
	}
	else {
		document.getElementById("submitt").style.visibility="visible";
		document.getElementById("result").innerHTML="your score is "+count+" Sorry try again";
	}
	document.getElementById("nextpage").style.visibility="visible";
}