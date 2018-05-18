<template>
  <div class="car">
    <h1>{{ msg }}</h1>
    <div v-if="list.length">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>商品名称</th>
            <th>商品单价</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="(thisList , num) in list" :key="num">
          <div>{{thisList.title}}</div>
          <tr v-for="(item , index) in thisList.shops" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>
              <button @click="handleReduce(num, index)" :disabled="item.count === 1">-</button>
              <span>{{item.count}}</span>
              <button @click="handleAdd(num, index)">+</button>
            </td>
            <td><button @click="handleRemove(num, index)">移除</button></td>
          </tr>
        </tbody>
      </table>
      <div class="total">总价：￥ {{totalPrice}}</div>
    </div>
    <div v-else>购物车为空</div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCar',
  data () {
    return {
      msg: '购物车实例',
      list: [
        {
          title: '数码产品',
          shops: [ {
            id: 1,
            name: 'iphone 7',
            price: 6188,
            count: 1
          },
          {
            id: 2,
            name: 'iPad Pro',
            price: 5888,
            count: 1
          },
          {
            id: 3,
            name: 'MacBook Pro',
            price: 21488,
            count: 1
          } ]
        },
        {
          title: '水果',
          shops: [ {
            id: 1,
            name: '苹果',
            price: 8,
            count: 1
          },
          {
            id: 2,
            name: '梨子',
            price: 5,
            count: 1
          },
          {
            id: 3,
            name: '草莓',
            price: 21,
            count: 1
          } ]
        }
      ]
    }
  },
  computed: {
    totalPrice: function () {
      var total = 0
      for (var i = 0; i < this.list.length; i++) {
        for (var j = 0; j < this.list[i].shops.length; j++) {
          total += this.list[i].shops[j].price * this.list[i].shops[j].count
        }
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  methods: {
    handleReduce (num, index) {
      if (this.list[num].shops[index].count === 1) return
      this.list[num].shops[index].count--
    },
    handleAdd (num, index) {
      this.list[num].shops[index].count++
    },
    handleRemove (num, index) {
      this.list[num].shops.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
a{
  color: #42b983;
}
.car{
  max-width: 50%;
  min-width: 300px;
  margin: 0 auto;
}
table{
  width: 100%;
}
tr {
    line-height: 3.5rem;
}
.total{
  line-height: 8rem;
  font-size: 1.5em;
}
button {
    padding: 5px 15px;
}
span{
  padding-left: 10px;
  padding-right: 10px;
}
</style>
