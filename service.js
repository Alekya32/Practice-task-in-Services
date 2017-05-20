app.service('customerServices', function(){

		var Sony={
			name: 'LapTop',
			product: 'DELL',
			modelNo: '101xer',
			price: '30000' 

		}
		this.getSonyDetails=function(){
			return Sony;
		}
})