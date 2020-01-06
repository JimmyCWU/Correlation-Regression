class Regression extends Correlation {
	constructor() {
		super();
		this.iniRegression();
	}
	iniRegression() {
		this.ave_x = 0;
		this.ave_y = 0;
		this.beta1Result = 0;
		this.beta0Result = 0;
	}

	caculateBeta1() {
		this.ave_x = this.sum_x / this.count;
		this.ave_y = this.sum_y / this.count;
		let upperValue = this.sum_xy - this.count * this.ave_x * this.ave_y;
		let bottomValue = this.sum_xx - this.count * Math.pow(this.ave_x, 2);
		this.beta1Result = upperValue / bottomValue;
	}
	caculateBeta0() {
		this.beta0Result = this.ave_y - this.beta1Result * this.ave_x;
	}
}
try {
  module.exports = { Regression: Regression }
} catch (err) {
  //console.error(err)
}