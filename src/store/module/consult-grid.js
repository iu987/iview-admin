import { queryConsult} from '@/api/consult'
import { setToken, getToken } from '@/libs/util'

export default {
  name: 'ConsultGrid',
  state: {
    name: '',
    age: '',
    address: '',
    token: getToken(),
    date: '',
    hasGetInfo: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 咨询表格查询
    queryConsultAction ({ commit }, {pageTotal, pageNum, pageSize, sort, sortType}) {
      console.log('in queryConsultAction')
      pageSize == null ? 10 : pageSize
      return new Promise((resolve, reject) => {
        queryConsult({
          pageTotal, pageNum, pageSize, sort, sortType
        }).then(res => {
          const data = res.data
          commit('setToken', data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
