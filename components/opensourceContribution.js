Vue.component('opensourcecontrib', {
 	props: ['project','username'],
 	created: function() {
 		this.fetchData();
 	},
 	data: function() {
 		return {
 			avatar: null,
 			url: null,
 			stargazers: null,
 			commits: null,
 			add: 0,
 			del: 0
 		}
 	},
 	methods: {
 		fetchData: function(){
 			this.fetchProject();
 		},
 		fetchProject: function() {
 			const self = this;
 			const url = `https://api.github.com/repos/${this.project.url}`;
	 		$.ajax({
	 			url: url
	 		}).done(function(data){
	 			self.url = data.html_url;
	 			self.stargazers = data.stargazers_count;
	 			self.avatar = data.owner.avatar_url;

	 			self.fetchCommits();
	 		}).fail(function(err){
	 			console.log(err);
	 		});
 		},
 		fetchCommits: function() {
 			const self = this;
 			const url = `https://api.github.com/repos/${this.project.url}/commits?author=${this.username}`;

 			$.ajax({
	 			url: url
	 		}).done(function(data){
	 			self.commits = data.length;

	 			data.forEach(function(c){
	 				self.fetchStats(c.sha);
	 			});	 			
	 		}).fail(function(err){
	 			console.log(err);
	 		});
 		},
 		fetchStats: function(sha) {
 			const self = this;
 			const url = `https://api.github.com/repos/${this.project.url}/commits/${sha}`;

 			$.ajax({
	 			url: url
	 		}).done(function(data){
	 			self.add += data.stats.additions;
	 			self.del += data.stats.deletions;
	 		}).fail(function(err){
	 			console.log(err);
	 		});
 		}		
 	},
	template:
		`<div class="ui card">
		  <div class="content">
		  	<a :href="this.url"><img class="left floated mini ui image" :src="this.avatar"></a>
		    <div class="meta">
		      {{project.name}}
		    </div>
		    <div class="description">
					<div><i class="star icon"></i>stargazers: {{this.stargazers}}</div>
					<div><i class="write icon"></i>{{this.commits}} commits / <span style="color:#db2828;">{{this.add}} ++</span> / <span style="color:#21ba45;">{{this.del}} --</span></div>
		    </div>
		  </div>
		</div>`
})
