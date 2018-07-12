import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

// import Foot from 'components/Foot.vue'
// import Swiper from 'components/Swiper.vue'
import mixin from 'js/mixin.js'

let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    loading: false,
    pageNum: 1,
    allLoaded: false,
    bannerLists: null
  },
  created(){
    this.getLists()
    this.getBanner()
  },
  methods: {
    getLists(){
      this.loading = true
      axios.post(url.hotLists, {
        pageNum : this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists =  res.data.lists

        if(curLists.length < this.pageSize){
          this.allLoaded = true
        }

        if(this.lists){
          this.lists = this.lists.concat(curLists)
        }else{
          this.lists = curLists
        }
        this.loading = false
        this.pageNum++
      })
    },
    getBanner(){
      axios.post(url.banner).then(res => {
        this.bannerLists = res.data.lists
      })
    }
  },
  mixins: [mixin]
})