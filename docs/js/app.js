Vue.component('card', {
  template: `<div class="card v-card">
    <img class="card-img-top" src="https://placehold.it/318x180" alt="">
    <div class="card-body">
      <h4 class="card-title">{{post.title}}</h4>
      <p class="card-text">{{post.content}}</p>
      <a href="#" class="btn btn-primary">Show more</a>
    </div>
  </div>`,
  props: ['post']
});

new Vue({
  el: '#app',
  data: {
    message: 'A Javascript framework',
    posts: [
      {
        id: 1,
        title: 'Im a title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget vehicula ante, ut molestie risus. Curabitur eu ligula ut felis luctus blandit ac id magna.'
      },
      {
        id: 2,
        title: 'Im a title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget vehicula ante, ut molestie risus. Curabitur eu ligula ut felis luctus blandit ac id magna.'
      },
      {
        id: 3,
        title: 'Im a title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget vehicula ante, ut molestie risus. Curabitur eu ligula ut felis luctus blandit ac id magna.'
      },
      {
        id: 4,
        title: 'Im a title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget vehicula ante, ut molestie risus. Curabitur eu ligula ut felis luctus blandit ac id magna.'
      },
      {
        id: 5,
        title: 'Im a title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget vehicula ante, ut molestie risus. Curabitur eu ligula ut felis luctus blandit ac id magna.'
      },
    ]
  }
});
