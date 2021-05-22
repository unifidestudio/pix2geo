<template>
  <div class="standard-onboarding">
    <div class="title-wrap">
      <p>Looks like you're new here</p>
      <h2>Welcome to Vuero. What would you like to do?</h2>
    </div>

    <div class="onboarding-wrap">
      <div class="onboarding-wrap-inner">
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-1.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set1-1-dark.svg"
            alt=""
          />
          <h3>Projects</h3>
          <p>This is where you can manage your projects and scenes.</p>
          <div class="button-wrap">
            <V-Button color="primary" outlined rounded raised>
              Configure Shop
            </V-Button>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-2.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set1-2-dark.svg"
            alt=""
          />
          <h3>Learn</h3>
          <p>
            Guidelines and learning material to understand some of the deeper
            concepts behind neural networking, artificial intelligence, and
            machine learning algorithms.
          </p>
          <div class="button-wrap">
            <V-Button color="primary" outlined rounded raised>
              Manage Products
            </V-Button>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set1-3-dark.svg"
            alt=""
          />
          <h3>Image Datasets</h3>
          <p>Manage and upload your image dataset library assets.</p>
          <div class="button-wrap">
            <V-Button color="primary" outlined rounded raised>
              Setup Payments
            </V-Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_onboarding.scss';
</style>
