class Correlation {
	constructor() {
		this.iniCorrelcation();
	}
	iniCorrelcation() {
		this.sum_x = 0;
		this.sum_y = 0;
		this.sum_xy = 0;
		this.sum_xx = 0;
		this.sum_yy = 0;
		this.count = 0;
		this.errorMsg = "";
		this.numArrayX = new Array();
		this.numArrayY = new Array();
		this.correlationCoeff = 0;
		this.corrOfDeter = 0;
	}
	isValidLength(numArrayX, numArrayY) {
		if (numArrayX.length != numArrayY.length) {
			throw "Error: Array Data X's size is not the same as Array Data Y's";
		}
	}
	isValidNumberArray(numArrayX, numArrayY) {
		if (typeof numArrayX === "undefined" || typeof numArrayY === "undefined") {
			throw "Error: Array Data not loaded properly";
		}
	}
	getDataXYLoad(newDataX, newDataY) {
		let tempNumArrayX = newDataX.split("\n").map(Number);
		let tempNumArrayY = newDataY.split("\n").map(Number);
		this.isValidLength(tempNumArrayX, tempNumArrayY);
		this.isValidNumberArray(tempNumArrayX, tempNumArrayY);
		this.getArrayXyLoad(tempNumArrayX, tempNumArrayY);
	}
	getArrayXyLoad(newArrayX, newArrayY) {
		this.numArrayX = newArrayX;
		this.numArrayY = newArrayY;
	}
	getAllMathData() {
		let values_length = this.numArrayX.length;
		//this.count = values_length - 1;
		this.count = values_length;
		for (let i = 0; i < values_length; i++) {
			let x = this.numArrayX[i];
			let y = this.numArrayY[i];
			this.sum_x += x;
			this.sum_y += y;
			this.sum_xx += Math.pow(x, 2);
			this.sum_yy += Math.pow(y, 2);
			this.sum_xy += x * y;
		}
	}
	doCaculateCorrelation() {
		let upperValue = 0;
		let bottomLeftValue = 0;
		let bottomRightValue = 0;
		let result = 0;
		upperValue = this.count * this.sum_xy - this.sum_x * this.sum_y;
		bottomLeftValue = Math.sqrt(
			this.count * this.sum_xx - Math.pow(this.sum_x, 2)
		);
		bottomRightValue = Math.sqrt(
			this.count * this.sum_yy - Math.pow(this.sum_y, 2)
		);
		result = upperValue / (bottomLeftValue * bottomRightValue);
		this.correlationCoeff = result;
		this.corrOfDeter = Math.pow(result, 2);
	}
}
try {
  module.exports = { Correlation: Correlation }
} catch (err) {
  //console.error(err)
}