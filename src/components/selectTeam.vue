<template>
    <div id="selectTeam">
        <el-form :model="teamForm">
            <div class="search">
                <el-form-item label="快速检索：" :label-width="formLabelWidth">
                    <el-select v-model="teamForm.type" clearable placeholder="请选择团队/个人">
                        <el-option
                                v-for="item in teamForm.option1"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="teamForm.game" clearable placeholder="请选择游戏">
                        <el-option
                                v-for="item in teamForm.option2"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model="teamForm.keyword" auto-complete="off" placeholder="请输入关键字"></el-input>
                    <el-button type="primary" @click="search(teamForm.type,teamForm.game,teamForm.keyword)">搜 索</el-button>
                    <el-button type="success" v-on:click="tipTeam(multipleSelection,close)">确 定</el-button>
                </el-form-item>
            </div>
        </el-form>
        <el-table
                :data="teamDataView"
                border
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    label="战队ID"
                    prop="id"
                    sortable
                    width="120">
            </el-table-column>
            <el-table-column
                    inline-template
                    label="LOGO"
                    width="120">
                <img :src="row.logo" class="logo">
            </el-table-column>
            <el-table-column
                    inline-template
                    label="国家"
                    width="120">
                <img :src="row.nation" class="nation">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="战队名"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="game"
                    label="游戏"
                    width="120">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    name: 'selectTeam',
    props: ['selectTeam'],
    data() {
      return {
        close: false,
        teamData: [],
        teamDataView: [],
        multipleSelection: [],
        teamForm: {
          name: '',
          game: '',
          keyword: '',
          type: [],
          resource: '',
          desc: '',
          option1: [{
              value: 'all',
              label: '全部'
            },{
              value: 'team',
              label: '团队'
            }, {
              value: 'person',
              label: '个人'
            }],
          option2: [{
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
            }]
        },
        formLabelWidth: '120px',
        radio: '1'
      };
    },
    methods:{
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        search(type,game,keyword){
            if(keyword&&keyword!=''){
                var arr=[];
                for(var i=0;i<this.teamData.length;i++){
                    if(this.teamData[i].name.toLowerCase().indexOf(keyword.toLowerCase())!=-1){
                        console.log(this.teamData[i].name)
                        arr.push(this.teamData[i]);
                    }
                }
                this.teamDataView=arr;
            }else if(keyword==''&&game==''&&type==''){
                this.teamDataView=this.teamData;
            }else if(keyword==''&&game!=''){
                var arr=[];
                for(var i=0;i<this.teamData.length;i++){
                    if(this.teamData[i].game==game){
                        arr.push(this.teamData[i]);
                    }
                }
                this.teamDataView=arr;
            }else{
                console.log(2)
            }
        },
        tipTeam(data){
            this.$root.eventHub.$emit('tipTeam', data)
        },
        getTeamData(){
            this.teamData=[{
              id: '19',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471922295617.png',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: '老干妈',
              game: 'Dota2'
            }, {
              id: '04',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471922149881.png',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: 'FNATIC',
              game: '英雄联盟'
            }, {
              id: '03',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471920629057.jpg',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: '老干爹',
              game: '英雄联盟'
            }, {
              id: '02',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471922295617.png',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: '棒子A',
              game: '星际争霸2'
            }, {
              id: '11',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471922149881.png',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: '棒子B',
              game: '炉石传说'
            }, {
              id: '10',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471920629057.jpg',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: '棒子C',
              game: '守望先锋'
            }]
        }
    },
    created(){
      this.teamData=this.selectTeam;
      this.getTeamData();
      this.teamDataView=this.teamData;
    }
  };
</script>