<template>
<div>
    <Table border stripe :columns="columns" :data="data1" no-data-text="木有数据~"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <!-- <Page :total="100" :current="1" @on-change="changePage"></Page> -->
            <Page :total="pageTotal" :current="pageNum" :page-size="pageSize" @on-change="pageChange" show-elevator/>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'consult-grid',
  data () {
    return {
      pageTotal: 10, // 数据总数
      pageNum: 1, // 初始页
      pageSize: 10, // 每页条数
      sort :'',
      sortType: 'desc',
      columns: [
        {
          title: '公司名称',
          key: 'name',
          sortable: 'custom'
        },
        {
          title: '险种名称',
          key: 'age'
        },
        {
          title: '联系人',
          key: 'address',
          width: 150
        },
        {
          title: '联系人电话',
          key: 'date'
        }
      ],
      data1: [
        // {
        //     name: 'John Brown',
        //     age: 18,
        //     address: 'New York No. 1 Lake Park',
        //     date: '2016-10-03'
        // },
        // {
        //     name: 'Jim Green',
        //     age: 24,
        //     address: 'London No. 1 Lake Park',
        //     date: '2016-10-01'
        // },
        // {
        //     name: 'Joe Black',
        //     age: 30,
        //     address: 'Sydney No. 1 Lake Park',
        //     date: '2016-10-02'
        // },
        // {
        //     name: 'Jon Snow',
        //     age: 26,
        //     address: 'Ottawa No. 2 Lake Park',
        //     date: '2016-10-04'
        // },
        // {
        //     name: 'Jon Snow',
        //     age: 26,
        //     address: 'Ottawa No. 2 Lake Park',
        //     date: '2016-10-04'
        // }
      ]
    }
  },
  methods: {
    ...mapActions([
      'queryConsultAction'
    ]),
    initList () {
        let querydata = {}
        querydata.pageTotal = this.pageTotal
        querydata.pageNum = this.pageNum
        querydata.pageSize = this.pageSize
       this.queryConsultAction(querydata)
    },
    pageChange(index){
        console.log('pageChange' + index)
    }
  },
  created () {
    console.log('consult-grid created')
    this.initList()
  }
}
</script>
