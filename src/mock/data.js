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
  console.log('in consult mock11')
  let consultData = []
  doCustomTimes(5, () => {
    consultData.push(Mock.mock({
      name: '@name',
      age: '@age',
      address: '@address',
      date: '@date'
    }))
  })
  return consultData
}
