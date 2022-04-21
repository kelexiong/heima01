import request from '@/samlltools/request'
// 封装一个文章API接口
export const getArticlesAPI = function (page, limit) {
  return request.get('/articles', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}
