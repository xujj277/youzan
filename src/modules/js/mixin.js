import Foot from 'components/Foot.vue'
import Swiper from 'components/Swiper.vue'

let mixin = {
  components:{
    Foot,
    Swiper
  },
  filters: {
    price(number){
      let priceStr = '' + number
      if(priceStr.indexOf('.') > -1) {
        let arr = priceStr.split('.')
        return arr[0] + '.' + (arr[1] + '0').substr(0,2)
      }else{
        return priceStr + '.00'
      }
    }
  }
}

export default mixin