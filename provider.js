app.provider('myProvider', function () {    //seperate file use
/*	var myObj={};
	myObj.name="Abhishek";
	myObj.last="shahi";
	myObj.getName= function(){
		return this.name+" "+this.last;
	}*/

		var Emplyoee={
		id: '1',
		name:'Alekya',
		address: 'Hydrabad',
		gender: 'Female'
	}

	this.$get = function(){
		return Emplyoee;
	}
})
/*app.config(['myProviderProvider', function(myProvider){
	console.log(myProvider.$get().name)
	console.log(myProvider.$get().getName())
}])*/