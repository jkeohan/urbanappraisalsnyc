function countItems(arr, item) {
  // Write the code that goes here
}var arr = ["apple", ["apple","fix"]]

function countItems(arr, item) {
	var item = item.toLowerCase();
	var count = 0;
  for(var i = 0; i < arr.length; i++) {
  	console.log(arr[i])
  	if (typeof arr[i] === "string") { 
    	console.log("item is a string")
    	if( arr[i].toLowerCase() == item) { count += 1 }
  	}
    else { for(var j=0; j<arr[i].length;j++) {
    	if( i[j].toLowerCase() == item) { count += 1 }
    }
   }
   return count
}

countItems(arr,"apple")
