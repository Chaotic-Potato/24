var Game = {

}

var State = function (array) {
	this.array = array
}

State.prototype = {
	getArray: function() {
		temp = array
		for (var i = 1; i < array.length - 1; i++) {
			for (var j = i; j < array.length; j++) {
				if (temp[j - 1] > temp[j]) {
					tempInt = temp[j]
					temp[j] = temp[j -1]
				   	temp[j - 1] = tempInt	
				}
			}
		}
		return temp
	}
}
