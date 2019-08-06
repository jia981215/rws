<template>
	<div>
		<kuangia-header></kuangia-header>
		<kuangia-zuoce></kuangia-zuoce>
		<div class="top">首页 > 工资账套管理</div>
		<div class="ztdl">
			<el-table :data="tableData" style="width: 100%">
				
				<el-table-column 
				prop="date1" 
				label="账套名称" 
				width="120">
				</el-table-column>
				
				 <el-table-column
					prop="name1"
					label="基本工资"
					width="80">
				</el-table-column>
				
				 <el-table-column
					prop="name2"
					label="交通补助"
					width="80">
				</el-table-column>
				
				 <el-table-column
					prop="name3"
					label="午餐补助"
					width="80">
				</el-table-column>
				
				 <el-table-column
					prop="name4"
					label="奖金"
					width="70">
				</el-table-column>
				
				
				  <el-table-column 
				  prop="date" 
				  label="启用日期" 
				  width="100">
				  </el-table-column>
				
				 
				  
				  <el-table-column label="养老金">
					<el-table-column
					  prop="province"
					  label="比率"
					  width="70">
					</el-table-column>
					<el-table-column
					  prop="city"
					  label="基数"
					  width="70">
					</el-table-column>					
			      </el-table-column>
				  
				   <el-table-column label="医疗保险">
					<el-table-column
					  prop="province"
					  label="比率"
					  width="70">
					</el-table-column>
					<el-table-column
					  prop="city"
					  label="基数"
					  width="70">
					</el-table-column>					
				  </el-table-column>
				  
				  <el-table-column label="公益金">
					<el-table-column
					  prop="province"
					  label="比率"
					  width="70">
					</el-table-column>
					<el-table-column
					  prop="city"
					  label="基数"
					  width="70">
					</el-table-column>					
				  </el-table-column>
				  
				  <el-table-column label="操作">
						<el-table-column
						  prop="province3"
						  label="编辑"
						  width="70">
						  <template slot-scope="scope">
						  <!-- <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button> -->
						  <el-button size="mini">编辑</el-button>				  
						  </template>
						</el-table-column>
						<el-table-column
						  prop="city4"
						  label="删除"
						  width="70">
						  <template slot-scope="scope">
						  <el-button type="danger" size="mini" @click="open">删除</el-button>
						  </template>
						</el-table-column>					
				  </el-table-column>

					
				
            </el-table>
		</div>
	</div>
</template>

<script>
	import KuangiaHeader from '@/pages/kuangia/components/Header'
	import KuangiaZuoce from '@/pages/kuangia/components/Zuoce'
	export default {	
		  name: 'Ztglztgl',
		  components:{
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
				  date1: '市场部工资账套',
				  name1: '9000',
				  name2: '500',
				  name3:'800',
				  name4:'4000',
				  date:'2018-01-24',
				  province:'0.7',
				  city:'2000',
				  province3:'',
				  city4:'',
				}, {
				  date1: '人事部工资账套',
				  name1: '2000',
				  name2: '1000',
				  name3:'400',
				  name4:'2000',
				  date:'2018-01-01',
				  province:'0.7',
				  city:'2000',
				  province3:'',
				  city4:'',
				}, {
				  date1: '运维部工资账套',
				  name1: '10000',
				  name2: '500',
				  name3:'500',
				  name4:'3000',
				  date:'2018-01-25',
				  province:'0.7',
				  city:'4000',
				  province3:'',
				  city4:'',
				}]
			  }
            }
		  
	}
</script>

<style>	
.top{
	font-size:14px ;
	margin-left: 220px;
	margin-top: 20px;
	color: #2c3e50;
}
.ztdl{
	margin-left: 220px;
	margin-top: 30px;
	width: 1120px;
	height: 200px;
}
</style>
