---
state:
  date: 2021-02-28T16:20:00.000Z
---

### DateTimepicker

`<V-Calendar />` can be turned into a date range picker if needed. Check the
code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from vue

const date = ref(new Date())
</script>

<template>
  <v-date-picker v-model="date" mode="dateTime">
    <template #default="{ inputValue, inputEvents }">
      <V-Field>
        <V-Control>
          <input class="input" :value="inputValue" v-on="inputEvents" />
        </V-Control>
      </V-Field>
    </template>
  </v-date-picker>
</template>
```

<!--/code-->

<!--example-->

<v-date-picker v-model="frontmatter.state.date" color="green" mode="dateTime">
  <template #default="{ inputValue, inputEvents }">
    <V-Field>
      <V-Control>
        <input class="input" :value="inputValue" v-on="inputEvents" />
      </V-Control>
    </V-Field>
  </template>
</v-date-picker>

<!--/example-->
