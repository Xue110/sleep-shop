import type { PageParams, PageResult } from "@/types/global"
import type { BannerItem, CategoryItem, GuessList, HotItem } from "@/types/home"
import { http } from "@/utils/http"


/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: "/home/banner",
    method: "GET",
    data: {
      distributionSite,
    }
  })
}

/*
 * 首页-分类区域-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    url: "/home/category/mutli",
    method: "GET",
  })
}

/*
 * 首页-热门区域-小程序
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    url: "/home/hot/mutli",
    method: "GET",
  })
}

/*
 * 猜你喜欢-小程序
 */
export const getHomeGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessList>>({
    url: "/home/goods/guessLike",
    method: "GET",
    data: data
  })
}
