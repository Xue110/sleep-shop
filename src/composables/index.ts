import type { XtxGuessInstance } from "@/components/components"
import { ref } from "vue"

/*
  * 猜你喜欢组合式函数
  * @returns {guessRef,onScrollTolower}
  */
export const useGuessList = () => {
  //获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  //滚动触底
  const onScrollTolower = () => {
    guessRef.value?.getMore()
  }
  // 返回ref和事件处理函数
  return {
    guessRef,
    onScrollTolower
  }
}
