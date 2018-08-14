<template>
<md-toolbar id="navi" class="stick-header">


<md-menu md-align-trigger>
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>menu</md-icon>
      </md-button>
               <md-menu-content>
           <md-menu-item @click.native="copyText">Copy text</md-menu-item>
           <md-menu-item @click.native="copyTextWithCreatedNumber">Copy text with created number</md-menu-item>
           <md-menu-item @click.native="openDialog('dialog1')">
              Delete All 
             <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog1">
               <!-- <md-dialog-title>Create new note</md-dialog-title> -->
             
               <md-dialog-content>
                    全文章を削除します。
               </md-dialog-content>
             
               <md-dialog-actions>
                 <md-button class="md-primary" @click.native="closeDialog('dialog1')">Cancel
                 </md-button>
                 <md-button class="md-warn"  @click.native="allDel('dialog1')">
                 Yes 
                 <!-- @click.native="closeDialog('dialog1')" -->
                 </md-button>
               </md-dialog-actions>
             </md-dialog>
           </md-menu-item>

           <md-menu-item @click.native="close">Close</md-menu-item>
         </md-menu-content>


</md-menu>
    
      <h2 class="md-title" style="flex: 1">夢想乱文</h2>
      <router-link to="/writer">
        <md-button class="md-raised">
          入力
        </md-button>
      </router-link>
      <router-link to="/editor">
        <md-button class="md-raised">
          編集
        </md-button>
      </router-link>

</md-toolbar>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    methods:{
        ...mapActions(['initState', 'copyText', 'copyTextWithCreatedNumber']),
        openDialog(ref) {
            this.$refs[ref].open();
        },
        closeDialog(ref) {
            this.$refs[ref].close();
        },
        allDel(ref) {
            this.closeDialog(ref);
            this.initState();
        },
        close() {
          window.close();
        },
    },
}

</script>

<style scoped>
  #navi {
    -webkit-app-region: drag;
    height: 100px;
    width: 100%;
    display: flex;
    /*position: fixed;
    z-index: 2;*/
  }
  
  .md-menu, a {
    -webkit-app-region: no-drag;
  }
</style>