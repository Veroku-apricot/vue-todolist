var vm = new Vue ({
  el: '#app',
  data: {
    text: '',
    message: 'There is nothing to do...',
    toDos: []

  },
  methods: {
    // Add element to list
    addTo: function() {
      this.text===''?'':this.toDos.push(this.text);
      this.text = '',
      this.message = ''
    },
    // Remove element from list
    remove: function(index) {
      this.toDos.splice(index,1);
      this.toDos.length===0?this.message='Gratz, you finished your chores!':''
    }
  }
})
