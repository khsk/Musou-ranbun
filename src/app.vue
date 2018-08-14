<template>
<div id='app'>
    <navigation></navigation>
    <router-view></router-view>
</div>
</template>

<style>
/*  #app, html, body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #contents {
    flex: 1;
  }*/
</style>

<script>
import Navigation from './components/navigation.vue';
import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  components : {
    Navigation,
  },
  methods: {
    ...mapActions(['setState']),
  },
  computed :{
    ...mapGetters(['allState','maxCount']),
  },
  created() {
    console.log('created');
    const state = JSON.parse(localStorage.getItem('state'));
    console.log(state)
    if (state != null) {
      this.setState({state})
    }
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('state', JSON.stringify(this.allState));
    })
    // window.onbeforeunload = function() {
    //   localStorage.setItem('state', JSON.stringify(this.allState));
    // }.bind(this)
    console.log('state',this.allState)
  },
}
</script>