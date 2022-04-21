import request from '@/samlltools/request'

export const loginAPI = data => {
  return request.post('/v1_0/authorizations', data)
}
