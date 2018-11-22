import axios from '@/libs/api.request'
import qs from 'qs'
import {logindata, logoutdata, getUserInfoData} from '@/mock/login'
import { getConsultData } from '@/mock/data'


export const login = ({ userName, password }) => {
  let username = userName;
  const data = {
    username,
    password
  }
  return axios.request({
    // url: 'login',
    // data,
    url: 'admin/login',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data:qs.stringify(data),
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'admin/getUserInfo',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
