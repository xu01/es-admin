<template>
    <div id="addMember">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">{{title}}</div>
            </el-col>
        </el-row>
        <el-button type="info" style="margin-bottom:20px;">添加选手</el-button>
        <div class="table">
            <el-table
                    :data="adList"
                    border>
                <el-table-column
                        inline-template
                        label="选手ID"
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
                        label="选手姓名"
                        width="120">
                    <div>
                        <span style="margin-left: 10px">{{ row.name }}</span>
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="选手外号">
                    <div class="name-wrapper">
                        <span>{{ row.nickName }}</span>
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="头像"
                        width="200">
                    <div class="img-wrapper">
                        <img :src="row.src">
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="战队">
                    <div class="up-wrapper">
                        {{title}}
                    </div>
                </el-table-column>
                <el-table-column
                        inline-template
                        label="游戏名"
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
            startEdit: false,
            title:'123',
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
        editMember(name){
            if(name){
                this.title=name;
            }
        },
        getData(){
            this.tableData=[{
              id: '5',
              name: '中国',
              nickName: 'oooooooo',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: '英雄联盟'
            }, {
              id: '2',
              name: '中国',
              nickName: 'iiiiiiii',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: '炉石传说'
            }, {
              id: '7',
              name: '中国',
              nickName: 'nnnnnnnnnnnnn',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: '星际争霸2'
            }, {
              id: '4',
              name: '中国',
              nickName: 'bbbbbbbbbbb',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: 'DOTA2'
            }, {
              id: '3',
              name: '中国',
              nickName: 'mmmmmmmmmmmm',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: 'CS:GO'
            }, {
             id: '6',
              name: '中国',
              nickName: 'kkkkkkk',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: '球球大作战'
            }, {
              id: '1',
              name: '中国',
              nickName: 'cccccxxx',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: '英雄联盟'
            }, {
              id: '8',
              name: '中国',
              nickName: 'hhhhhhh',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: '英雄联盟'
            }, {
              id: '9',
              name: '中国',
              nickName: 'bbbbbbbbbb',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: '英雄联盟'
            }, {
              id: '10',
              name: '中国',
              nickName: 'ccccccccc',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: '球球大作战'
            }, {
              id: '11',
              name: '中国',
              nickName: 'xxxxxxxxxx',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: '球球大作战'
            }, {
             id: '12',
              name: '中国',
              nickName: 'tttttt',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: '球球大作战'
            }, {
              id: '13',
              name: '中国',
              nickName: 'zzzzzzz',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: '球球大作战'
            }, {
              id: '14',
              name: '中国',
              nickName: 'yyyyy',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161215/1481792169061.jpg",
              game: 'DOTA2'
            }, {
             id: '15',
              name: '中国',
              nickName: 'xxxxxx',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161210/1481365426831.png",
              game: 'DOTA2'
            }, {
              id: '16',
              name: '中国',
              nickName: 'abc',
              src: "http://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20161207/1481090378796.jpg",
              game: 'DOTA2'
            }]
        }
    },
    created(){
        this.getData();
        this.totalAd=this.tableData.length;
        this.getPageData(this.currentPage,this.pageSize);
        this.editMember(this.$route.query.name);
    },
    mounted(){
        console.log(this.$route.query.name);
    }
}
</script>
<style lang="less">
    @input-width:40%;
    @table-minHeight:500px;
    @select-width:150px;
    #addMember{
        width:100%;
        .el-row {
            width:90%;
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .grid-content {
            border-radius: 4px;
            min-height: 36px;
            line-height:36px;
            padding-left:20px;
        }
        .el-col {
            border-radius: 4px;
        }
        .bg-purple-dark {
            background: #99a9bf;
        }
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