<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
// 映射函数
import { mapActions } from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: '',
  components: {
    FooterGuide
  },
  props: {},
  data () {
    return {
    }
  },
  created () {},
  computed: {},
  watch: {},
  // async mounted () {
  //   const result = await reqFoodCategorys()
  //   console.log(result)
  // },
  mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>

