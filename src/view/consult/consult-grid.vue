<template>
<div>
    <div class="search-con search-con-top">
        <div class="search-alinedev">
            <div class="search-inputdev">
                <label class="search-label">公司名称: </label>
                <Input placeholder="Enter" v-model="companyName" clearable class="search-input"/>
            </div>
            <div class="search-inputdev">
                <label class="search-label">险种名称: </label>
                <!-- <Input placeholder="Enter" v-model="insuranceName" clearable class="search-input"/> -->
                <Select v-model="insuranceName" clearable class="search-input">
                    <Option v-for="item in insuranceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <div class="search-inputdev">
                <label class="search-label">联系人姓名: </label>
                <Input placeholder="Enter" v-model="contactName" clearable class="search-input"/>
            </div>
        </div>
        <div class="search-alinedev">
            <div class="search-inputdev">
                <label class="search-label">联系人电话: </label>
                <Input placeholder="Enter" v-model="contactPhone" clearable class="search-input"/>
          </div>
        </div>
      <Button type="primary" icon="ios-search" @click="btnClick" class="search-btn">查询</Button>
    </div>
    <Table border stripe :columns="columns" :data="data1" no-data-text="木有数据~"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <!-- <Page :total="100" :current="1" @on-change="changePage"></Page> -->
            <Page :total="pageTotal" :current="pageNum" :page-size="pageSize" @on-change="pageChange" show-total show-elevator/>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions } from "vuex";
import "./index.less";
export default {
  name: "consult-grid",
  data() {
    return {
      companyName:'',
      insuranceName:'',
      contactName:'',
      contactPhone:'',
      pageTotal: 0, // 数据总数
      pageNum: 1, // 初始页
      pageSize: 10, // 每页条数
      sort: "",
      sortType: "desc",
      insuranceList: [
                    {
                        value: '001',
                        label: '综合福利保障'
                    },
                    {
                        value: '002',
                        label: '雇主责任险'
                    },
                    {
                        value: '003',
                        label: '其他'
                    }
                ],
      columns: [
        {
          title: "公司名称",
          key: "companyName"
//          sortable: "custom"
        },
        {
          title: "险种名称",
          key: "insuranceName",
          render : this.insruanceRender
        },
        {
          title: "联系人",
          key: "contactName",
          width: 150
        },
        {
          title: "联系人电话",
          key: "contactPhone"
        },
        {
          title: "email",
          key: "email"
        },
        {
          title: "咨询时间",
          key: "createdDate"
        },
        {
          title: "描述",
          key: "description"
        }
      ],
      data1: []
    };
  },
  methods: {
    ...mapActions(["queryConsultAction"]),
    setPage() {
      this.pageTotal = this.$store.state.ConsultGrid.pageTotal
    },
    getdata() {
      let querydata = {}
      querydata.pageNum = this.pageNum
      querydata.pageSize = this.pageSize
      querydata.companyName = this.companyName
      querydata.insuranceName = this.insuranceName
      querydata.contactName = this.contactName
      querydata.contactPhone = this.contactPhone
      this.queryConsultAction(querydata).then(data => {
        this.data1 = data
        this.setPage()
      })
    },
    btnClick(){
      console.log("btnClick")
      this.pageNum = 1;
      this.getdata()
    },
    pageChange(index) {
      this.pageNum = index
      console.log("pageChange" + index)
      console.log("pageNum" + this.pageNum)
      console.log("pageSize" + this.pageSize)
      this.getdata()
    },
    insruanceRender(h, params){
//      alert(params.row.insuranceName)
      let insuranceName = '';
      if('001' == params.row.insuranceName){
        insuranceName = "综合福利保障"
      }else if('002' == params.row.insuranceName){
        insuranceName =  "雇主责任险"
      }else{
        insuranceName = "其他"
      }
      return h('div', {  
          props: {
             },
        },insuranceName)
    }
  },
  created() {
    this.getdata()
  }
};
</script>
