<script setup lang="ts">
import useDropdown from '/@src/composable/useDropdown'
import { computed } from 'vue'
import { useStore } from 'vuex'
import firebase from 'firebase'

const store = useStore()
const userName = computed(() => store.getters.userName)
const handleLogout = async () => {
  firebase.auth().signOut()
  store.commit('userName', 'Anonymous')
}

const { dropdownElement, isOpen, toggle } = useDropdown()
</script>

<template>
  <li id="user-menu">
    <div
      id="profile-menu"
      ref="dropdownElement"
      :class="[isOpen && 'is-active']"
      class="dropdown profile-dropdown dropdown-trigger is-spaced is-up"
    >
      <img
        src="/demo/avatars/8.jpg"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
        @click="toggle"
      />
      <span class="status-indicator"></span>

      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-head">
            <div class="v-avatar is-large">
              <img
                class="avatar"
                src="/demo/avatars/8.jpg"
                alt=""
                @error.once="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span>{{ userName }}</span>
              <span>Pix2Geo User</span>
            </div>
          </div>
          <RouterLink
            :to="{ name: 'sidebar-layouts-profile-view' }"
            class="dropdown-item is-media"
          >
            <div class="icon">
              <i class="lnil lnil-user-alt"></i>
            </div>
            <div class="meta">
              <span>Profile</span>
              <span>View your profile</span>
            </div>
          </RouterLink>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item is-media">
            <div class="icon">
              <i class="lnil lnil-briefcase"></i>
            </div>
            <div class="meta">
              <span>Projects</span>
              <span>All my projects</span>
            </div>
          </a>
          <a href="#" class="dropdown-item is-media">
            <div class="icon">
              <i class="lnil lnil-users-alt"></i>
            </div>
            <div class="meta">
              <span>Team</span>
              <span>Manage your team</span>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item is-media">
            <div class="icon">
              <i class="lnil lnil-cog"></i>
            </div>
            <div class="meta">
              <span>Settings</span>
              <span>Account settings</span>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <div class="dropdown-item is-button" @click="handleLogout">
            <button
              class="button v-button is-primary is-raised is-fullwidth logout-button"
            >
              <span class="icon is-small">
                <i class="iconify" data-icon="feather:log-out"></i>
              </span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
