const ele = document.querySelector('.btn-mount')
ele.addEventListener('click', () => {
  app.$mount(document.getElementById('app'))
})

Vue.component('my-demo1', {
  created () {
    console.log('my-demo1-com', 'created')
  },
  mounted () {
    console.log('组件1,mounted')
  },
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">You clicked me {{ count }} times.</button>'
})
Vue.component('my-demo2', {
  created () {
    console.log('my-demo2-com', 'created')
  },
  mounted () {
    console.log('组件2,mounted')
  },
  data: function () {
    return {
      count: 0
    }
  },
  template: '<div>组件2</div>  '
})

const vm = new Vue({
  beforeCreate () {
    console.log('beforeCreate', this.text)
  },
  created () {
    console.log('create', this.text)
  },
  mounted () {
    console.log('App,mounted', '挂载完成')
  },
  data() {
    return {
      text: 'Hello Vue'
    }
  },
  methods: {
    handleAlert () {
      alert('弹窗')
    },
    handleClick () {
      console.log('组件二click')
    }
  }
}).$mount('#app')
