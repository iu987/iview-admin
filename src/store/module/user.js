import { login, logout, getUserInfo } from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, {userName, password}) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          if(res.data && res.data.code === '0'){
            const data = res.data.data
            commit('setToken', data.token)
            resolve()
          }else{
            reject(res.data.msg)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        //   commit('setToken', '')
        //   commit('setAccess', [])
        //   resolve()
        // }).catch(err => {
        //   reject(err)
        // })
        commit('setToken', '')
        commit('setAccess', [])
        resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.token).then(res => {
            if(res.status ===200 ){
              if(res.data.code === '0'){
                const data = res.data.data
                commit('setAvator', data.avator)
                commit('setUserName', data.name)
                commit('setUserId', data.user_id)
                commit('setAccess', data.access)
                commit('setHasGetInfo', true)
                resolve(data)
              }else{
                reject(res.msg)
              }
            }else{
              reject('服务超时，请重新提交')
            }
          }).catch(err => {
            reject('服务异常，请重新提交')
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
