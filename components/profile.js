Vue.component('profile', {
  props: ['profile'],
  created: function() {
 		this.fetchData();
 	},
 	data: function() {
 		return {
 			avatar: null
 		}
 	},
 	methods: {
	 	fetchData: function() {
	 		const self = this;
	 		const url = `https://api.github.com/users/${this.profile.github}`;
		 	$.ajax({
		 		url: url
		 	}).done(function(data){
		 		self.avatar = data.avatar_url;
		 	}).fail(function(err){
		 		console.log(err);
		 	});
	 	}
 	},
  template: 
	  `<div class="ui card">
		  <div class="content">
		  	<img class="right floated mini ui image" :src="profile.avatar ? profile.avatar : avatar">
		    <a class="header">{{profile.name}}</a>
		    <div class="meta">
		      <span>{{profile.meta}}</span>
		    </div>
		    <div class="description">
		      {{profile.description}}
		    </div>
		  </div>
		  <div class="extra content">
		  	<div>
		      <i class="mail icon"></i>
		      {{profile.email}}
		    </div>
		    <div>
		    	<i class="phone icon"></i>
		    	{{profile.phone}}
		    </div>
		  </div>
		  <div class="extra content">
		    <a>
		      <i class="building outline icon"></i>
		      <b>{{profile.currentJob}}</b>, anteriormente em {{profile.previousJobs.join(', ')}}.
		    </a>				    
		  </div>
		  <div class="content">
		  	<div class="description">
		  	<p>{{profile.summary}}</p>
		  </div>
		  </div>				  				  
		</div>`
})
