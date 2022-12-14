<script setup>
  import UpdateBtnA from './Components/UpdateBtn/demo/index-a.vue'
  import UpdateBtnB from './Components/UpdateBtn/demo/index-b.vue'
</script>

# UpdateBtn

<ContainerBox title="介绍">
<template #desc>

自带`loading`效果的更新按钮
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
可设置再次更新
</template>

<div class="demoBox">
<UpdateBtnA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibUpdateBtn @update="update" :finish="finish" v-model="status" title="更新" />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const status = ref(0); //更新状态
const finish = ref(false);
const text = ref('待更新');

const update = () => {
  text.value = '更新中';
  setTimeout(() => {
    finish.value = true;
    text.value = '更新成功';
    setTimeout(() => {
      status.value = 0;
      finish.value = false;
      text.value = '再次更新';
    }, 1000);
  }, 1000);
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">

<template #desc>
自定义大小、可外加一个圆圈

可设置更新失败
</template>

<div class="demoBox">
<UpdateBtnB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibUpdateBtn
      style="border: 0.75vw solid #000"
      @update="update"
      :finish="finish"
      size="15vw"
      v-model="status"
      title="更新"
    />
    <span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const status = ref(0); //更新状态
const finish = ref(false);
const text = ref('待更新');

const update = () => {
  text.value = '更新中';
  setTimeout(() => {
    status.value = 0;
    text.value = '更新失败';
  }, 1000);
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4vw;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数    | 说明                                                                                | 类型    | 默认值 |
| ------- | ----------------------------------------------------------------------------------- | ------- | ------ |
| v-model | 控制更新状态，`0`为待更新状态，`1`为更新成功状态                                    | Number  | 0      |
| size    | 按钮及字体大小                                                                      | String  | 50px   |
| finish  | 完成状态，当更新成功后，将其设为`true`即可，如果更新失败或再次更新，需要设为`false` | Boolean | false  |

</template>
</ContainerBox>

<ContainerBox title="Events">

<template #desc>

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| update | 点击按钮后触发 | -        |

</template>
</ContainerBox>
