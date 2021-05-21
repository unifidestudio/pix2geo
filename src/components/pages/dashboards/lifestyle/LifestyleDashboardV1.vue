<script setup lang="ts">
import { ref } from 'vue'

import { reputationChartOptions } from '/@src/data/dashboards/lifestyle-v1/reputationChart'
import { influenceChartOptions } from '/@src/data/dashboards/lifestyle-v1/influenceChart'
import {
  creativityRadialOptions,
  engagmentRadialOptions,
  popularityRadialOptions,
} from '/@src/data/dashboards/lifestyle-v1/groupedSocialCharts'

import {
  valueSingle,
  optionsSingle,
} from '/@src/data/dashboards/lifestyle-v1/dashboardData'

type TabId = 'overview' | 'content' | 'brands'
const activeTab = ref<TabId>('overview')
</script>

<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v1">
    <div class="dashboard-header-wrapper">
      <div class="dashboard-header">
        <div class="avatar-container">
          <img
            src="/demo/photos/faces/girl1.jpg"
            alt=""
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
          <button class="button is-circle">
            <span class="icon is-small">
              <i class="iconify" data-icon="feather:plus"></i>
            </span>
          </button>
        </div>
        <div class="header-meta">
          <div class="username-wrap">
            <div class="username">
              <h3>
                <span>sweet_candy13</span>
                <i class="fas fa-star"></i>
              </h3>
              <span>Clarissa Geller</span>
            </div>
            <div class="badges">
              <V-Tag rounded color="info" label="Music" />
              <V-Tag rounded color="primary" label="Lifestyle" />
            </div>
          </div>
          <div class="meta-stats">
            <div class="meta-stat">
              <span>1247</span>
              <span>Posts</span>
            </div>
            <div class="meta-stat">
              <span>38.3K</span>
              <span>Followers</span>
            </div>
            <div class="meta-stat">
              <span>329</span>
              <span>Following</span>
            </div>
          </div>
          <div class="meta-description">
            <p>
              Artist, musician, songwriter, influencer, these are the many names
              people give me. But for you Iam simply Clarissa. *Forever with all
              my friends* // Latest video can be found here youtu.be/8Tcee5Cyz
            </p>
          </div>
          <div class="meta-achievements">
            <tippy>
              <div class="meta-achievement is-danger">
                <i class="fas fa-fire"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <V-IconBox size="small" color="danger">
                      <i class="fas fa-fire"></i>
                    </V-IconBox>
                    <h4 class="dark-inverted">On Fire</h4>
                  </div>
                  <div class="popover-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </template>
            </tippy>

            <tippy>
              <div class="meta-achievement is-primary">
                <i class="fas fa-medal"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <V-IconBox size="small" color="primary">
                      <i class="fas fa-medal"></i>
                    </V-IconBox>
                    <h4 class="dark-inverted">Post Veteran</h4>
                  </div>
                  <div class="popover-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </template>
            </tippy>

            <tippy>
              <div class="meta-achievement is-yellow">
                <i class="fas fa-trophy"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <V-IconBox size="small" color="yellow">
                      <i class="fas fa-medal"></i>
                    </V-IconBox>
                    <h4 class="dark-inverted">Social Champion</h4>
                  </div>
                  <div class="popover-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </template>
            </tippy>
          </div>
        </div>

        <div class="end">
          <!--Dropdown-->
          <InfluencerDropdown />
        </div>
      </div>
    </div>

    <div class="tabs-wrapper">
      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'overview' && 'is-active']">
              <a @click="activeTab = 'overview'">Overview</a>
            </li>
            <li :class="[activeTab === 'content' && 'is-active']">
              <a @click="activeTab = 'content'">Content</a>
            </li>
            <li :class="[activeTab === 'brands' && 'is-active']">
              <a @click="activeTab = 'brands'">Brands</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        v-if="activeTab === 'overview'"
        id="overview-tab"
        class="tab-content is-active"
      >
        <div class="page-placeholder">
          <div class="placeholder-content">
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/having-coffee.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/having-coffee-dark.svg"
              alt=""
            />
            <h3>No brands to show.</h3>
            <p class="is-larger">
              Too bad. Looks like Clarissa enabled her brand privacy setting.
              You won't be able to see the brands she's working with unless you
              contact her directly.
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="activeTab === 'content'"
        id="content-tab"
        class="tab-content is-active"
      >
        <div class="page-placeholder">
          <div class="placeholder-content">
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/having-coffee.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/having-coffee-dark.svg"
              alt=""
            />
            <h3>No brands to show.</h3>
            <p class="is-larger">
              Too bad. Looks like Clarissa enabled her brand privacy setting.
              You won't be able to see the brands she's working with unless you
              contact her directly.
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="activeTab === 'brands'"
        id="brands-tab"
        class="tab-content is-active"
      >
        <!--Empty Placeholder -->
        <div class="page-placeholder">
          <div class="placeholder-content">
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/having-coffee.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/having-coffee-dark.svg"
              alt=""
            />
            <h3>No brands to show.</h3>
            <p class="is-larger">
              Too bad. Looks like Clarissa enabled her brand privacy setting.
              You won't be able to see the brands she's working with unless you
              contact her directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_widgets-stats.scss';

.lifestyle-dashboard-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 355px;
  background: $white;
  z-index: 1;

  &.has-top-nav {
    height: 368px;
  }
}

.lifestyle-dashboard-v1 {
  .dashboard-header-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 220px;
    margin-bottom: 20px;
    z-index: 1;

    .dashboard-header {
      display: flex;
      width: 100%;

      .avatar-container {
        position: relative;
        height: 140px;
        width: 140px;
        min-width: 140px;

        img {
          display: block;
          height: 140px;
          width: 140px;
          min-width: 140px;
          border-radius: $radius-rounded;
        }

        .button {
          position: absolute;
          bottom: 5px;
          right: 5px;
        }
      }

      .header-meta {
        font-family: $font;
        margin-left: 16px;

        .username-wrap {
          display: flex;

          .username {
            h3 {
              font-family: $font-alt;
              color: $dark-text;
              font-size: 1.2rem;
              font-weight: 700;

              i {
                font-size: 1.2rem;
                margin-left: 5px;
                color: $h-yellow;
              }
            }

            > span {
              color: darken($light-text, 5%);
            }
          }

          .badges {
            margin-left: 16px;

            .tag {
              margin-right: 0.5rem;
            }
          }
        }

        .meta-stats {
          display: flex;
          padding: 16px 0;

          .meta-stat {
            margin-right: 30px;

            span {
              &:first-child {
                color: $dark-text;
                font-size: 1.3rem;
                font-weight: 600;
                margin-right: 0.25rem;
              }

              &:nth-child(2) {
                color: $light-text;
              }
            }
          }
        }

        .meta-description {
          max-width: 640px;

          p {
            color: darken($light-text, 5%);
          }
        }

        .meta-achievements {
          display: flex;
          padding-top: 16px;

          .meta-achievement {
            height: 36px;
            width: 36px;
            min-width: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid $white;
            background: $fade-grey;
            border-radius: $radius-rounded;
            margin-right: 10px;
            box-shadow: $light-box-shadow;

            &.is-primary {
              color: $primary;
              background: lighten($primary, 45%);
            }

            &.is-yellow {
              color: $h-yellow;
              background: lighten($h-yellow, 22%);
            }

            &.is-danger {
              color: $danger;
              background: lighten($danger, 40%);
            }
          }
        }
      }

      .end {
        margin-left: auto;
      }
    }
  }

  .tabs-wrapper {
    .tabs-inner {
      .tabs {
        margin-bottom: 30px;
        z-index: 10;

        ul {
          border: none;

          li {
            z-index: 10;

            a {
              border-bottom-width: 4px;
            }
          }
        }
      }
    }
  }

  .body-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $font;
    margin-bottom: 20px;

    h3 {
      font-family: $font-alt;
      font-size: 1.1rem;
      font-weight: 700;
      color: $dark-text;
    }

    .field {
      z-index: 5;
      min-width: 135px;

      .multiselect {
        .multiselect-input {
          .multiselect-single-label {
            color: $light-text;
          }
        }

        .multiselect-options {
          left: unset !important;
          min-width: 180px;
        }
      }
    }
  }

  .overview-card {
    @include vuero-s-card();

    font-family: $font;

    &.is-metrics,
    &.is-heatmap {
      padding: 30px;
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &.has-margin-bottom {
        margin-bottom: 16px;
      }

      h4 {
        color: darken($light-text, 2%);
      }

      h3 {
        font-family: $font-alt;
        font-size: 1rem;
        font-weight: 600;
        color: $dark-text;
      }
    }

    .card-metric {
      font-weight: 700;
      font-size: 2.8rem;
      color: $dark-text;
      padding: 6px 0 16px 0;

      &.is-smaller {
        font-size: 2.5rem;
      }
    }

    .card-foot {
      display: flex;
      align-items: center;

      &.is-up {
        span span {
          color: $h-green;

          svg {
            transform: rotate(-45deg);
          }
        }
      }

      &.is-down {
        span span {
          color: $h-red;

          svg {
            transform: rotate(45deg);
          }
        }
      }

      span {
        display: flex;
        color: $light-text;

        span {
          margin-right: 8px;
          font-weight: 500;

          svg {
            height: 18px;
            width: 18px;
            stroke-width: 3px;
          }
        }
      }
    }

    .cloud-container {
      position: relative;
      height: 455px;
      text-align: center;

      ul {
        margin-top: 1.5rem;
        list-style-type: none;

        li {
          display: inline-block;

          a {
            text-decoration: none;
            line-height: 1.8em;
            font-family: $font;
            color: $dark-text;
            transition: background-color 0.3s, box-shadow 0.3s;

            &.size1 {
              color: $light-text;
              padding: 6px;
              border-radius: 0.5rem;

              &:hover {
                background-color: $accent;
                box-shadow: $accent-box-shadow;
                color: $white;
              }
            }

            &.size2 {
              font-size: 1.25rem;
              padding: 12px;
              border-radius: 0.5rem;

              &:hover {
                background-color: $danger;
                box-shadow: $danger-box-shadow;
                color: $white;
              }
            }

            &.size3 {
              font-size: 1.5rem;
              padding: 18px;
              border-radius: 0.75rem;
              color: lighten($dark-text, 18%);

              &:hover {
                background-color: $h-yellow;
                box-shadow: $h-yellow-box-shadow;
                color: $white;
              }
            }

            &.size4 {
              padding: 10px 16px;
              font-size: 1.75rem;
              border-radius: 0.75rem;

              &:hover {
                background-color: $h-green;
                box-shadow: $h-green-box-shadow;
                color: $white;
              }
            }

            &.size5 {
              padding: 8px 14px;
              font-size: 2rem;
              border-radius: 0.75rem;

              &:hover {
                background-color: $info;
                box-shadow: $info-box-shadow;
                color: $white;
              }
            }

            &.size6 {
              padding: 24px;
              font-size: 2.5rem;
              border-radius: 0.75rem;

              &:hover {
                background-color: $h-purple;
                box-shadow: $h-purple-box-shadow;
                color: $white;
              }
            }
          }
        }
      }
    }

    .metric {
      .metric-head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
          color: darken($light-text, 2%);
        }
      }

      .metric {
        font-weight: 700;
        font-size: 2.8rem;
        color: $dark-text;
        padding: 10px 0;

        &.is-smaller {
          font-size: 2.5rem;
        }
      }

      .metric-foot {
        display: flex;
        align-items: center;

        &.is-up {
          span span {
            color: $h-green;

            svg {
              transform: rotate(-45deg);
            }
          }
        }

        &.is-down {
          span span {
            color: $h-red;

            svg {
              transform: rotate(45deg);
            }
          }
        }

        span {
          display: flex;
          color: $light-text;

          span {
            margin-right: 8px;
            font-weight: 500;

            svg {
              height: 18px;
              width: 18px;
              stroke-width: 3px;
            }
          }
        }
      }
    }
  }

  .stat-widget {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  .heatmap-wrapper {
    .heatmap-title {
      display: flex;
      align-items: center;
      padding: 16px;

      .title-avatar {
        border-radius: $radius-rounded;
        border: 1px solid darken($fade-grey, 3%);
        box-shadow: $light-box-shadow;

        img {
          display: block;
          height: 50px;
          width: 50px;
          min-width: 50px;
          border-radius: $radius-rounded;
          border: 3px solid $white;
        }
      }

      .title-meta {
        margin-left: 16px;

        p {
          span {
            color: $dark-text;
            font-weight: 500;
          }
        }
      }
    }

    .heatmap-inner {
      .heatmap-row {
        display: flex;
        align-items: center;

        .heatmap-row-label {
          width: 60px;
          text-align: center;
          color: $light-text;
          font-size: 0.95rem;
        }

        .heatmap-row-content {
          display: flex;
          flex-grow: 2;

          .heatmap-row-item {
            margin: 5px;
            flex: 1 1 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 34px;
            border-radius: $radius-large;
            background: darken($widget-grey, 2%);

            &.heat-1 {
              background: lighten($primary, 48%);
            }

            &.heat-2 {
              background: lighten($primary, 30%);
            }

            &.heat-3 {
              background: $primary;

              i {
                color: $smoke-white;
                font-size: 12px;
              }
            }

            &.is-time {
              background: none;
              color: $light-text;
              font-size: 0.95rem;
              min-height: 26px;
            }
          }
        }
      }
    }
  }

  .post-stats {
    padding: 16px;
    text-align: center;
    width: 100%;
    font-family: $font;
    font-size: 0.9rem;

    span {
      color: $light-text;
    }

    .post-stat {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1.2;

      i {
        font-size: 1.2rem;
        margin-right: 6px;
      }

      .count {
        font-size: 2.2rem;
        font-weight: 700;
        color: $dark-text;
      }
    }
  }

  .post-group-wrap {
    padding: 4px 10px;

    .post-group {
      display: flex;
      margin-left: -6px;
      margin-right: -6px;

      a {
        display: block;
        width: calc(25% - 12px);
        margin: 6px;

        img {
          display: block;
          width: 100%;
          min-height: 65px;
          max-height: 85px;
          object-fit: cover;
          border-radius: $radius-large;
          margin: 0;
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-bg {
    background: lighten($dark-sidebar, 6%);
  }

  .lifestyle-dashboard-v1 {
    .dashboard-header-wrapper {
      .dashboard-header {
        .header-meta {
          .username-wrap {
            .username {
              h3 {
                color: $dark-dark-text;
              }
            }
          }

          .meta-stats {
            .meta-stat {
              span {
                &:first-child {
                  color: $dark-dark-text;
                }
              }
            }
          }
        }
      }
    }

    .body-title {
      h3 {
        color: $dark-dark-text;
      }
    }

    .overview-card {
      @include vuero-card--dark();

      .card-metric,
      .metric .metric {
        color: $dark-dark-text;
      }

      .cloud-container {
        ul li a {
          color: $white;

          &.size-1 {
            color: $light-text !important;
          }

          &.size-3 {
            color: lighten($dark-text, 25%) !important;
          }

          &.size-4 {
            color: $dark-dark-text !important;
          }
        }
      }

      .heatmap-wrapper {
        .heatmap-title {
          .title-avatar {
            border-color: lighten($dark-sidebar, 12%);

            img {
              border-color: darken($dark-sidebar, 2%);
            }
          }

          .title-meta {
            p span {
              color: $dark-dark-text;
            }
          }
        }

        .heatmap-inner {
          .heatmap-row {
            .heatmap-row-content {
              .heatmap-row-item:not(.is-time) {
                background: lighten($dark-sidebar, 10%);

                &.heat-1 {
                  background: lighten($dark-sidebar, 2%);
                }

                &.heat-2 {
                  background: lighten($accent, 10%);
                }

                &.heat-3 {
                  background: $accent;

                  i {
                    color: $smoke-white;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .lifestyle-dashboard-bg {
    &:not(.has-top-nav) {
      height: 614px;
    }

    &.has-top-nav {
      height: 625px;
    }
  }

  .lifestyle-dashboard-v1 {
    .dashboard-header-wrapper {
      height: 418px;

      .dashboard-header {
        flex-direction: column;

        .avatar-container {
          margin: 0 auto 10px auto;
        }

        .header-meta {
          margin-left: 0;
          text-align: center;

          .username-wrap {
            flex-direction: column;

            .badges {
              margin: 10px auto;
            }
          }

          .meta-stats {
            justify-content: center;

            .meta-stat {
              margin: 0 10px;
            }
          }

          .meta-achievements {
            justify-content: center;
            padding-bottom: 16px;
          }
        }

        .end {
          position: absolute;
          right: 0;
        }
      }
    }

    .tabs-wrapper {
      .tabs-inner {
        .tabs {
          ul {
            text-align: center;
            justify-content: center;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-bg {
    &.has-top-nav {
      height: 428px;
    }
    &:not(.has-top-nav) {
      height: 415px;
    }
  }

  .lifestyle-dashboard-v1 {
    .is-flex-tablet-p {
      flex-wrap: wrap;

      .is-half-tablet-p {
        min-width: 50%;
      }

      .is-full-tablet-p {
        min-width: 100%;
      }

      .column.is-3 {
        min-width: 50%;
      }
    }

    .heatmap-wrapper {
      .heatmap-inner {
        .heatmap-row {
          .heatmap-row-label {
            width: 40px;
          }

          .heatmap-row-content {
            .heatmap-row-item {
              &:first-child,
              &:nth-child(2),
              &:nth-child(3),
              &:nth-child(4),
              &:nth-child(5),
              &:nth-child(6),
              &:nth-child(7),
              &:nth-child(8),
              &:nth-child(9) {
                display: none;
              }

              &.is-time {
                font-size: 0.85rem;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .lifestyle-dashboard-v1 {
    .cloud-container {
      width: 400px !important;
      height: 495px !important;

      .cloud {
        width: 400px !important;
      }

      .cloud-element {
        font-size: 1.5em !important;

        &.size-2 {
          font-size: 2rem !important;
        }

        &.size-3 {
          font-size: 3rem !important;
        }
      }
    }

    .heatmap-wrapper {
      .heatmap-inner {
        .heatmap-row {
          .heatmap-row-label {
            width: 40px;
          }

          .heatmap-row-content {
            .heatmap-row-item {
              &:first-child,
              &:nth-child(2),
              &:nth-child(3),
              &:nth-child(4),
              &:nth-child(5),
              &:nth-child(6) {
                display: none;
              }

              &.is-time {
                font-size: 0.85rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
