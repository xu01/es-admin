<template>
  <div id="app">

    <header>
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <img src="./assets/logo.png" class="logo">
        <router-link  to="/news/add">
          <el-menu-item index="1">内容中心</el-menu-item>
        </router-link>
        <router-link to="/recommend/slide">
          <el-menu-item index="2">推荐中心</el-menu-item>
        </router-link>
        <router-link to="/match/teamAdd">
          <el-menu-item index="3">赛事中心</el-menu-item>
        </router-link>
        <router-link to="/guess/all">
        <el-menu-item index="4">竞猜中心</el-menu-item>
        </router-link>
        <router-link to="/welcome">
        <el-menu-item index="5">设置</el-menu-item>
        </router-link>
      </el-menu>
    </header>

    <div class="HolyGrail-body">
      <leftSidebar class="sidebar" :display="msg" :active="number"></leftSidebar>
      <router-view class="main" :display="msg"></router-view>
    </div>
    <footer class="footer">footer</footer>
  </div>
</template>

<script>
import leftSidebar from './components/leftSidebar.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: '1',
      number: 1
    }
  },
  components:{
    leftSidebar
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.msg=key;
        this.number=1;
      }
  }
}
</script>

<style lang="less">
  @font-family-Yahei:"Microsoft Yahei";
  @color:blue;
  .h(@h){
    height:@h;
  }
  @box-shadow-X:0 2px 2px rgba(0,0,0,.25),inset 0 2px 0 rgba(255,255,255,.15);
  @box-shadow-Y:2px 0 2px rgba(0,0,0,.25),inset 0 2px 0 rgba(255,255,255,.15);
  @linear:linear-gradient(to bottom,#324057,#055db5);
  *{margin:0;padding:0 ;font-family: @font-family-Yahei;}
  a{text-decoration: none;display:block;}
  li,ul{list-style: none}
#app {
  font-family: @font-family-Yahei;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #fff;
  .HolyGrail-body{
    display: flex;
    flex: 1;
  }
  .sidebar{
    background: #eff2f7;
    flex:0 0 12em;
    -webkit-box-shadow: @box-shadow-Y;
    -moz-box-shadow: @box-shadow-Y;
    box-shadow: @box-shadow-Y;
  }
  header{
    position: relative;z-index: 10;
    ul{
      padding-left:12em;background:@linear;
      -webkit-box-shadow: @box-shadow-X;
      -moz-box-shadow: @box-shadow-X;
      box-shadow: @box-shadow-X;
      .el-menu-item{
        color:#F0F0F0;
      }
      .is-active{
        color:#20a0ff;
      }
    }
    .logo{
      position: absolute;
      height: 100%;left:50px;
    }
    .el-menu-item:hover{
      border-bottom: 5px solid #20a0ff;
    }
  }
  .main{
    margin-left:6%;margin-top:40px;
  }
  .footer{
    background: #99a9bf;
  }
}

</style>
