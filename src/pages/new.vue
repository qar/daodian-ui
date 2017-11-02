<template>
  <div class="dao-table-container">
    <div class="add-new-item">
      <div class="food-pic">
        <img src="imagePreview" class="img-preview mt-md" v-show="imagePreview">
        <div class="img-preview" v-show="!imagePreview"></div>

        <file-upload class="dao-btn blue mt-md uploadFile"
                     type="file"
                     accept="image/*"
                     v-model="food.image"
                     @input="handleFileInput(food.image[0])">
                     选择图片
        </file-upload>
      </div>

      <div class="food-desc">
        <dao-input type="text"></dao-input>
        <textarea class="dao-control" rows="10">
        </textarea>

      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from 'vue-upload-component';

export default {
  name: 'NewItemPage',
  components: {
    FileUpload,
  },

  data() {
    return {
      food: {
        image: [],
      },

      imagePreview: null,
    };
  },

  methods: {
    handleFileInput(file) {
      debugger;
      if (!file) return;
      // 上传

      this.imagePreview = window.URL.createObjectURL(file.file);
      // this.upload(type, file.file)
      //   .then(res => {
      //     const params = {};
      //     params[type] = res.image_path;
      //     // 将图片地址同步到外观定制设置
      //     this.updateSurfaceConfig(params);
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>

div.img-preview {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  background-color: #eee;
  display: inline-block;
  margin: 0 auto;
}

.uploadFile {
  width: 300px;
  margin: 0 auto;
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
  }
}
</style>
