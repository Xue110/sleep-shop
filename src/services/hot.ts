import type { PageParams } from "@/types/global"
import type { HotResult } from "@/types/hot"
import { http } from "@/utils/http"

type HotParams = PageParams & { subType?: string }
/*
* 热门推荐
* @param {string} url 接口地址
* @param {HotParams} data 请求参数
* */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: "GET",
    url,
    data,
  })
}
