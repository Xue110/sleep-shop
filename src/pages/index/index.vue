<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home';
import CustomNavbar from './components/CustomNavbar';
import CategoryPanel from './components/CategoryPanel';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import HotPanel from './components/HotPanel.vue';
import type { XtxGuessInstance } from '@/components/components';
import PageSkeleton from './components/PageSkeleton.vue';
import { useGuessList } from '@/composables';

//获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async() =>{
 const res = await getHomeBannerAPI()
 console.log(res)
 bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async() =>{
  const res = await getHomeCategoryAPI()
  console.log(res)
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async() =>{
  const res = await getHomeHotAPI()
  console.log(res)
  hotList.value = res.result
  console.log(hotList.value)
}
const isLoading = ref(false)
// 页面加载
onLoad( async() => {
  isLoading.value = true
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData()
  ]).finally(() => {
    isLoading.value = false
  })
})

// 猜你喜欢组合式函数
const { guessRef,onScrollTolower } = useGuessList()

// 刷新
const isTriggered = ref(false)
const onRefresherrefresh = async() =>{
  //开启动画
  isTriggered.value = true
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  guessRef.value?.resetData
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData()
  ])
  //关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered" @scrolltolower="onScrollTolower" class="scroll-view" scroll-y>
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图-->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page{
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view{
  flex: 1;
  overflow: hidden;
}
</style>
