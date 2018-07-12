import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import url from 'js/api.js'
import mixin from 'js/mixin.js'

import velocity from 'velocity-animate'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
  el: '#app',
  data: {
    searchList: null,
    toShow: false,
    loading: false,
    pageNum: 1,
    allLoaded: false,
    keyword
  },
  created() {
    this.getSearchList()
  },
  methods: {
    getSearchList(){
      this.loading = true
      axios.post(url.searchList,  {
        pageNum : this.pageNum,
        pageSie : this.pageSize,
        keyword,
        id
      }).then(res => {
        let curLists = res.data.lists

        if(curLists.length < this.pageSize) {
          this.allLoaded = true
        }

        if(this.searchList) {
          this.searchList = this.searchList.concat(curLists)
        }else{
          this.searchList = curLists
        }
        this.loading = false
        this.pageNum++
      })
    },
    touchMove(){
      if(document.scrollingElement.scrollTop > 100) {
        this.toShow = true
      }else {
        this.toShow = false
      }
    },
    toTop() {
      velocity(document.body,'scroll',{duration: 1000})
    }
  },
  mixins: [mixin]
})