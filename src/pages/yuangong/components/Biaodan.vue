<template>
  <div>
    <kuangia-header></kuangia-header>
    <kuangia-zuoce></kuangia-zuoce>
    <div class="top11"><b>首页</b> > 基本信息 </div>
    <div class="srk" style="width: 200px;">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div class="j">
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="j">
      <el-button type="primary" icon="el-icon-caret-bottom">高级搜索</el-button>
    </div>
    <div class="j1">
      <el-button type="success" icon="el-icon-sort-up">导入数据</el-button>
    </div>
    <div class="j">
      <el-button type="success" icon="el-icon-sort-down">导出数据</el-button>
    </div>
    <div class="j">
      <el-button type="primary" icon="el-icon-plus">添加员工</el-button>
    </div>
    <div class="biao">
      <el-main>
        <el-table :data="tableData" style="width: 100%" max-height="500">
          <el-table-column fixed prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column fixed prop="gender" label="性别" width="100">
          </el-table-column>
          <el-table-column prop="nation" label="民族" width="100">
          </el-table-column>
          <el-table-column prop="phone" label="电话号码" width="130">
          </el-table-column>
          <el-table-column prop="id" label="身份证号码" width="180">
          </el-table-column>
          <el-table-column prop="mail" label="电子邮件" width="180">
          </el-table-column>
          <el-table-column prop="title" label="职称" width="130">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="300">
            <template slot-scope="scope">
              <!-- <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button> -->
              <el-button size="mini">编辑</el-button>
              <el-button size="mini" type="primary">查看高级资料</el-button>
              <!-- <el-button size="mini" type="danger">删除</el-button> -->
              <el-button type="danger" size="mini" @click="open">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <div class="dibu">
        <el-button type="danger" disabled>危险按钮</el-button>
      </div>
      <div class="ddbu1">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import KuangiaHeader from '@/pages/kuangia/components/Header'
  import KuangiaZuoce from '@/pages/kuangia/components/Zuoce'
  export default {

    name: 'YuangongBiaodan',
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
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            gender: '男',
            nation: '汉',
            phone: '18569107125',
            id: '430723199808234613',
            mail: '1715756251@qq.com',
            title: '教授',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      }
    }
  }
</script>

<style>
  .biao {
    float: left;
    width: 1320px;
    margin-left: 200px;
  }

  .top11 {
    float: left;
    width: 1200px;
    margin-left: 220px;
    margin-top: 20px;
  }

  .srk {
    margin-top: 20px;
    float: left;
    margin-left: 25px;
    margin-left: 220px;
  }

  .j {
    float: left;
    margin-top: 20px;
    margin-left: 15px;
  }

  .j1 {
    float: left;
    margin-top: 20px;
    margin-left: 460px;
  }

  .dibu {
    float: left;
    margin-left: 15px;
  }
  .ddbu1{
   float: right;
   margin-right: 10px;
  }
</style>
