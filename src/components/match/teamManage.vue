<template>
    <div id="teamManage">
        <el-form :model="formNewAd" label-width="90px"  label-position="left">
            <el-form-item label="快速检索:">
                <div class="searchTeam">
                    <el-select v-model="formTeam.type" placeholder="请选择">
                        <el-option v-for="item in typeOptions" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <el-select v-model="formTeam.game" placeholder="请选择">
                        <el-option v-for="item in gameOptions" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <el-input v-model="formTeam.content" placeholder="请输入关键字"></el-input>
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
                        label="战队ID"
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
                        label="国家"
                        width="120">
                    <div>
                        <span style="margin-left: 10px">{{ row.nation }}</span>
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="战队名">
                    <div class="name-wrapper">
                        <span>{{ row.name }}</span>
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="LOGO"
                        width="200">
                    <div class="img-wrapper">
                        <img :src="row.src">
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="选手操作"
                        width="115">
                    <router-link :to="{name:'addMember',query:{name:row.name}}">
                        <div class="up-wrapper">
                            成员管理
                        </div>
                    </router-link>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="游戏"
                        width="120">
                    <div>
                        <span style="margin-left: 10px">{{ row.game }}</span>
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
            typeOptions:[
                {
                    value:'1',
                    label:'团队'
                },
                {
                    value:'2',
                    label:'个人'
                }
            ],
            gameOptions:[
                {
                    value: 'Dota2',
                    label: 'Dota2'
                },{
                    value: '英雄联盟',
                    label: '英雄联盟'
                }, {
                    value: '炉石传说',
                    label: '炉石传说'
                }, {
                    value: '风暴英雄',
                    label: '风暴英雄'
                }, {
                    value: 'CS:GO',
                    label: 'CS:GO'
                }, {
                    value: '守望先锋',
                    label: '守望先锋'
                }, {
                    value: '星际争霸2',
                    label: '星际争霸2'
                }, {
                    value: '球球大作战',
                    label: '球球大作战'
                }
            ],
            formTeam: {
                type:'',
                game:'',
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
              nation: '中国',
              name: '战队11111111',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: '英雄联盟'
            }, {
              id: '2',
              nation: '中国',
              name: '战队222222222222222',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: '炉石传说'
            }, {
              id: '7',
              nation: '中国',
              name: '战队3333333333333333',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: '星际争霸2'
            }, {
              id: '4',
              nation: '中国',
              name: '战队44444444444444444444',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: 'DOTA2'
            }, {
              id: '3',
              nation: '中国',
              name: '战队55555555555555555555555555555555555555555',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: 'CS:GO'
            }, {
             id: '6',
              nation: '中国',
              name: '战队6666666666666666666666666666666666666666',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: '球球大作战'
            }, {
              id: '1',
              nation: '中国',
              name: '战队7777777777777777777777777777777777777777777777',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: '英雄联盟'
            }, {
              id: '8',
              nation: '中国',
              name: '战队88888888888888888888888888888888888888888888888888888',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: '英雄联盟'
            }, {
              id: '9',
              nation: '中国',
              name: '战队999999999999999999999999999999999999999999999',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: '英雄联盟'
            }, {
              id: '10',
              nation: '中国',
              name: '战队101010101010101010101010101010101010101010101010101010',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: '球球大作战'
            }, {
              id: '11',
              nation: '中国',
              name: '战队1111111111111111111111111111111111111111111111111111111111',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: '球球大作战'
            }, {
             id: '12',
              nation: '中国',
              name: '战队12121212121212121212121212121212121212121212121212121212121',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: '球球大作战'
            }, {
              id: '13',
              nation: '中国',
              name: '战队1313131313131313131313131313131313131313131313131313131313',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: '球球大作战'
            }, {
              id: '14',
              nation: '中国',
              name: '战队141414141414141414141414141414141414141414141414',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: 'DOTA2'
            }, {
             id: '15',
              nation: '中国',
              name: '战队151515151515151515151515151515151515151515151515151515151515',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: 'DOTA2'
            }, {
              id: '16',
              nation: '中国',
              name: '战队1616161616161616161616161616161616161616161616161616161616161616161616',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: 'DOTA2'
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
    @input-width:40%;
    @table-minHeight:500px;
    @select-width:150px;
    .searchTeam{
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
    #teamManage{
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