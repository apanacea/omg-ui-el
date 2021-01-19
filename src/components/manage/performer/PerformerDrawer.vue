<template>
  <div>
    <a-button type="primary" @click="showDrawer" style="padding-buttom: 24px">
      <a-icon type="plus"/>
      添加
    </a-button>
    <a-drawer
        title="添加演员"
        :width="720"
        :visible="visible"
        :body-style="{ paddingBottom: '80px' }"
        @close="onClose"
    >
      <a-form layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <PerformerAvatarUpload @handleAvatarSrc="handleAvatarSrc"/>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item label="名字">
              <a-input v-model="performer.nameZh"
                       placeholder="必填"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="中文名">
              <a-input v-model="performer.nameJa"
                       placeholder="可选"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="头像链接">
              <a-input v-model="performer.avatarSrc"
                       :disabled="true"
                       placeholder="选填"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="评级">
              <a-select v-model="performer.level"
                        placeholder="必选"
              >
                <a-select-option value="S">
                  S
                </a-select-option>
                <a-select-option value="A">
                  A
                </a-select-option>
                <a-select-option value="B">
                  B
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="生日">
              <a-date-picker placeholder="可选" @change="onChange" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="出道日期">
              <a-date-picker placeholder="可选" @change="onChange" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="标签">
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
          :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onSubmit">
          Submit
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import PerformerAvatarUpload from './PerformerAvatarUpload.vue'

export default {
  name: 'PerformerDrawer',
  components: {
    PerformerAvatarUpload,
  },
  data() {
    return {
      visible: false,
      performer: {
        nameZh: null,
        nameJa: null,
        nameEn: null,
        avatarSrc: null,
        level: 'B',
        tags: []
      },
      tag: {
        id: Number,
        name: String,
        type: String
      }
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onSubmit() {
      console.log(this.performer);
      this.$axios({
        url: this.$urls.createPerformer,
        method: 'post',
        data: JSON.stringify(this.performer),
        headers: {
          'Content-Type': 'application/json'
        }
      })
          .then((resp) => {
            console.log(resp.data);
            this.visible = false;
          })
          .catch((error) => {
            console.log(error)
          })
    },
    handleAvatarSrc(avatarSrc) {
      this.performer.avatarSrc = avatarSrc
    }
  },
};
</script>
