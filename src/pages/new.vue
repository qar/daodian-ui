<template>
  <div class="dao-table-container">
    <div class="add-new-item">
      <div class="food-pic">
        <img :src="imagePreview" class="img-preview" v-show="imagePreview">
        <div class="img-preview" v-show="!imagePreview">图片预览</div>

        <file-upload class="dao-btn blue uploadFile"
                     type="file"
                     accept="image/*"
                     v-model="food.image"
                     @input="handleFileInput(food.image[0])">
                     选择图片
        </file-upload>
      </div>

      <div class="food-desc">
        <dao-input type="text" v-model="food.name"></dao-input>
        <textarea class="dao-control" rows="10" v-model="food.desc"></textarea>

        <div class="dao-btn blue" @click="add">添加</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import FileUpload from 'vue-upload-component';
import foodsApi from '@/apis/food';

export default {
  name: 'NewItemPage',
  components: {
    FileUpload,
  },

  data() {
    return {
      food: {
        image: [],
        name: '',
        desc: '',
      },

      imagePreview: null,
      file: null,
    };
  },

  methods: {
    add() {
      return foodsApi.uploadFoodPic(this.file.file)
        .then((picUrl) => {
          foodsApi.addFood({
            picture: picUrl.url,
            name: this.food.name,
            description: this.food.desc,
          })
          .then(() => {
            new Noty({
              text: '添加成功',
              type: 'success',
            }).show();
          });
        })
        .then((res) => {
          console.log(res);
        });
    },

    handleFileInput(file) {
      if (!file) return;
      // 上传

      this.imagePreview = window.URL.createObjectURL(file.file);
      this.file = file;
    },
  },
};
</script>

<style lang="scss" scoped>

.img-preview {
  width: 300px;
  height: 300px;
  display: inline-block;
  line-height: 300px;
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: #eee;
  display: inline-block;
  margin: 0 auto;
}

.uploadFile {
  width: 300px;
  margin: 20px auto 0;
}

.add-new-item {
  display: flex;
  flex-direction: row;

  .food-pic {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30%;
  }

  .food-desc {
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: center;

    & > * {
      width: 100%;
      margin-bottom: 20px;
    }

    .dao-btn {
      margin: 0 auto;
    }
  }
}
</style>
