<template>
<div id='app'>
    <md-input-container>
      <label>Required</label>
      <md-input required :autofocus="true" :value='currentSentence' @keydown.native="sendCurrentSentence" @keydown.enter.native="sendSentence"></md-input>
    </md-input-container>

    <div>{{ maxCount }}</div>

    <div>{{ this.$store.state.count }}</div>

<li v-for="r in realtime">
    <p>{{ r.aaa }}</p>
</li>

<!--     <li v-for="l in list">
      <router-link :to="{ name: 'detail', params: { id: l.id }}">{{ l.title }}</router-link>
    </li> -->
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name : 'writer',
  methods: {
    ...mapActions(['addSentence', 'saveCurrentSentence']),
    sendSentence(e) {
      const sentence = e.target.value
      if (e.target.value == '') {
        return;
      }
      this.addSentence(sentence)
      this.saveCurrentSentence('')
      //e.target.value = '';
    },
    sendCurrentSentence(e) {
      const sentence = e.target.value;
      console.log('sendCurrentSentence', sentence)
      this.saveCurrentSentence(sentence);
    }
  },
  computed: {
    ...mapGetters(['sentences', 'maxCount', 'currentSentence']),
    realtime() {
        return [{aaaa:this.$store.getters.maxCount}];
    }
  }
}


</script>