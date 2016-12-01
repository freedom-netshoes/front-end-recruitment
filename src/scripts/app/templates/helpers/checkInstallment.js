'use strict';

module.exports = function(installment, options) {
	if(installment > 0) {
		return options.fn(this);
	}

	return options.inverse(this);
};