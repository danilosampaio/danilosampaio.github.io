Vue.component('featuredproject', {
 	props: ['project'],
	template:
		`<div class="ui card">
		  <div class="content">
		  	<div class="right floated meta">
		  		<i v-for="i in project.icons" :class="i"></i>
		  	</div>
		    <div class="header">{{project.name}}</div>
		    <div class="meta">{{project.begin}} / {{project.end}}</div>
		    <div class="description">
		      <p>{{project.description}}</p>
		    </div>
		  </div>
		  <div class="extra content">
		    <i class="users icon"></i>
		    {{project.extraContent}}
		  </div>
		</div>`
})
