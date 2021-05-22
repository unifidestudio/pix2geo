<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 *
 * You will be able to access this page at http://localhost:3000/sidebar-blank-page-1
 * Page uri will match related path to src/pages folder
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { useHead } from '@vueuse/head'

/**
 * activeSidebar is an exported ref() that we can use everywhere
 * @see /src/components/navigation/desktop/sidebar/subsidebars/GenericSidebar.vue
 */
import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'
useHead({
  title:
    'Pixels to Geometry using Artifical Intelligence Neural Radiance Fields',
})
</script>

<template>
  <SidebarLayout>
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <teleport to="[data-teleport-bg]">
            <div class="lifestyle-dashboard-bg"></div>
          </teleport>
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="vuero-hamburger nav-trigger push-resize"
              @click="toggleSidebar('home')"
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

            <!-- Page title -->
            <div class="title-wrap">
              <h1 class="title is-4 text-uppercase">
                Neural Radiance Fields in the wild
              </h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <div class="standard-onboarding">
              <div class="title-wrap">
                <h3 style="padding: 10px">
                  We build on neural radiance fields (NeRF), which uses the
                  weights of a multilayer perceptron to implicitly model the
                  volumetric density and color of a scene. While NeRF works well
                  on images of static subjects captured under controlled
                  settings, it is incapable of modeling many ubiquitous,
                  real-world phenomena in uncontrolled images, such as variable
                  illumination or transient occluders. In this work, we
                  introduce a series of extensions to NeRF to address these
                  issues, thereby allowing for accurate reconstructions from
                  unstructured image collections taken from the internet.
                </h3>
              </div>

              <div class="onboarding-wrap">
                <div class="onboarding-wrap-inner">
                  <!--Card-->
                  <div class="onboarding-card">
                    <h3>Project Manager</h3>
                    <p>
                      This is where you can manage your projects and scenes.
                    </p>
                    <div class="button-wrap">
                      <router-link to="wizard-v1">
                        <V-Button color="primary" outlined rounded raised>
                          ENTER THE LAB
                        </V-Button>
                      </router-link>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <h3>Education | Guidelines</h3>
                    <p>
                      Guidelines and learning material and implementation tips.
                    </p>
                    <div class="button-wrap">
                      <V-Button color="primary" outlined rounded raised>
                        LEARN
                      </V-Button>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <h3>Assets Library</h3>
                    <p>Manage and upload your image dataset library assets.</p>
                    <div class="button-wrap">
                      <V-Button color="primary" outlined rounded raised>
                        CLOUD STORAGE
                      </V-Button>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <h3>Analytics & Utilization</h3>
                    <p>Resource Utilization, Reports & Analytics</p>
                    <div class="button-wrap">
                      <V-Button color="primary" outlined rounded raised>
                        RESOURCE UTILIZATION
                      </V-Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--
                Page content goes here

                You can see pages content samples from
                files in /src/components/pages directory
              -->
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/generic/_onboarding.scss';
</style>
