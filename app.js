var employeeArray = [];
var monthlySalary;
$(document).ready(function(){
	$("#employeeinfo").submit(function(event){
		event.preventDefault();

		var values = {};

		console.log($("#employeeinfo").serializeArray());
		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})

		$("#employeeinfo").find("input[type=text]").val("");
		console.log(values);
		employeeArray.push(values);
		
		monthlySalary = calcTotalSalary();
		console.log("monthSalary: " + monthlySalary);
		appendDom(values);

		$("#employeeContainer").append("<p id='monthlyCost'>" + "Client's monthly cost: " + monthlySalary + "</p>");
	
	});
});

function calcTotalSalary() {
	var totalSalary = 0;
	for (var i = 0; i < employeeArray.length; i++) {
		var temp = parseFloat(employeeArray[i].yearlySalary, 10);
		totalSalary = parseFloat(totalSalary) + temp;
	};
	console.log(totalSalary);
	return totalSalary/12;
		
};

function appendDom(employee){
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();

	$el.append("<p>" + employee.employeeFirstname + "</p>");
	$el.append("<p>" + employee.employeeLastname + "</p>");
	$el.append("<p>" + employee.idnumber + "</p>");
	$el.append("<p>" + employee.jobTitle + "</p>");
	$el.append("<p>" + employee.yearlySalary + "</p>");

};


