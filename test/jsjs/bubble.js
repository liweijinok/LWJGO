var arr1=[1,34,567,2,13,455,3,234,43,21,45,65];
function bubble(arr){
	for(var n=arr.length-1; n>0; n--){
		for(var i=0; i<n; i++){
			if(arr[i]>arr[i+1]){
				var nArr=arr[i];
				arr[i]=arr[i+1];
				arr[i+1]=nArr;
			}
		}
	}
	 console.log(arr);
}
bubble(arr1);
