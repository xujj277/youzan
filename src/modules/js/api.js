let url = {
  hotLists : '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topList',
  rank: '/category/rank',
  subList: '/category/subList',
  searchList: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',
  addCart: '/cart/add',
	cartList: '/cart/list',
	cartReduce: '/cart/reduce',
	cartRemove: '/cart/remove',
  cartMrremove: '/cart/mrremove',
  addressList: '/address/list',
	addressAdd: '/address/add',
	addressRemove: '/address/remove',
	addressUpdate: '/address/update',
	addressSetDefault: '/address/setDefault'
}

let host  = 'http://rap2api.taobao.org/app/mock/7058'

export default url

for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}