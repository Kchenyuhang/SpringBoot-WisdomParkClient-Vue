<template>
  <div class="mylist">    
    <delete-slider v-for="(list, index) in dataList" :key="index" @deleteLine="deleteLine(index, list.id)">
      <div class="li-img" slot="img"><img :src="list.img" alt=""></div>
      <h3 class="li-title" slot="title">{{list.title}}</h3>
      <p class="li-price" slot="price">{{list.price}}</p>
    </delete-slider> 
  </div>
</template>

<script>
import deleteSlider from '../../components/deleteTemplate' 

export default {
  components: {
    deleteSlider
  },
  data () {
    return {
      dataList: [
        {
          id: 1,
          img: 'static/a1.jpg',
          title: '法国专柜2019夏季新款修身显瘦气质包臀短裙镂空蕾丝性感连衣裙子',
          price: '399.00'
        },
        {
          id: 2,
          img: 'static/a2.jpg',
          title: 'VERAMOON 亮片印花短袖连衣裙女夏甜美露背性感泡泡袖修身短裙',
          price: '689.00'
        },
        {
          id: 3,
          img: 'static/a3.jpg',
          title: 'famous 仙气木耳边紫色小碎花短裙a字雪纺连衣裙女',
          price: '199.00'
        },
        {
          id: 4,
          img: 'static/a4.jpg',
          title: '灰灰定制 2019春夏新款小香风粗花呢连衣裙女法式名媛复古短裙M家',
          price: '298.00'
        }
      ]
    }
  },
  methods:{
      deleteLine (index, id){
        console.log(id);
        
        this.dataList.splice(index, 1)
      }      
   }
}
</script>