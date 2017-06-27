<template>
    <div id="AdList">
        <el-form :model="formNewAd" label-width="90px"  label-position="left">
            <el-form-item label="快速检索:">
                <div class="searchAd">
                    <el-select v-model="formNewAd.top" placeholder="请选择">
                        <el-option v-for="item in tagOptions" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <el-input v-model="formNewAd.content" placeholder="请输入关键字"></el-input>
                    <el-button type="danger" @click="onSubmit">搜索</el-button>
                </div>
            </el-form-item>
        </el-form>
        <div class="table">
            <el-table
                    :data="adList"
                    border>
                <el-table-column
                        inline-template
                        label="广告ID"
                        width="85">
                    <div class="id-wrapper">
                        <span v-if="startEdit==false">{{ row.id }}</span>
                        <el-input
                                v-model="row.id"
                                v-if="startEdit==true">
                        </el-input>
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="日期"
                        width="190">
                    <div>
                        <span style="margin-left: 10px">{{ row.date }}</span>
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="标题">
                    <div class="name-wrapper">
                        <span>{{ row.name }}</span>
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="预览图"
                        width="200">
                    <div class="img-wrapper">
                        <img :src="row.src">
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="置顶"
                        width="70">
                    <div class="up-wrapper">
                        <span v-if="row.up==true">是</span><span v-if="row.up==false">否</span>
                    </div>
                </el-table-column>
                <el-table-column
                        :context="_self"
                        inline-template
                        label="操作"
                        width="180">
                    <div>
                        <router-link :to="{ name: 'newsAd', query: { id: row.id }}">
                            <el-button
                                    type="primary"
                                    @click="handleEdit($index, row)">
                                编辑
                            </el-button>
                        </router-link>
                        <el-button
                                type="danger"
                                @click="handleDelete($index, row)">
                            删除
                        </el-button>
                    </div>
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
            <el-button
                    type="success"
                    v-if="startEdit==false"
                    @click="editId()">
                修改权重
            </el-button>
            <el-button
                    type="warning"
                    v-if="startEdit==true"
                    @click="finishEdit()">
                确定修改
            </el-button>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    layout="prev, pager, next"
                    :current-page="1"
                    :page-size="pageSize"
                    :total="totalAd">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tagOptions:[
                {
                    value:'1',
                    label:'头条'
                },
                {
                    value:'2',
                    label:'阿里体育'
                },
                {
                    value:'3',
                    label:'WESG'
                }
            ],
            formNewAd: {
                top:'',
                content:''
            },
            adList:[],
            pageSize:5,
            currentPage:1,
            totalAd:0,
            tableData: [],
            startEdit: false
        }
    },
    methods: {
        onSubmit() {
            alert('search!');
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.currentPage = val;
          console.log(`当前页: ${val}`);
          this.getPageData(this.currentPage,this.pageSize)
        },
        getPageData(pageNum,pageSize){
          this.adList=this.tableData.slice((pageNum-1)*pageSize,pageNum*pageSize);
        },
        editId(){
          this.startEdit=true;
        },
        finishEdit(){
          let repeat='';
          let msg='';
          for(let i=0;i<this.adList.length;i++){
            for(let j=i+1;j<this.adList.length;j++){
                if(this.adList[i].id==this.adList[j].id){
                    repeat+=this.adList[i].id+',';
                }
            }
          }
          if(repeat==''){
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            this.startEdit=false;

          }else{
            msg='重复ID为：'+repeat;
            this.$alert(msg,'ID重复',{
                confirmButtonText: '确定'
            });
          }
        },
        getData(){
            this.tableData=[{
              id: '5',
              date: '2016-12-15 15:14:58',
              name: '标题11111111',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              up: false
            }, {
              id: '2',
              date: '2016-12-17 19:22:58',
              name: '标题222222222222222',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              up: false
            }, {
             id: '7',
              date: '2016-11-15 21:14:00',
              name: '标题3333333333333333',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              up: false
            }, {
              id: '4',
              date: '2016-10-15 17:44:18',
              name: '标题44444444444444444444',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              up: true
            }, {
              id: '3',
              date: '2016-12-17 19:22:58',
              name: '标题55555555555555555555555555555555555555555',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              up: false
            }, {
             id: '6',
              date: '2016-11-15 21:14:00',
              name: '标题66666666666666666666666666666666666666666',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              up: false
            }, {
              id: '1',
              date: '2016-10-15 17:44:18',
              name: '标题7777777777777777777777777777777777777777777777',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              up: true
            }, {
              id: '8',
              date: '2016-12-17 19:22:58',
              name: '标题88888888888888888888888888888888888888888888888888888',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              up: false
            }, {
             id: '9',
              date: '2016-11-15 21:14:00',
              name: '标题9999999999999999999999999999999999999999999999',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              up: false
            }, {
              id: '10',
              date: '2016-10-15 17:44:18',
              name: '标题101010101010101010101010101010101010101010101010101010',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              up: true
            }, {
              id: '11',
              date: '2016-12-17 19:22:58',
              name: '标题11111111111111111111111111111111111111111111111111111111111',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              up: false
            }, {
             id: '12',
              date: '2016-11-15 21:14:00',
              name: '标题12121212121212121212121212121212121212121212121212121212121',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              up: false
            }, {
              id: '13',
              date: '2016-10-15 17:44:18',
              name: '标题1313131313131313131313131313131313131313131313131313131313',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              up: true
            }, {
              id: '14',
              date: '2016-12-17 19:22:58',
              name: '标题141414141414141414141414141414141414141414141414',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              up: false
            }, {
             id: '15',
              date: '2016-11-15 21:14:00',
              name: '标题151515151515151515151515151515151515151515151515151515151515',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              up: false
            }, {
              id: '16',
              date: '2016-10-15 17:44:18',
              name: '标题1616161616161616161616161616161616161616161616161616161616161616161616',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              up: true
            }]
        }
    },
    created(){
        this.getData();
        this.totalAd=this.tableData.length;
        this.getPageData(this.currentPage,this.pageSize);
    }
}
</script>
<style lang="less">
    @input-width:60%;
    @table-minHeight:500px;
    @select-width:150px;
    .searchAd{
        .el-input{
            width:@input-width;float: left;margin-right:10px;
        }
        .el-select{
            float: left;margin-right:10px;
        }
        .el-button{
            padding:10px 25px;float:left;
        }
    }
    #AdList{
        width:100%;
        .el-select,.el-select-dropdown{
            width:@select-width;
            .el-input{
                width:@select-width;
            }
        }
        .img-wrapper{
            img{width:100%;height:100%;display: block;}
        }
        .table{
            min-height:@table-minHeight;
            .id-wrapper{
                text-align: center;
            }
        }
        .el-table{
            width: 90%;
            .cell a{
                float:left;margin-right:20px;
            }
        }
        .block{
            width: 90%;
            .el-button{float:left;margin-top:50px;}
        }
        .el-pagination{
            float:right;margin-top:50px;
        }
    }
</style>