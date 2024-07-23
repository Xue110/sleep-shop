import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
/*
 * @Description: 登录
 */
export const postLoginWxmin = (data: LoginParams) => {
  return http<LoginResult>({
    url: "/login/wxMin",
    method: "POST",
    data,
  })
}

//小程序登录_内测版
export const postLoginWxminSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    url: "/login/wxMin/simple",
    method: "POST",
    data: {
      phoneNumber
    }
  })
}
