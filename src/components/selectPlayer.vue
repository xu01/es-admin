<template>
    <div id="selectPlayer">
        <el-form :model="playerForm">
            <div class="search">
                <el-form-item label="快速检索：" :label-width="formLabelWidth">
                    <el-select v-model="playerForm.game" clearable placeholder="请选择游戏">
                        <el-option
                                v-for="item in playerForm.option2"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model="playerForm.keyword" auto-complete="off" placeholder="请输入关键字"></el-input>
                    <el-button type="primary" @click="search(playerForm.game,playerForm.keyword)">搜 索</el-button>
                    <el-button type="success" v-on:click="tipPlayer(multipleSelection,close)">确 定</el-button>
                </el-form-item>
            </div>
        </el-form>
        <el-table
                :data="playerDataView"
                border
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    reserve-selection
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="队员ID"
                    sortable
                    width="120">
            </el-table-column>
            <el-table-column
                    inline-template
                    label="头像"
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
                    label="游戏内名称"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="team"
                    label="战队名"
                    width="120">
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
    name: 'selectPlayer',
    props: ['selectedPlayer'],
    data() {
      return {
        close: false,
        playerData: [],
        playerDataView: [],
        multipleSelection: [],
        playerForm: {
          name: '',
          game: '',
          keyword: '',
          resource: '',
          desc: '',
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
        search(game,keyword){
            if(keyword&&keyword!=''){
                var arr=[];
                for(var i=0;i<this.playerData.length;i++){
                    if(this.playerData[i].name.toLowerCase().indexOf(keyword.toLowerCase())!=-1){
                        console.log(this.playerData[i].name)
                        arr.push(this.playerData[i]);
                    }
                }
                this.playerDataView=arr;
            }else if(keyword==''&&game!=''){
                var arr=[];
                for(var i=0;i<this.playerData.length;i++){
                    if(this.playerData[i].game==game){
                        arr.push(this.playerData[i]);
                    }
                }
                this.playerDataView=arr;
            }else{
                this.playerDataView=this.playerData;
            }
        },
        tipPlayer(data){
            this.$root.eventHub.$emit('tipPlayer', data)
        },
        getPlayerData(){
            this.playerData=[{
              id: '10',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471922149881.png',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: '大S',
              team: 'FNATIC',
              game: '英雄联盟'
            }, {
              id: '04',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471922295617.png',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: '若风',
              team: 'WE',
              game: '星际争霸2'
            }, {
              id: '13',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471922149881.png',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: '大D',
              team: 'IG',
              game: '炉石传说'
            }, {
              id: '12',
              logo: 'https://oneimg.oss-cn-hangzhou.aliyuncs.com/xu01_test/20160823/1471920629057.jpg',
              nation: '//testesports.alisports.com/static/common/images/countries/cn.png',
              name: 'Gogoing',
              team: 'LGD',
              game: '守望先锋'
            }]
        }
    },
    created(){
      this.getPlayerData();
      this.playerDataView=this.playerData;
    }
  };
</script>