<template>
    <div id="UEditor">
        <script id="content" name="content" type="text/plain" style="width:90%;height:400px;"></script>
    </div>
</template>

<script>
    export default{
        props:['display','news'],
        data(){
            return{
                editor: null,
                msg:'hello vue',
                toolbar:[]
            }
        },
        created () {
          this.setTool();
        },
        mounted () {
          this.editor = UE.getEditor('content', {
            //UEDITOR_HOME_URL: __dirname + 'static/ueditor/'
            UEDITOR_HOME_URL:__dirname +'src/assets/UEditor/',
            // serverUrl: config.ajaxUrl + '/ueditor/jsp/controller.jsp',
            autoHeight: false,
            initialFrameHeight: '250',
            emotionLocalization: true,
            scaleEnabled: false,
            toolbars: [this.toolbar],
            serverUrl: '',
            // 服务器统一请求接口路径
            initialContent: this.news,
            allHtmlEnabled:true
          })
        },
        destroyed () {
          //this.editor.destroy()
          // UE.getEditor('content').destroy()
        },
        methods:{
            setTool(){
                if(this.display==1){
                    this.toolbar=['source','undo','redo','bold', 'italic', 'underline','strikethrough','superscript','subscript','forecolor','backcolor','removeformat','insertorderedlist','insertunorderedlist','selectall','cleardoc','paragraph','fontfamily','fontsize','justifyleft','justifycenter','justifyright','justifyjustify','link','unlink','insertimage','horizontal','fullscreen']
                }else if(this.display==3){
                    this.toolbar=['source','bold','italic', 'underline','strikethrough']
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    #UEditor{
        width:100%;
        body {
            background-color:#f60;
        }
    }

</style>