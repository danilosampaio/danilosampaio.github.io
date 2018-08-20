Vue.component('experiences', {
 	props: ['experiences'],
	template:
		`<div id="timeline" class="ui segment"></div>`,
	mounted: function() {
		var last = this.experiences[this.experiences.length - 1];
		if (!last.end) {
			var today = new Date();
			var month = today.getMonth() > 9 ? today.getMonth() : ('0' + today.getMonth());
			var day = today.getDate() > 9 ? today.getDate() : ('0' + today.getDate());
			last.end = today.getFullYear() + "-" + month + '-' + day;
		}
	  var items = new vis.DataSet(this.experiences);
	  new vis.Timeline(this.$el, items, {});
	}
})
