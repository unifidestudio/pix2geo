<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'
import useMakrdownToc from '/@src/composable/useMarkdownToc'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-Avatar - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">V-Avatar</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <V-Breadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: { name: 'index' },
          },
          {
            label: 'Components',
            to: { name: 'components' },
          },
          {
            label: 'V-Avatar',
            to: { name: 'components-avatar' },
          },
        ]"
      />

      <div class="columns">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <!--Avatar-->
          <AvatarDefaultDocumentation />

          <!--Avatar Square-->
          <AvatarSquareDocumentation />

          <!--Avatar Fallback-->
          <AvatarHandleFallbackDocumentation />

          <!--Avatar Dot-->
          <AvatarDotDocumentation />

          <!--Avatar Dot Squared-->
          <AvatarDotSquaredDocumentation />

          <!--Avatar Dot Colors-->
          <AvatarDotColorsDocumentation />

          <!--Avatar Badge-->
          <AvatarBadgeDocumentation />

          <!--Avatar Fake-->
          <AvatarFakeDocumentation />

          <!--Avatar Fake Squared-->
          <AvatarFakeSquareDocumentation />

          <!--Avatar Fake Badge-->
          <AvatarFakeBadgeDocumentation />

          <!--Avatar Fake Colors-->
          <AvatarFakeColorDocumentation />

          <!--Avatar Fake Squared Colors-->
          <AvatarFakeSquaredColorDocumentation />

          <!--Props-->
          <AvatarPropsDocumentation />
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
