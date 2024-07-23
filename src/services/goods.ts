import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

/*
 * 获取商品详情
 * @param id 商品id
 * @returns
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: {
      id,
    },
  })
}
