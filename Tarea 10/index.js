var app = new Vue({
    el: '#app',
    data: {
      selected: 'Nada aun'
    },
    methods: {
      changeSelected: function (clicked) {
        this.selected = clicked
      }
    }
  })
  