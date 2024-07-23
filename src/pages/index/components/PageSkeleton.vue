<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/CustomNavbar">
      <view class="navbar CustomNavbar--navbar" style="padding-top:54px">
        <view class="logo CustomNavbar--logo">
          <image class="logo-image CustomNavbar--logo-image sk-image"></image>
          <text class="logo-text CustomNavbar--logo-text sk-transparent sk-text-3-5714-526 sk-text">新鲜 · 亲民 · 快捷</text>
        </view>
        <view class="search CustomNavbar--search">
          <text class="icon-search CustomNavbar--icon-search sk-transparent sk-text-14-2857-873 sk-text sk-pseudo sk-pseudo-circle">搜索商品</text>
          <text class="icon-scan CustomNavbar--icon-scan sk-pseudo sk-pseudo-circle"></text>
        </view>
      </view>
    </view>
    <scroll-view refresher-enabled="true" scroll-y="true" class="scroll-view scroll-view">
      <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
          <swiper autoplay="false" circular="true" interval="3000" current="0"></swiper>
          <view class="indicator XtxSwiper--indicator">
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/CategoryPanel">
        <view class="category CategoryPanel--category">
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-774 sk-text">居家</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-333 sk-text">锦鲤</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-491 sk-text">服饰</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-64 sk-text">母婴</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-340 sk-text">个护</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-121 sk-text">严选</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-310 sk-text">数码</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-71 sk-text">运动</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-84 sk-text">杂项</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-712 sk-text">品牌</text>
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/HotPanel">
        <view class="panel HotPanel--panel hot HotPanel--hot">
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-124 sk-text">特惠推荐</text>
              <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-458 sk-text">精选全攻略</text>
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-213 sk-text">爆款推荐</text>
              <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-874 sk-text">最受欢迎</text>
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-503 sk-text">一站买全</text>
              <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-272 sk-text">精心优选</text>
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-625 sk-text">新鲜好物</text>
              <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-926 sk-text">生活加分项</text>
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </view>
      </view>
      <view is="components/XtxGuess" class="r r">
        <view class="caption XtxGuess--caption"></view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-526 {
  background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
  background-size: 100% 28.0000rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-873 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2000rpx;
  position: relative !important;
}
.sk-text-14-2857-774 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-333 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-491 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-64 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-340 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-121 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-310 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-71 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-84 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-712 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}
.sk-text-14-2857-124 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}
.sk-text-14-2857-458 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}
.sk-text-14-2857-213 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}
.sk-text-14-2857-874 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}
.sk-text-14-2857-503 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}
.sk-text-14-2857-272 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}
.sk-text-14-2857-625 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}
.sk-text-14-2857-926 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}
.sk-image {
  background: #EFEFEF !important;
}
.sk-pseudo::before, .sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
  }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
    border-radius: 0 !important;
  }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
    border-radius: 50% !important;
  }
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
