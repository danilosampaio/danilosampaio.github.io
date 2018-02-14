Vue.component('featuredskill', {
 	props: ['skill'],
	template:
		`<div class="ui card">
		  <div class="content">
		    <a href="https://www.youracclaim.com/badges/1df084e4-fea1-4797-8870-0fcbba6683f9">
		    	<img class="right floated tiny ui image" src="./img/nodejs_contributor.png">
		    </a>
		    <div class="header">
		      Node.js Contributor
		    </div>
		    <div class="meta">
		      Issued by IBM
		    </div>
		    <div class="description">
		      The badge holder has demonstrated a commitment to the success of Node.js through direct contributions to the core or one of the top NPM modules.
		    </div>
		  </div>
		  <div class="extra content">
		    Issued 12 Aug 2016
		  </div>
		</div>`
})
