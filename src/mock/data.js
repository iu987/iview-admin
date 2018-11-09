import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      name: '@name',
      email: '@email',
      createTime: '@date'
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}

export const getConsultData = req => {
  let consultData = []

  doCustomTimes(5, () => {
    consultData.push(Mock.mock({
      name: '@name',
      age: '@email',
      address: '@region',
      date: '@date'
    }))
  })
  let res = {
    code: '0',
    msg: 'ok',
    data: {
      listData: consultData,
      pageSize: 10,
      pageNum: 5,
      pageTotal: 100
    }
  }
  return res
}
