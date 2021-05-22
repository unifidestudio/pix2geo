<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import useNotyf from '/@src/composable/useNotyf'

import { isDark } from '/@src/state/darkModeState'
import sleep from '/@src/utils/sleep'

import firebase from 'firebase'

const router = useRouter()
const notif = useNotyf()
const isLoading = ref(false)

const name = ref('')
const email = ref('')
const password = ref('')
const password2 = ref('')

const handleSignup = async () => {
  if (!isLoading.value) {
    isLoading.value = true

    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        res.user
          .sendEmailVerification()
          .then(() => {
            console.log('verification sent')
            res.user
              .updateProfile({
                displayName: name.value,
              })
              .then(() => {
                notif.success(
                  'Welcome, ' +
                    name.value +
                    '. Please check your mail to verify your account.'
                )
                router.push('/auth/login-3')
              })
          })
          .catch((error) => {
            console.log('error - verification not sent')
          })
      })
      .catch((error) => {
        alert(error.message)
      })

    isLoading.value = false
  }

  return {
    name,
    email,
    password,
    password2,
  }
}

useHead({
  title: 'Auth Signup 3 - Vuero',
})
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left"></div>
      <div class="center">
        <RouterLink :to="{ name: 'index' }" class="header-item">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>
      </div>
      <div class="right">
        <label class="dark-mode ml-auto">
          <input
            type="checkbox"
            :checked="!isDark"
            @change="
              (event) => {
                isDark = !event.target.checked
              }
            "
          />
          <span></span>
        </label>
      </div>
    </div>

    <!--Single Centered Form-->
    <div class="single-form-wrap">
      <div class="inner-wrap">
        <!--Form Title-->
        <div class="auth-head">
          <h2>Join Us Now.</h2>
          <p>Start by creating your account</p>
          <RouterLink :to="{ name: 'auth-login-3' }">
            I already have an account
          </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form @submit.prevent="handleSignup">
            <div class="login-form">
              <!-- Input -->
              <V-Field>
                <V-Control icon="feather:user">
                  <input
                    v-model="name"
                    class="input"
                    type="text"
                    placeholder="Name"
                    autocomplete="name"
                  />
                </V-Control>
              </V-Field>
              <!-- Input -->
              <V-Field>
                <V-Control icon="feather:mail">
                  <input
                    v-model="email"
                    class="input"
                    type="text"
                    placeholder="Email Address"
                    autocomplete="email"
                  />
                </V-Control>
              </V-Field>
              <!-- Input -->
              <V-Field>
                <V-Control icon="feather:lock">
                  <input
                    v-model="password"
                    class="input"
                    type="password"
                    placeholder="Password"
                    autocomplete="new-password"
                  />
                </V-Control>
              </V-Field>
              <!-- Input -->
              <V-Field>
                <V-Control icon="feather:lock">
                  <input
                    v-model="password2"
                    class="input"
                    type="password"
                    placeholder="Repeat Password"
                  />
                </V-Control>
              </V-Field>

              <V-Field>
                <V-Control class="setting-item">
                  <label for="send-promotional" class="form-switch is-primary">
                    <input
                      id="send-promotional"
                      type="checkbox"
                      class="is-switch"
                    />
                    <i></i>
                  </label>
                  <div class="setting-meta">
                    <label for="send-promotional">
                      <span>Receive promotional offers</span>
                    </label>
                  </div>
                </V-Control>
              </V-Field>

              <!-- Submit -->
              <V-Field>
                <V-Control class="login">
                  <V-Button color="primary" bold fullwidth raised>
                    Sign Up
                  </V-Button>
                </V-Control>
              </V-Field>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
