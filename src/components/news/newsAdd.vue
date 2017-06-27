<template>
    <div id="newsAdd">
        <el-form :model="formAddNews" label-width="130px"  label-position="left">
            <el-form-item label="新闻标题:">
                <el-input v-model="formAddNews.title" placeholder="新闻标题"></el-input>
            </el-form-item>
            <el-form-item label="作者:">
                <el-input v-model="formAddNews.author" value="阿里体育" placeholder="请输入作者"></el-input>
            </el-form-item>
            <el-form-item label="新闻简介:">
                <el-input type="textarea" v-model="formAddNews.desc" :rows=5></el-input>
            </el-form-item>
            <el-form-item label="是否置顶:">
                <el-select v-model="formAddNews.top" placeholder="请选择">
                    <el-option v-for="item in topOptions" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标签:">
                <el-input v-model="formAddNews.tag" placeholder="新闻标签，多个请使用半角逗号隔开"></el-input>
            </el-form-item>
            <el-form-item label="缩略图:">
                <div style="width:350px;margin-bottom:20px">
                    <el-input v-model="formAddNews.fileList[0].name"></el-input>
                </div>
                <el-upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        type="drag"
                        :thumbnail-mode="true"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :default-file-list="formAddNews.fileList"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">建议200x150</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="相关新闻或选手:">
                <el-button type="danger"  @click="openDialog">选择战队</el-button>
                <el-button type="primary" @click="openSelectPlayer">选择选手</el-button><br>
                <el-tag
                        v-for="tag in selectedTeam"
                        :closable="true"
                        :key="tag"
                        :close-transition="false"
                        @close="closeTeamTag(tag)"
                >
                    {{tag.name}}
                </el-tag>
                <el-tag
                        v-for="tag in selectedPlayer"
                        :closable="true"
                        type="gray"
                        :key="tag"
                        :close-transition="false"
                        @close="closePlayerTag(tag)"
                >
                    {{tag.name}}
                </el-tag>
            </el-form-item>
            <el-form-item label="是否包含视频:">
                <el-select v-model="formAddNews.top" placeholder="请选择">
                    <el-option v-for="item in hasVideoOptions" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="优酷视频ID:">
                <el-input v-model="formAddNews.videoID" placeholder="优酷视频ID"></el-input>
            </el-form-item>
            <el-form-item label="优酷视频时长(秒):">
                <div style="width:350px;margin-bottom:20px" class="videoTime">
                    <el-input v-model="formAddNews.videoTime" placeholder="请填写优酷视频时长秒数">
                        <el-button type="primary" slot="append">获取</el-button>
                </el-input>
                </div>
            </el-form-item>
            <el-form-item label="新闻内容:">
                <UEditor :display="msg" :news="formAddNews.content"></UEditor>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
        <el-dialog title="选择战队" v-model="dialogTableVisible" size="large">
            <selectTeam :selectedTeam="selectedTeam"></selectTeam>
        </el-dialog>
        <el-dialog title="选择选手" v-model="dialogPlayerVisible" size="large">
            <selectPlayer :selectedPlayer="selectedPlayer"></selectPlayer>
        </el-dialog>
    </div>
</template>
<script>
import UEditor from './../UEditor.vue';
import selectPlayer from './../selectPlayer.vue';
import selectTeam from './../selectTeam.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: '1',
      topOptions: [{
          value: '1',
          label: '是'
        }, {
          value: '2',
          label: '否'
        }],
      hasVideoOptions: [{
          value: '1',
          label: '是'
        }, {
          value: '2',
          label: '否'
        }],
      formAddNews: {
          title: '',
          author: '',
          desc: '',
          tag:'',
          top: '',
          fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
          hasVideo: '',
          videoID: '',
          videoTime: '',
          content: ''
      },
      teamData: [],
      teamDataView: [],
      selectedTeam: [],
      selectedPlayer: [],
      dialogTableVisible: false,
      dialogPlayerVisible: false,
      formLabelWidth: '120px',
      radio: '1'
    }
  },
  components:{
    UEditor,
    selectPlayer,
    selectTeam
  },
  methods:{
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
    },
    onSubmit() {
        alert('submit!');
    },
    closeTeamTag(tag) {
        this.selectedTeam.splice(this.selectedTeam.indexOf(tag), 1);
    },
    closePlayerTag(tag) {
        this.selectedPlayer.splice(this.selectedTeam.indexOf(tag), 1);
    },
    openDialog(){
        this.dialogTableVisible = true;
        this.teamDataView=this.teamData;
    },
    openSelectPlayer(){
        this.dialogPlayerVisible = true;
    },
    editNews(id){
        if(id==1){
            this.formAddNews={
                      title: '标题11111111',
                      author: 'No.1',
                      desc: '这是一个测试新闻1',
                      top: '1',
                      fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                      hasVideo: '1',
                      videoID: '8888888',
                      videoTime: '13:50',
                      content: '这是一个测试新闻1，内容省略'
                    }
        }
    }
  },
  created(){
    this.$root.eventHub.$on('tipPlayer', (playerData,visible) => {
        var arr1=[];
        for(var i=0;i<playerData.length;i++){
            if(this.selectedPlayer.includes(playerData[i])==false){
                arr1.push(playerData[i]);
            }
        }
        this.selectedPlayer=this.selectedPlayer.concat(arr1);
        this.dialogPlayerVisible=visible;
    });
    this.$root.eventHub.$on('tipTeam',(teamData,visible) => {
        var arr=[];
        for(var i=0;i<teamData.length;i++){
            if(this.selectedTeam.includes(teamData[i])==false){
                arr.push(teamData[i]);
            }
        }
        this.selectedTeam=this.selectedTeam.concat(arr);
        this.dialogTableVisible = false;
    });
    this.editNews(this.$route.params.id);
  },
  mounted(){

  },
  destroyed () {
    this.$root.eventHub.$off('tipPlayer');
    this.$root.eventHub.$off('tipTeam');
    UE.getEditor('content').destroy();
  }
}
</script>
<style lang="less">
    @input-width:78%;
    @select-width:150px;
    #newsAdd{
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