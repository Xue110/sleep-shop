import type { CartItem } from "@/types/cart"
import { http } from "@/utils/http"

/**
 * 加入购物车
 * @returns {Promise} Promise
 * @params {skuId: string, count: number} 商品skuId和数量
 */
export const addToCart = (data: { skuId: string, count: number }) => {
  return http({
    url: "/member/cart",
    method: "POST",
    data
  })
}

/**
 * 获取 购物车列表
 */
export const getCartList = () => {
  return http<CartItem[]>({
    url: "/member/cart",
    method: "GET"
  })
}
