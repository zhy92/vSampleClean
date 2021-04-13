<template>
  <div class="paragraph">
    <h3 class="paragraph-title" v-if="paragraph.title">
      {{ paragraph.title }}
    </h3>
    <div
      class="paragraph-text"
      v-if="!paragraph.several"
      v-html="paragraph.text"
    ></div>
    <div class="paragraph-text" v-else>
      <p v-for="(para, index) in paragraph.textArray" :key="index">
        {{ para }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "paragraph",
  props: {
    paragraph: Object
  }
};
</script>
