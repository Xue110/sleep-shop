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

/**
 * 删除/清空 购物车单品
 * @params {ids: string[]} 商品skuId数组
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

/**
 * 修改购物车商品
 * @params {skuId: string} 商品skuId
 */
export const putMemberCartBySkuIdAPI = (skuId: string, data: { selected?: boolean, count?: number }) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

/**
 * 购物车全选
 * @params {selected: boolean} 是否全选
 * @returns {Promise} Promise
 */
export const checkAllCartAPI = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data
  })
}
