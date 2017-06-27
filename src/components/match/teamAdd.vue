<template>
    <div id="teamAdd">
        <el-form :model="formAddTeam" label-width="130px"  label-position="left">
            <el-form-item label="类型:">
                <el-select v-model="formAddTeam.type" placeholder="请选择">
                    <el-option v-for="item in teamOptions" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="战队全称:">
                <el-input v-model="formAddTeam.name" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="战队简称:">
                <el-input v-model="formAddTeam.nickName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="战队LOGO:">
                <div class="upload">
                    <el-input v-model="formAddTeam.logoName"></el-input>
                    <el-upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        type="drag"
                        :thumbnail-mode="true"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :default-file-list="formAddTeam.fileList"
                    >
                    <i class="el-icon-upload"></i>
                    <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </div>
            </el-form-item>
            <el-form-item label="国家:">
                <el-select v-model="formAddTeam.nation" placeholder="请选择">
                    <el-option v-for="item in nationOptions" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="游戏:">
                <el-select v-model="formAddTeam.game" placeholder="请选择">
                    <el-option v-for="item in gameOptions" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否知名:">
                <el-select v-model="formAddTeam.famous" placeholder="请选择">
                    <el-option v-for="item in famousOptions" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="战队简介:">
                <div class="introduce edtior">
                    <script id="introduce" name="introduce" type="text/plain" style="width:90%;height:400px;"></script>
                </div>
            </el-form-item>
            <el-form-item label="基本资料:">
                <div class="baseData edtior">
                    <script id="baseData" name="baseData" type="text/plain" style="width:90%;height:400px;"></script>
                </div>
            </el-form-item>
            <el-form-item label="所得荣誉:">
                <div class="honor edtior">
                    <script id="honor" name="honor" type="text/plain" style="width:90%;height:400px;"></script>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="success">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import UEditor from './../UEditor.vue'

export default {
  data () {
    return {
      msg: '3',
      formAddTeam: {
        type:'',
        name:'',
        nickName:'',
        logoName:'',
        nation:'',
        game:'',
        famous:'',
        fileList:[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        introduce:'',
        data:'',
        honor:''
      },
      baseData:'',
      teamOptions:[
        {
          value:1,
          label:'团队'
        },
        {
          value:2,
          label:'个人'
        }
      ],
      nationOptions:[],
      gameOptions:[],
      famousOptions:[
        {
          value: '1',
          label: '是'
        }, {
          value: '2',
          label: '否'
        }
      ]
    }
  },
  components:{
    UEditor
  },
  methods:{
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
    }
  },
  mounted () {
    this.getIntroEdtior=UE.getEditor('introduce', {
        UEDITOR_HOME_URL:__dirname +'src/assets/UEditor/',
        // serverUrl: config.ajaxUrl + '/ueditor/jsp/controller.jsp',
        autoHeight: false,
        initialFrameHeight: '250',
        scaleEnabled: false,
        toolbars:[
            ['source','bold','italic', 'underline','strikethrough']
        ],
        serverUrl: '',
        // 服务器统一请求接口路径
        initialContent: this.baseData,
        allHtmlEnabled:true
    }),
    this.getDataEdtior=UE.getEditor('baseData', {
        UEDITOR_HOME_URL:__dirname +'src/assets/UEditor/',
        // serverUrl: config.ajaxUrl + '/ueditor/jsp/controller.jsp',
        autoHeight: false,
        initialFrameHeight: '250',
        scaleEnabled: false,
        toolbars:[
            ['source','bold','italic', 'underline','strikethrough']
        ],
        serverUrl: '',
        // 服务器统一请求接口路径
        initialContent: this.baseData,
        allHtmlEnabled:true
    }),
    this.getHonorEdtior=UE.getEditor('honor', {
        UEDITOR_HOME_URL:__dirname +'src/assets/UEditor/',
        // serverUrl: config.ajaxUrl + '/ueditor/jsp/controller.jsp',
        autoHeight: false,
        initialFrameHeight: '250',
        scaleEnabled: false,
        toolbars:[
            ['source','bold','italic', 'underline','strikethrough']
        ],
        serverUrl: '',
        // 服务器统一请求接口路径
        initialContent: this.baseData,
        allHtmlEnabled:true
    })
  },
  destroyed () {
    UE.getEditor('introduce').destroy();
    UE.getEditor('baseData').destroy();
    UE.getEditor('honor').destroy();
  }
}
</script>
<style lang="less">
    @uploadWidth:200px;
    @selectWidth:200px;
    #teamAdd{
        .el-select{
            width:@selectWidth;
            .el-input{
                width:@selectWidth;
            }
        }
        .el-input{
            width:500px;
        }
        .upload{
            position:relative;
            .el-upload{
                width:@uploadWidth;
                position: absolute;left:515px;top:-115px;
                .el-upload__inner{
                    width:@uploadWidth;
                }
            }
        }
        .el-dragger{
            width: @uploadWidth;
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
        .edtior{
            width:1000px;
        }

    }
</style>