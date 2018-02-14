Vue.component('education', {
  props: ['education'],
  template:
    `<div class="ui horizontal list">
      <div v-for="course in education" class="item">        
        <div class="image">
          <img src="./img/ifce.jpg"></i>
        </div>
        <div class="content">
          <a class="header">{{course.university}}</a>
          <div class="meta">
            <span>{{course.course}}</span>
          </div>
          <div class="description">
            <p>{{course.begin}} - {{course.end}}</p>
          </div>          
        </div>
      </div>
    </div>`
})
