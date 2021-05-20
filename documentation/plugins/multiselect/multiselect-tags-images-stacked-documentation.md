---
tagsSlotOptions:
  - value: javascript
    name: Javascript
    image: /images/icons/stacks/js.svg
  - value: reactjs
    name: ReactJS
    image: /images/icons/stacks/reactjs.svg
  - value: vuejs
    name: VueJS
    image: /images/icons/stacks/vuejs.svg
  - value: angular
    name: Angular
    image: /images/icons/stacks/angular.svg
  - value: android
    name: Android
    image: /images/icons/stacks/android.svg
  - value: html5
    name: Html5
    image: /images/icons/stacks/html5.svg
  - value: css3
    name: CSS3
    image: /images/icons/stacks/css3.svg
tagsSlotValue: []
---

### Stacked images

You can combine the `mode="tags"` with a custom template. This way you can
show custom tag elements with an image inside. The tag shape inherits from
the select class modifier. Add the `is-stacked` class to the `is-image-tags`
element to show stacked images.

<!--code-->

```vue
<script setup lang="ts">
const tagsSlotValue = []
const tagsSlotOptions = [
  {
    value: 'javascript',
    name: 'Javascript',
    image: '/images/icons/stacks/js.svg',
  },
  {
    value: 'reactjs',
    name: 'ReactJS',
    image: '/images/icons/stacks/reactjs.svg',
  },
  {
    value: 'vuejs',
    name: 'VueJS',
    image: '/images/icons/stacks/vuejs.svg',
  },
  {
    value: 'angular',
    name: 'Angular',
    image: '/images/icons/stacks/angular.svg',
  },
  {
    value: 'android',
    name: 'Android',
    image: '/images/icons/stacks/android.svg',
  },
  {
    value: 'html5',
    name: 'Html5',
    image: '/images/icons/stacks/html5.svg',
  },
  {
    value: 'css3',
    name: 'CSS3',
    image: '/images/icons/stacks/css3.svg',
  },
]
</script>

<template>
  <V-Field class="is-image-tags is-stacked">
    <V-Control>
      <Multiselect
        v-model="tagsSlotValue"
        mode="tags"
        placeholder="Select language"
        track-by="name"
        label="name"
        :search="true"
        :options="tagsSlotOptions"
        :max-height="145"
      >
        <template #tag="{ option, remove, disabled }">
          <div class="multiselect-tag is-user">
            <img :src="option.image" />
            {{ option.name }}
            <i
              v-if="!disabled"
              @click.prevent
              @mousedown.prevent.stop="remove(option)"
            />
          </div>
        </template>
      </Multiselect>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <V-Field class="is-image-tags is-stacked">
      <V-Control>
        <Multiselect
          v-model="frontmatter.tagsSlotValue"
          mode="tags"
          placeholder="Select language"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsSlotOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-image-tags is-stacked is-curved-select">
      <V-Control>
        <Multiselect
          v-model="frontmatter.tagsSlotValue"
          mode="tags"
          placeholder="Select language"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsSlotOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-image-tags is-stacked is-rounded-select">
      <V-Control>
        <Multiselect
          v-model="frontmatter.tagsSlotValue"
          mode="tags"
          placeholder="Select language"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsSlotOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
