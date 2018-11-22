import axios from '@/libs/api.request'
import qs from 'qs';

export const queryConsult = ({ companyName, insuranceName, contactName, contactPhone, pageNum, pageSize, sort, sortType }) => {
  console.log('in queryConsult')
  const data = {
    companyName, 
    insuranceName, 
    contactName, 
    contactPhone,
    pageNum,
    pageSize,
    sort,
    sortType
  }
  return axios.request({
    url: 'consult/queryConsult',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data:qs.stringify(data),
    method: 'post'
  })
}
