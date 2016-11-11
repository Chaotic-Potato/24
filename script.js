var Game = {

}

var State = function (array) {
	this.array = array
	for (var i = this.array.length - 1 ; i > 0; i--) {
		for (var j = i; j < this.array.length; j++) {
			if (this.array[j-1] > this.array[j]) {
				tempInt = this.array[j]
				this.array[j] = this.array[j-1]
				this.array[j-1] = tempInt
			}
		}
	}
}

State.prototype = {
	
}
