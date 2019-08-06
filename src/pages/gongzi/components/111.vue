<template>
  <div>
    <kuangia-header></kuangia-header>
    <kuangia-zuoce></kuangia-zuoce>
    <div class="jia1">
      <div class="gz_top"><b>首页</b> > 基本信息 </div>
      <br />
      <div class="gz_j1">
        <el-button type="primary" icon="el-icon-plus" size="small">添加菜单</el-button>
        <div class="gz_j11">
          <el-button type="success" icon="el-icon-refresh" size="small"></el-button>
        </div>
      </div>
      <div>
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="120">
            </el-table-column>
            <el-table-column prop="date" label="账套名称" width="120">
            </el-table-column>
            <el-table-column prop="name" label="基本工资" width="80">
            </el-table-column>
            <el-table-column prop="name" label="交通补助" width="80">
            </el-table-column>
            <el-table-column prop="name" label="午餐补助" width="80">
            </el-table-column>
            <el-table-column prop="name" label="启动时间" width="120">
            </el-table-column>
            <el-table-column label="地址" width="120">
              <el-table-column prop="province" label="省份" width="60">
              </el-table-column>
              <el-table-column prop="city" label="市区" width="60">
              </el-table-column>
            </el-table-column>
            <el-table-column label="地址" width="120">
              <el-table-column prop="province" label="省份" width="60">
              </el-table-column>
              <el-table-column prop="city" label="市区" width="60">
              </el-table-column>
            </el-table-column>
            <el-table-column label="地址" width="120">
              <el-table-column prop="province" label="省份" width="60">
              </el-table-column>
              <el-table-column prop="city" label="市区" width="60">
              </el-table-column>
            </el-table-column>
              <el-table-column label="地址" width="280">
              <el-table-column prop="province" label="省份" width="130">
              </el-table-column>
              <el-table-column prop="city" label="市区" width="130">
                 <el-button type="danger" size="mini" @click="open">删除</el-button>
              </el-table-column>
            </el-table-column>

            </el-table-column>
          </el-table>
        </template>
      </div>
      <div style="margin-top: 10px;"><el-button type="danger" disabled>危险按钮</el-button></div>
    </div>
  </div>
</template>

<script>
  import KuangiaHeader from '@/pages/kuangia/components/Header'
  import KuangiaZuoce from '@/pages/kuangia/components/Zuoce'
  export default {
    name: 'gongzi111',
    components: {
      KuangiaHeader,
      KuangiaZuoce
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
     data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }

</script>

<style>
  .jia1 {
    float: left;
    margin-left: 220px;
  }

  .gz_top {
    float: left;
    margin-top: 10px;
  }

  .gz_j1 {
    float: left;
    width: 1220px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .gz_j11 {
    float: right;
  }
</style>
