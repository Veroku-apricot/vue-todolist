var vm = new Vue ({
  el: '#app',
  data: {
    text: '',
    toDos: []

  },
  methods: {
    addTo: function() {
      this.toDos.push(this.text)
    },
    remove: function(index) {
      this.toDos.splice(index,1)
    }
  }
})
