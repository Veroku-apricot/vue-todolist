var app = new Vue ({
  el: '#app',
  data: {
    text: 'hello',
    toDos: []

  },
  methods: {
    addTo: function() {
      this.toDos.push(this.text)
    }
  }
})
