var wordcountApp = {
	count: 0
};

$(document).ready(function() {
	wordcountApp = $.extend({}, wordcountApp, {
		form: $('#wordcount-form'),
		init: function() {
			$('body').on('submit', wordcountApp.form, wordcountApp.submitForm);
			wordcountApp.input = wordcountApp.form.find('[name="wordcount-text-input"]');
		},
		/* 
			returns count, does not set the count in app object
		*/
		_getCount: function() {
			text = wordcountApp.input.val().trim();
			if(text.length == 0) {
				// empty! have to check for this, because splitting will always return 1+
				return 0;
			}

			return text.split(/[^^][\s,.;?!]+[^$]/gi).length;
		},
		_printResults: function(val, error) {
			var wordcountDisplay = $('#wordcount-count-value');
			if(error === undefined || error == false) {
				wordcountDisplay.removeClass('error');
			} else {
				wordcountDisplay.addClass('error');
			}

			wordcountDisplay[0].innerText = val;
		},
		submitForm: function(e) {
			e.preventDefault();
			var self = wordcountApp;
			var countDisplayText, error = 0;

			self.count = self._getCount();

			if(self.count < 1) {
				error = true;
				countDisplayText = "ERROR! Form must contain at least one non-whitespace character."
			} else {
				countDisplayText = self.count;
			}

			self._printResults(countDisplayText, error);
		}
	});

	wordcountApp.init();

});
