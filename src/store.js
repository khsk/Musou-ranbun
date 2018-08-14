import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const state = {
    currentSentence: '',
    count: 0,
    sentences:[],
};

const mutations = {
    setState(state, payload) {
        console.log('mutation setState',payload);
        const s = payload.state;
        state.currentSentence = s.currentSentence;
        state.count            = s.count;
        state.sentences        = s.sentences;
    },
    increment (state) {
        console.log('increment');
        state.count++;
        console.log(state.count);
    },
    setCount(state, payload) {
        state.count = payload.count;
    },
    currentSentence(state, payload) {
        state.currentSentence = payload.sentence;
    },
    sentences (state, payload) {
        console.log('sentences');
        console.log(payload.sentence);
        state.sentences.push({
            sentence : payload.sentence,
            index    : state.count - 1, // countは1始まりなので
            count    : state.count,
        });
    },
    deleteSentence (state, payload) {
        state.sentences = state.sentences.filter( (v, i) => {
            return v.count != payload.count;
        });
    },
    allDeleteSentence (state) {
        state.sentences = [];
    },
    changeIndex(state, payload) {
        if (payload.oldIndex == payload.newIndex) {
            return;
        }

        const oldSentenceIndex =  state.sentences.findIndex((element) => {
            return element.index == payload.oldIndex;
        });


        state.sentences.forEach((sentence) => {
            if (payload.oldIndex < payload.newIndex &&
                payload.oldIndex <= sentence.index && 
                sentence.index   <= payload.newIndex) {
                sentence.index -= 1;
            } else if(
                payload.newIndex <= sentence.index && 
                sentence.index   <= payload.oldIndex) {
                sentence.index += 1;
            }
        });

        state.sentences[oldSentenceIndex].index = payload.newIndex;


    },
};

 
const actions = {
    initState({commit}) {
        commit('allDeleteSentence');
        commit('setCount', {count:0});
        commit('currentSentence', {sentence:''});
    },
    setState({commit}, payload) {
        commit('setState', payload);
    },
    saveCurrentSentence ({commit}, sentence)
    {
        commit('currentSentence', {sentence});
    },
    addSentence ({commit}, sentence) {
        commit('increment');
        commit('sentences', {sentence});
    },
    deleteSentence ({commit}, payload) {
        commit('deleteSentence', payload);
    },
    countUp ({commit}) {
        commit('increment');
    },
    copyText ({getters}) {
        let text = '';
        getters.orderedSentences.forEach((sentence) => {
            text += sentence.sentence + '\n';
        });

        document.addEventListener('copy', (e) => {
            e.preventDefault();
            e.clipboardData.setData('text/plain', text);
        }, {once:true,});
        document.execCommand('copy');
    },
    copyTextWithCreatedNumber ({getters}) {
        let text = '';
        getters.orderedSentences.forEach((sentence) => {
            // ここString.padStartに変えるとCountにlodash不要に
            text += sentence.sentence + ' ' + _.padStart(sentence.count, 3, '0') + '\n';
        });

        document.addEventListener('copy', (e) => {
            e.preventDefault();
            e.clipboardData.setData('text/plain', text);
        }, {once:true,});
        document.execCommand('copy');
    },

};


const getters = {
    allState(state) {
        console.log('getter all state',state);
        return state;
    },
    sentences (state) {state.sentences;},
    maxCount (state) {
        console.log('maxCount',state.count);
        return state.count;
    },
    currentSentence(state) {
        return state.currentSentence;
    },
    orderedSentences(state) {
        console.log('orderedSentences',_.orderBy(state.sentences, 'index'));
        return _.orderBy(state.sentences, 'index');
    },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});



