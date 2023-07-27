const ele = document.querySelector('.btn-mount')
ele.addEventListener('click', () => {
  app.$mount(document.getElementById('app'))
})
const vm = new Vue({
  beforeCreate () {
    console.log('beforeCreate', this.text)
  },
  created () {
    console.log('create', this.text)
  },
  mounted () {
    console.log('mounted', '挂载完成')
  },
  data() {
    return {
      text: 'Hello Vue'
    }
  }
})
