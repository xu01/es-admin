<template>
    <div id="newAd">
        <el-form :model="formNewAd" label-width="130px"  label-position="left">
            <el-form-item label="广告标题:">
                <el-input v-model="formNewAd.title" placeholder="广告标题"></el-input>
            </el-form-item>
            <el-form-item label="广告商:">
                <el-input v-model="formNewAd.company" placeholder="广告商"></el-input>
            </el-form-item>
            <el-form-item label="广告简介:">
                <el-input type="textarea" v-model="formNewAd.desc" :rows=5></el-input>
            </el-form-item>
            <el-form-item label="是否置顶:">
                <el-select v-model="formNewAd.top" placeholder="请选择">
                    <el-option v-for="item in topOptions" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标签:">
                <el-input v-model="formNewAd.tag" placeholder="广告标签，多个请使用半角逗号隔开"></el-input>
            </el-form-item>
            <el-form-item label="缩略图:">
                <div style="width:350px;margin-bottom:20px">
                    <el-input v-model="formNewAd.fileList[0].name"></el-input>
                </div>
                <el-upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        type="drag"
                        :thumbnail-mode="true"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :default-file-list="formNewAd.fileList"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">建议200x150</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="链接地址:">
                <el-input v-model="formNewAd.url" placeholder="链接地址url"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>

export default {
    data () {
        return {
            topOptions: [{
              value: '1',
              label: '是'
            }, {
              value: '2',
              label: '否'
            }],
            formNewAd: {
                title: '',
                company: '',
                desc: '',
                tag:'',
                top: '',
                fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                url: ''
            }
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
        },
        data(id) {
            console.log(id);
        }
    },
    created(){
        this.data(this.$route.query.id);
    }
}
</script>
<style lang="less">
    @input-width:78%;
    @select-width:150px;
    #newAd{
        width:100%;
        .el-input{
            width:@input-width;
        }
        .el-textarea{
            width:@input-width;
        }
        .el-select,.el-select-dropdown{
            width:@select-width;
            .el-input{
                width:@select-width;
            }
        }
        .el-dragger{
            width: 200px;
            height: 150px;
            i{
                font-size:16px;
                width: 50px;
            }
        }
        .el-dragger__cover__interact .btn:not(:first-child) {
            margin-left: 0px;
        }
        .el-dragger__cover__interact .btn{
            margin-top: 30px;
        }
        .el-upload__tip{
            width: 200px; line-height: 20px;margin-top: -10px; margin-bottom: -10px;
        }
        .videoTime .el-button{
            background: #13CE66;border-color: #13CE66;border-top-left-radius: 0;border-bottom-left-radius: 0;color:#fff;
        }
        .edui-default .edui-toolbar{
            line-height:20px;
        }
        .search{
            .el-select{
                float:left;margin-right:20px;
            }
            .el-input{
                float:left;width:auto;
            }
            .el-button{
                margin-left:20px;
            }
        }
        .logo{
            width: 40px;height:40px;display: block;margin:auto;
        }
        .nation{
            width: 20px;height:12px;display: block;margin:auto;
        }
        .el-tag{
            width: 76px;height: 34px;line-height: 34px;margin:20px 15px 0 0;text-align: center;
        }
    }
</style>