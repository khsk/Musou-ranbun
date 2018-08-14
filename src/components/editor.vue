<template>
<div id='app'>
<draggable v-model="draggableSentenceList" @start="drag=true" @end="drag=false">
     <div v-for="sentence in orderedSentences"
      :key="sentence.count"
      >
        {{ sentence.sentence }}
      </div>

</draggable>



<md-layout :md-gutter="16">
                <md-layout>
                    <draggable v-model="orderedSentences" element="md-list" >
                        <md-list-item v-for="sentence in orderedSentences" :key="sentence.index">
                            <span>{{ sentence.count }}</span>

                            <md-divider v-if="sentence.index !== orderedSentences.length - 1"></md-divider>
                        </md-list-item>
                    </draggable>
                  </md-layout>
</md-layout>



<!--  -->

<draggable v-model="orderedSentences" element="md-list" @end="change">

<!--     <md-list> -->
      <md-list-item v-for="sentence in orderedSentences"
      :key="sentence.count"
      draggable="true"
      >
        <span>{{ sentence.count }}</span>
        <span>{{ sentence.index }}</span>
        <span>{{ sentence.sentence }}</span>
        <md-list-expand>
          <md-list>
            <!-- data-count含めまとめて上位に載せるか -->
            <md-list-item class="md-inset" @click.native="deleteSentenceClick" :data-count="sentence.count">Delete</md-list-item>
            <md-list-item class="md-inset" @click.native="editSentence" :data-sentence="sentence.sentence" :data-count="sentence.count">Remake (Deleted this line)</md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
<!--     </md-list> -->

</draggable>
</div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import _ from 'lodash'
import draggable from 'vuedraggable'

export default {
  name: 'editor',
  components: {
    draggable,
  },
  methods: {
    ...mapActions(['saveCurrentSentence', 'deleteSentence']),
    editSentence(e) {
        console.log('edit sentence')

        this.deleteSentence({count:e.target.parentElement.dataset.count});
        this.saveCurrentSentence(e.target.parentElement.dataset.sentence)
        this.$router.push('/writer');
    },
    // 名前ー
    deleteSentenceClick(e) {
      console.log('deleteSentenceClick')
      console.log(e.target.parentElement.dataset.count)
      this.deleteSentence({count:e.target.parentElement.dataset.count});
    },
    change(evt, originalEvent) {
      this.$store.commit('changeIndex', {oldIndex:evt.oldIndex ,newIndex:evt.newIndex, })
    },
  },
  computed: {
    ...mapState(['sentences']),
    ...mapGetters(['orderedSentences']),
    draggableSentenceList: {
      get() {
        return this.orderedSentences;
      },
    },
  },

}


</script>