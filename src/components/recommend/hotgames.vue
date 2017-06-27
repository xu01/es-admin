<template>
    <div id="hotGames">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="填写规则" name="1">
                <div>APP首屏热门比赛,填写比赛id,半角逗号隔开</div>
            </el-collapse-item>
        </el-collapse>
        <el-form label-width="80px"  label-position="left">
            <el-form-item label="比赛id:">
                <el-input v-model="hottags"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="success" @click="onSubmit">提交</el-button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            hottags:'',
            activeNames: ['1']
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        onSubmit() {
            alert('submit!');
        }
    }
}
</script>
<style lang="less">
#hotGames{
    width:60%;
    .el-form{
        position: relative;
        .el-form-item{
            margin-bottom:15px;
        }
    }
    .el-collapse{
        margin-top:-20px;margin-bottom:20px;border-radius: 3px;
        .el-collapse-item__header,.el-collapse-item__content{
            color:red;
        }
    }
}
.slideList{
    margin-bottom:20px;
}
</style>