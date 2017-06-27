<template>
    <div id="slide">
        <el-collapse>
            <el-collapse-item title="链接填写规则" name="1">
                <div>1.跳转APP赛事详情页 alisportswesg://detail_game?event_id=赛事id</div>
                <div>2.跳转APP比赛详情页 alisportswesg://detail_studio?match_id=比赛id</div>
                <div>3.跳转APP新闻详情页 https://testesports.alisports.com/h5/news/新闻id</div>
                <div>4.h5页 使用正常 http 链接</div>
            </el-collapse-item>
        </el-collapse>
        <div class="slideList" v-for="item in formSlide">
            <el-form :model="item" label-width="80px"  label-position="left">
                <el-form-item label="广告标题:">
                    <el-input v-model="item.title" placeholder="广告标题"></el-input>
                </el-form-item>
                <el-form-item label="链接地址:">
                    <el-input v-model="item.url" placeholder="链接地址url"></el-input>
                </el-form-item>
                <el-form-item label="缩略图:">
                    <div style="width:400px;margin-bottom:10px">
                        <el-input v-model="item.fileList.name"></el-input>
                    </div>
                    <el-upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            type="drag"
                            :thumbnail-mode="true"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :default-file-list="item.fileList"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">建议200x150</div>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="onSubmit">添加</el-button>
                    <el-button type="danger" @click="onSubmit">删除</el-button>
                    <el-button type="warning" @click="onSubmit">向上</el-button>
                    <el-button type="warning" @click="onSubmit">向下</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            formSlide:[
                {
                    title:'',
                    url:'',
                    fileList:[]
                },
                {
                    title:'',
                    url:'',
                    fileList:[]
                }
            ],
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
#slide{
    .el-form{
        position: relative;
        border-bottom:1px dotted #ccc;
        .el-form-item{
            margin-bottom:15px;
        }
        .el-upload{
            position: absolute;
            right: -400px;top:-102px;
        }
        .el-upload__tip{
            padding:0;margin-top:-15px;
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