<template>
    <div id="newsTag">
        <el-form :model="formSearch" label-width="90px"  label-position="left">
            <el-form-item label="快速检索:">
                <div class="searchNews">
                    <el-input v-model="formSearch.content" placeholder="请输入关键字"></el-input>
                    <el-button type="danger" @click="onSubmit">搜索</el-button>
                </div>
            </el-form-item>
        </el-form>
        <el-table
                :data="tagData"
                border>
            <el-table-column
                    inline-template
                    label="标签ID"
                    width="82">
                <div class="id-wrapper">
                    <span v-if="startEdit==false">{{ row.id }}</span>
                    <el-input v-if="startEdit" v-model="changeTag" placeholder=""></el-input>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    label="标签名称">
                <div class="name-wrapper">
                    <span v-if="startEdit==false">{{ row.tagName }}</span>
                    <el-input v-if="startEdit" v-model="changeTag" placeholder="请输入内容"></el-input>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    label="文章数"
                    width="100">
                <div class="video-wrapper">
                    <span>{{ row.num }}</span>
                </div>
            </el-table-column>
            <el-table-column
                    :context="_self"
                    inline-template
                    label="操作"
                    width="180">
                <div>
                    <el-button
                            type="primary"
                            @click="handleEdit($index, row)"
                            v-if="startEdit==false">
                        编辑
                    </el-button>
                    <el-button
                            type="success"
                            @click="finishEdit($index, row)"
                            v-if="startEdit">
                        完成
                    </el-button>
                    <el-button
                            type="danger"
                            @click="handleDelete($index, row)">
                        删除
                    </el-button>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default{
    data () {
        return {
            formSearch: {
                content:''
            },
            pageSize:5,
            currentPage:1,
            totalNews:0,
            tagData: [{
                id:1,
                tagName: '头条',
                num: 15
            }],
            startEdit: false,
            changeTag:''
        }
    },
    methods: {
        onSubmit() {
            alert('search!');
        },
        handleEdit(index, row) {
          console.log(index, row);
          this.startEdit = true;
        },
        finishEdit(index, row) {
          console.log(index, row);
          this.startEdit = false;
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
    }
}
</script>
<style lang="less">
    #newsTag{
        width:100%;
        .el-table{
            width: 90%;
            .cell a{
                float:left;margin-right:20px;
            }
        }
    }
</style>