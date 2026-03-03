import type { Account } from '~/types/interface/user.interface'

/**
 * 取得帳戶
 */
export const getAccountsAPI = () => {
  return useFetchData.get<BaseApiResponse<null>>('/accounts')
}

/**
 * 新增帳戶
 * @param params
 * @param { type String } name 姓名
 * @param { type String } email 郵箱
 * @param { type String } roleLevel 角色等級 (ADMIN, EDITOR, USER, CLIENT)
 * @param { type String } status 帳戶狀態 (ON, OFF)
 */
export const postCreateAccountAPI = (params: Account) => {
  return useFetchData.post<BaseApiResponse<null>>('/create-account', params)
}
