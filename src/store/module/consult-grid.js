import { queryConsult} from '@/api/consult'
import { setToken, getToken } from '@/libs/util'

export default {
  name: 'ConsultGrid',
  state: {
    pageTotal: '',
    pageNum: '',
    pageSize: '',
    gridData:[],
    hasGetInfo: false
  },
  mutations: {
    setGridDate(state, gridData){
      state.gridData = gridData
    },
    setPageTotal(state, pageTotal){
      state.pageTotal = pageTotal
    },
    setPageNum(state, pageNum){
      state.pageNum = pageNum
    },
    setPageSize(state, pageSize){
      state.pageSize = pageSize
    }
  },
  actions: {
    // 咨询表格查询
    queryConsultAction ({ commit }, {companyName, insuranceName, contactName, contactPhone, pageNum, pageSize, sort, sortType}) {
      console.log('in queryConsultAction')
      pageSize == null ? 10 : pageSize
      return new Promise((resolve, reject) => {
        queryConsult({
          companyName, insuranceName, contactName, contactPhone, pageNum, pageSize, sort, sortType
        }).then(res => {
          const data = res.data.data.listData
          commit('setPageSize', res.data.data.pageSize)
          commit('setPageTotal', res.data.data.pageTotal)
          commit('setPageNum', res.data.data.pageNum)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
