// JavaScript Document
var goIn = function(event){
	event.preventDefault();
	$('#bgMod1').fadeOut();
	};


var submitea = function(){
	$(this).parent().parent().trigger('submit');
	};
	
function d(){
var year = $("#_year").val();
var month = $("#_mounth").val();
var date = $("#_day").val();
if( year ==='' || month ==='' || date ==='' ) { 
$('#btnSubmit').removeClass('btn2').addClass('btn').unbind('click');
return false ;
}
var curryear = new Date().getYear()+1900;
//NULL, BUT MUST BE INITATED BEFORE THE "FOR LOOPS"
var t = 0;
var leap_years = '';
var all_years = '';
var dates = '';
var days = 31; //DEFAULT UNTIL A SHORTER MONTH IS SELECTED
var leapyear = true; //TRUE BECAUSE 1900 IS THE DEFAULT SELECTED YEAR

//LOOPS and LISTS LEAPYEARS FROM 1900 TO CURRENT YEAR
for(i=1900; i<=curryear; i+=4){
if(year==i){ //CHECKS IF SELECTED YEAR MATCHES ANY NUMBER IN THE LOOP (WHICH ARE LEAPYEARS)
t++; //IF SELECTED YEAR IS A LEAPYEAR, t=1 ELSE t=0

//MAINTAINS THE SELECTED YEAR AS THE LIST OF YEARS CHANGES
leap_years += '<option class="year" value="'+year+'" selected>'+year+'</option>'; //KEEPS SELECTED YEAR
} else {
leap_years += '<option class="year" value="'+i+'">'+i+'</option>'; //LOOPS
}
}

//SETS var leapyear FROM THE PRECEDING CODE
if(t){
leapyear = true;

//CENTURIAL YEARS THAT ARE NOT DIVISIBLE BY 400 ARE NOT LEAP YEARS
if((year%100)==0){
if((year%400)!=0){
leapyear = false;
}
}
} else {
leapyear = false;
}

//CHANGES THE NUMBER OF DAYS IF A SHORTER MONTH IS SELECTED
if(month=="April"||month=="June"||month=="September"||month=="November"){
days = 30;
}
if(month=="February"){
if(leapyear==true){
days = 29;
} else {
days = 28;
}
}
//LOOPS and LISTS THE DATES ACCORDING TO THE MONTH SELECTED
for(i=1; i<=days; i++){
if(date==i){
//MAINTAINS THE SELECTED DATE WHEN THE LIST OF DATES CHANGES
dates += '<option class="date" value="'+date+'" selected>'+date+'</option>'; //KEEPS SELECTED DATE
} else {
dates += '<option class="date" value="'+i+'">'+i+'</option>'; //LOOPS
}
}
//GOES INSIDE THE #d select TAG (list of dates)
//$("#d").html(dates);

//IF "February 29" IS SELECTED, #y WILL LIST LEAP YEARS ONLY TO MAINTAIN THE VALIDITY OF THIS DATE
if(month=="February"&&date==29){
//$("#y").html(leap_years);
}
//ELSE, IT WILL LIST ALL YEARS FROM 1900 TO THE CURRENT YEAR
else
{
for(i=1900; i<=curryear; i++){
if(year==i){
all_years += '<option class="year" value="'+year+'" selected>'+year+'</option>'; //KEEPS SELECTED YEAR
} else {
all_years += '<option class="year" value="'+i+'">'+i+'</option>'; //LOOPS
}
}
//GOES INSIDE THE #y select TAG (list of years)
//$("#y").html(all_years);
}

   //CALCULATES AGE
   var ndate = new Date();
   var cyear = ndate.getYear()+1900;
   var cmonth = ndate.getMonth();
   var cdate = ndate.getDate();
   //var trasn = parseInt(year);

   //if(trasn<13) {
   	//cyear=cyear-100; 
   //}		
   var age = cyear - year;
   if(cmonth<month||(cmonth==month&&cdate<date)){
     age--;
   }
   //alert('and the:'+age+'cyear'+cyear+'year'+year);
if(age>=18) {
	$('#btnSubmit').removeClass('btn').addClass('btn2').bind('click',goIn);
	$('#btnSubmit').bind('click', submitea );
	} else {
		//$("#msgerror").html('Uno de los valores es incorrecto');
		//$("#msgerror").show();	
		$('#btnSubmit').removeClass('btn2').addClass('btn').unbind('click');
		$('#btnSubmit').unbind('click' );
		} 
   //$("#age").html(age);
};

var verid=function(){
	var xday = $("#_day").val();
	if(xday=='DD'){
		$("#_day").val('');
	} else {
		$("#_day").removeClass('er');
		$("#msgerror").hide();
	}
};
var changed=function(){
	var xday = $("#_day").val();
	if(xday==''){
		$("#_day").val('DD');
	} else {
		if($.isNumeric( xday )){
			if(xday>0 && xday<=31){
				d();
			} else {
				$("#_day").addClass('er');
				$("#msgerror").html('Uno de los valores es incorrecto');
				$("#msgerror").show();	
			}	
		} else {
			$("#_day").addClass('er');
			$("#msgerror").html('Uno de los valores es incorrecto');
			$("#msgerror").show();
		}
	}
};

var verim=function(){
	var xmonth = $("#_mounth").val();
	if(xmonth=='MM'){
		$("#_mounth").val('');
	} else {
		$("#_mounth").removeClass('er');
		$("#msgerror").hide();
	}
};
var changem=function(){
	var xmonth = $("#_mounth").val();
	if(xmonth==''){
		$("#_mounth").val('MM');
	} else {
		if($.isNumeric( xmonth )){
			if(xmonth>0 && xmonth<=12){
				d();
			} else {
				$("#_mounth").addClass('er');
				$("#msgerror").html('Uno de los valores es incorrecto');
				$("#msgerror").show();
			}	
		} else {
			$("#_mounth").addClass('er');
			$("#msgerror").html('Uno de los valores es incorrecto');
			$("#msgerror").show();
		}	
	}	
}
var veriyear=function(){
	var xyear = $("#_year").val();
	if(xyear=='AAAA'){
		$("#_year").val('');
	} else {
		$("#_year").removeClass('er');
		$("#msgerror").hide();
	}
};

var changeyear=function(){
	var xyear = $("#_year").val();
	if(xyear==''){
		$("#_year").val('AAAA');
	} else {
		if($.isNumeric( xyear )){
			var actual = (new Date).getFullYear();
			menor=actual -100;
			if(xyear>menor && xyear<=actual){
				d();
			} else {
				$("#_year").addClass('er');
				$("#msgerror").html('Uno de los valores es incorrecto');
				$("#msgerror").show();
			}	
		} else {
			$("#_year").addClass('er');
			$("#msgerror").html('Uno de los valores es incorrecto');
			$("#msgerror").show();
		}	
	}
};

var revisa=function(e){
if(e.keyCode == 13) {
        $('#btnSubmit').focus();
        $('#btnSubmit').click();
    }
};
var Init = function() {
	//$('#_day').bind('change',d );
	//$('#_mounth').bind('change',d );
	//$('#_year').bind('change',d );
	$('#_day').bind('focus',verid );
	$('#_day').bind('blur',changed );
	$('#_mounth').bind('focus',verim );
	$('#_mounth').bind('blur',changem );
	$('#_year').bind('focus',veriyear );
	$('#_year').bind('blur',changeyear );
	$('#_year').bind('keyup',revisa);
};

$(document).on('ready',Init);