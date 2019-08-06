<template>
	<div>
		<kuangia-header></kuangia-header>
		<kuangia-zuoce></kuangia-zuoce>
		<div class="top">首页 > 基础信息设置</div>
		<div style="margin-left: 220px; margin-top: 20px;">
			<template>
			  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
				  
				  
				<el-tab-pane label="用户管理" name="first">
					<el-input placeholder="请输入部门名称搜索部门..." prefix-icon="el-icon-search" v-model="input1"></el-input>
					<el-tree
					  :data="data"
					  node-key="id"
					  default-expand-all
					  @node-drag-start="handleDragStart"
					  @node-drag-enter="handleDragEnter"
					  @node-drag-leave="handleDragLeave"
					  @node-drag-over="handleDragOver"
					  @node-drag-end="handleDragEnd"
					  @node-drop="handleDrop"
					  draggable
					  :allow-drop="allowDrop"
					  :allow-drag="allowDrag">
					</el-tree>
				</el-tab-pane>
				
				
				<el-tab-pane label="部门管理" name="second">
					<template>
					  <el-table
						:data="tableData"
						style="width: 100%">
						<el-table-column
						  label="编号"
						  width="180">
						  <template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.address }}</span>
						  </template>
						</el-table-column>
						
						<el-table-column
						  label="职位管理"
						  width="180">						  
						  <template slot-scope="scope">
							  <span style="margin-left: 10px">{{ scope.row.name }}</span>							
						  </template> 
						</el-table-column>
						
						<el-table-column
						  label="创建时间"
						  width="180">						  
						  <template slot-scope="scope">
							  <span style="margin-left: 10px">{{ scope.row.date }}</span>							
						  </template> 
						</el-table-column>
						
						<el-table-column label="操作">
						  <template slot-scope="scope">
							<el-button
							  size="mini"
							  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button
							  size="mini"
							  type="danger"
							  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						  </template>
						</el-table-column>
					  </el-table>
					</template>
				</el-tab-pane>
				
				
				
				<el-tab-pane label="职称管理" name="third">
					<template>
					  <el-table
						:data="tableData"
						style="width: 100%">
						<el-table-column
						  label="编号"
						  width="180">
						  <template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.address }}</span>
						  </template>
						</el-table-column>
						
						<el-table-column
						  label="职位名称"
						  width="180">						  
						  <template slot-scope="scope">
							  <span style="margin-left: 10px">{{ scope.row.name }}</span>							
						  </template> 
						</el-table-column>
						
						<el-table-column
						  label="职位级别"
						  width="180">						  
						  <template slot-scope="scope">
							  <span style="margin-left: 10px">{{ scope.row.jibie }}</span>							
						  </template> 
						</el-table-column>
						
						<el-table-column
						  label="创建时间"
						  width="180">						  
						  <template slot-scope="scope">
							  <span style="margin-left: 10px">{{ scope.row.date }}</span>							
						  </template> 
						</el-table-column>
						
						<el-table-column label="操作">
						  <template slot-scope="scope">
							<el-button
							  size="mini"
							  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button
							  size="mini"
							  type="danger"
							  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						  </template>
						</el-table-column>
					  </el-table>
					</template>
				</el-tab-pane>
				
				
				<el-tab-pane label="奖惩规则" name="fourth">奖惩规则</el-tab-pane>
				
				
				<el-tab-pane label="权限组" name="fourth1" style="width: 500px;">
					<el-collapse v-model="activeNames" @change="handleChange">
						<el-collapse-item title="一致性 Consistency" name="1">
							<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
							<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
						</el-collapse-item>
						<el-collapse-item title="反馈 Feedback" name="2">
							<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
							<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
						</el-collapse-item>
						<el-collapse-item title="效率 Efficiency" name="3">
							<div>简化流程：设计简洁直观的操作流程；</div>
							<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
							<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
						</el-collapse-item>
						<el-collapse-item title="可控 Controllability" name="4">
							<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
							<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
						</el-collapse-item>
					</el-collapse>
				</el-tab-pane>
				
			  </el-tabs>
			</template>
		</div>
	</div>
</template>

<script>
	import KuangiaHeader from '@/pages/kuangia/components/Header'
	import KuangiaZuoce from '@/pages/kuangia/components/Zuoce'
	export default {	
		  name: 'Jcxxszjcxxsz',
		  components:{
		  	  KuangiaHeader,
			  KuangiaZuoce
		  },
		   data() {
			  return {
				data: [{
					  id: 1,
					  label: '一级 1',
					  children: [{
						id: 4,
						label: '二级 1-1',
						children: [{
						  id: 9,
						  label: '三级 1-1-1',
							  children: [{
								id: 9,
								label: '四级 1-1-1'
							  },
							  // ----
							  {
							  	 id: 2,
							  	label: '四级2-1',
							  	children: [{
							  		id: 2,
							  		label: '五级2-1',
							  		children: [{
							  			id: 5,
							  			label: '六级 2-1'
							  		}]
							  	},
								{
									id: 5,
									label: '五级 2-1'
								},
								{
									id: 2,
									label: '五级2-1',
									children: [{
										id: 2,
										label: '六级2-1',
										children: [{
											id: 5,
											label: '七级 2-1'
										}]
									}]
								}]
							  },
							  // ----
							  {
							  	id: 9,
							  	label: '四级 1-1-1'
							  },
							  {
							  	id: 9,
							  	label: '四级 1-1-1'
							  }]
						}]
					  }]					  
					}],					
				defaultProps: {
				  children: 'children',
				  label: 'label'
				},
				
				tableData: [{
					  date: '2016-05-02',
					  name: '技术总监',
					  address: '29',
					  jibie:'正高级',
					}, {
					  date: '2016-05-04',
					  name: '运营总监',
					  address: '30',
					  jibie:'副高级',
					}, {
					  date: '2016-05-01',
					  name: '市场总监',
					  address: '31',
					  jibie:'初级',
					}, {
					  date: '2016-05-03',
					  name: '总经理',
					  address: '32',
					  jibie:'中级',
				    },
					 {
					  date: '2016-05-03',
					  name: '研发工程师',
					  address: '33',
					  jibie:'初级',
					},
					 {
					  date: '2016-05-03',
					  name: '运维工程师',
					  address: '34',
					  jibie:'初级',
					}],
					
					activeNames: ['1']
				
             };
            },
			
			methods: {
				  handleClick(tab, event) {
					console.log(tab, event);
				  },
				  handleDragStart(node, ev) {
					console.log('drag start', node);
				  },
				  handleDragEnter(draggingNode, dropNode, ev) {
					console.log('tree drag enter: ', dropNode.label);
				  },
				  handleDragLeave(draggingNode, dropNode, ev) {
					console.log('tree drag leave: ', dropNode.label);
				  },
				  handleDragOver(draggingNode, dropNode, ev) {
					console.log('tree drag over: ', dropNode.label);
				  },
				  handleDragEnd(draggingNode, dropNode, dropType, ev) {
					console.log('tree drag end: ', dropNode && dropNode.label, dropType);
				  },
				  handleDrop(draggingNode, dropNode, dropType, ev) {
					console.log('tree drop: ', dropNode.label, dropType);
				  },
				  allowDrop(draggingNode, dropNode, type) {
					if (dropNode.data.label === '二级 3-1') {
					  return type !== 'inner';
					} else {
					  return true;
					}
				  },
				  allowDrag(draggingNode) {
					return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
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
</style>
