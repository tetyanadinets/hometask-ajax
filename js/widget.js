;(function($){
	$('#ajax').on('click', function(evt){
			evt.preventDefault();

			var xhr_request = new XMLHttpRequest();

			xhr_request.onreadystatechange = function(){

			var data;

			if (xhr_request.readyState === 4) {
				data = JSON.parse(xhr_request.responseText);


			var json_list = '<ul class="bulleted">';

				for (key in data) {

					var inoffice= data[key]['inoffice'];

					var liClass = inoffice?'in':'out';

					json_list  += '<li class="' +liClass+ '">' +data[key]['name']+ '</li>';
				}

			json_list +='</ul>'

				document.getElementById("employeeList").innerHTML = json_list;

				}
		}
		xhr_request.open('GET', 'data/employees.json');
		xhr_request.send();

		});
})(jQuery);
