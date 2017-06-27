<template>
    <div id="leftSidebar">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-if="display==1" router>
            <router-link to="/news/add">
                <el-menu-item index="1"><i class="el-icon-menu"></i>添加新闻</el-menu-item>
            </router-link>
            <router-link to="/news/list">
                <el-menu-item index="2"><i class="el-icon-menu"></i>新闻管理</el-menu-item>
            </router-link>
            <router-link to="/news/tag">
                <el-menu-item index="3"><i class="el-icon-setting"></i>标签管理</el-menu-item>
            </router-link>
            <router-link to="/news/ad">
                <el-menu-item index="4"><i class="el-icon-setting"></i>新增广告</el-menu-item>
            </router-link>
            <router-link to="/news/adlist">
                <el-menu-item index="5"><i class="el-icon-setting"></i>广告管理</el-menu-item>
            </router-link>
        </el-menu>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-if="display==2" router>
            <router-link to="/recommend/slide">
                <el-menu-item index="1"><i class="el-icon-menu"></i>首页轮播管理</el-menu-item>
            </router-link>
            <router-link to="/recommend/slideControl">
                <el-menu-item index="2"><i class="el-icon-menu"></i>首页模块管理</el-menu-item>
            </router-link>
            <router-link to="/recommend/entertainment">
                <el-menu-item index="3"><i class="el-icon-setting"></i>娱乐板块管理</el-menu-item>
            </router-link>
            <router-link to="/recommend/hottags">
                <el-menu-item index="4"><i class="el-icon-setting"></i>热门标签管理</el-menu-item>
            </router-link>
            <router-link to="/recommend/hotgames">
                <el-menu-item index="5"><i class="el-icon-setting"></i>热门比赛管理</el-menu-item>
            </router-link>
        </el-menu>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-if="display==3" router>
            <router-link to="/match/teamAdd">
                <el-menu-item index="1"><i class="el-icon-menu"></i>添加战队</el-menu-item>
            </router-link>
            <router-link to="/match/teamManage">
                <el-menu-item index="2"><i class="el-icon-menu"></i>战队管理</el-menu-item>
            </router-link>
            <el-menu-item index="3"><i class="el-icon-setting"></i>添加赛事</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-setting"></i>赛事管理</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-setting"></i>比赛管理</el-menu-item>
        </el-menu>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-if="display==4" router>
            <router-link to="/guess/all">
                <el-menu-item index="1"><i class="el-icon-menu"></i>赛事竞猜管理</el-menu-item>
            </router-link>
            <el-menu-item index="2"><i class="el-icon-menu"></i>添加娱乐竞猜</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>娱乐竞猜管理</el-menu-item>
        </el-menu>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-if="display==5" router>
            <router-link to="/welcome">
                <el-menu-item index="1"><i class="el-icon-menu"></i>修改密码</el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>


<script>
  export default {
    props:['display','active'],
    data() {
      return {
        startTime: ''
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped>
    #leftSidebar{
        background: #eff2f7;
        ul{width: 12em;}
        li{width: 13.7em;padding-right:44px;}
        .is-active{
            background: #99A9BF;
        }
    }
</style>