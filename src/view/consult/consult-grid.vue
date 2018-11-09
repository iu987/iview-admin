<template>
<div>
    <div class="search-con search-con-top">
        <div class="search-alinedev">
            <div class="search-inputdev">
                <label class="search-label">公司名称: </label>
                <Input placeholder="Enter" class="search-input"/>
            </div>
            <div class="search-inputdev">
                <label class="search-label">险种名称: </label>
                <Input placeholder="Enter" class="search-input"/>
            </div>
            <div class="search-inputdev">
                <label class="search-label">联系人姓名: </label>
                <Input placeholder="Enter" class="search-input"/>
            </div>
        </div>
        <div class="search-alinedev">
            <div class="search-inputdev">
                <label class="search-label">联系人电话: </label>
                <Input placeholder="Enter" class="search-input"/>
          </div>
        </div>
      <Button type="primary" icon="ios-search" class="search-btn">查询</Button>
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
      pageTotal: 0, // 数据总数
      pageNum: 1, // 初始页
      pageSize: 10, // 每页条数
      sort: "",
      sortType: "desc",
      columns: [
        {
          title: "公司名称",
          key: "name",
          sortable: "custom"
        },
        {
          title: "险种名称",
          key: "age"
        },
        {
          title: "联系人",
          key: "address",
          width: 150
        },
        {
          title: "联系人电话",
          key: "date"
        }
      ],
      data1: []
    };
  },
  methods: {
    ...mapActions(["queryConsultAction"]),
    setPage() {
      this.pageTotal = this.$store.state.ConsultGrid.pageTotal;
      this.pageNum = this.$store.state.ConsultGrid.pageNum;
      this.pageSize = this.$store.state.ConsultGrid.pageSize;
    },
    initList() {
      let querydata = {};
      querydata.pageTotal = this.pageTotal;
      querydata.pageNum = this.pageNum;
      querydata.pageSize = this.pageSize;
      this.queryConsultAction(querydata).then(data => {
        this.data1 = data;
        this.setPage();
      });
    },
    pageChange(index) {
      console.log("pageChange" + index);
    }
  },
  created() {
    console.log("consult-grid created");
    this.initList();
  }
};
</script>
