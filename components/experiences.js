Vue.component('experiences', {
 	props: ['experiences'],
	template:
		`<div id="timeline" class="ui segment"></div>`,
	mounted: function() {
	  var items = new vis.DataSet(this.experiences);
	  new vis.Timeline(this.$el, items, {});
	}
})
