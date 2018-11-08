import axios from '@/libs/api.request'

export const queryConsult = ({ pageTotal, pageNum, pageSize, sort, sortType}) => {
  console.log('in queryConsult')
  const data = {
    pageTotal,
    pageNum,
    pageSize,
    sort,
    sortType
  }
  return axios.request({
    url: 'consult',
    data,
    method: 'post'
  })
}
