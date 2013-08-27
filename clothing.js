$(document).ready(function() {

			var clothing = [
			  { label:  "guess" [{
			  			breed: 'golden'
			  			}],
			    size:  "large",
			    price:  "$50"
			  },
			  { label:   "gap",
			    size:  "small",
			    price:  "$30"
			  },
			  { label:     "hm",
			    size:     "medium",
			    price:  "$90"
			  },
			];

			clothing.forEach(function(datapt){
			   console.log(datapt.size);
		})

	})
//make our array



// $('#table_id tr').each(function() {
//     serializedData += '&' + $(this).attr('id') + '=' + $(this).attr('id')+'_'+$(:first_child).text();
// });
