var vm = new Vue ({
  el: '#app',
  data: {
    text: '',
    toDos: []

  },
  methods: {
    // Add element to list
    addTo: function() {
      this.text===''?'':this.toDos.push(this.text);
      this.text = ''
    },
    // Remove element from list
    remove: function(index) {
      this.toDos.splice(index,1)
    }
  }
})
