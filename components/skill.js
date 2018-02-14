Vue.component('skill', {
 	props: ['skill'],
	template:
		`<div>
			<div class="ui circular label">
			  {{skill.name}}
			  <div class="detail">{{skill.recomendations}}</div>
			</div>
			<div class="ui relaxed divided list">
			  <div class="item">
			    <div class="content">
			    	<div class="header">{{skill.recomender}}</div>
			      <div class="description">{{skill.recomendationDetail}}</div>
			    </div>
			  </div>
			</div>
		</div>`
})
