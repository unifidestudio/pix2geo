<script setup lang="ts">
import type { WizardRelatedTo } from '/@src/models/wizard'
import { wizardData, currentStep } from '/@src/state/wizardState'

const validateStep = (relatedTo: WizardRelatedTo) => {
  wizardData.relatedTo = relatedTo
  currentStep.value = 2
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Select a project type</h2>
    </div>

    <div class="wizard-types">
      <div class="columns">
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-1.svg" alt="" />
            <h3 class="dark-inverted">Forward Facing Scene</h3>
            <p>
              Select this option if your photos are taking from the front of the
              scene.
            </p>
            <div class="button-wrap">
              <V-Button
                color="primary"
                class="type-select-button"
                rounded
                elevated
                bold
                @click="validateStep('UI/UX Design')"
              >
                Continue
              </V-Button>
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-2.svg" alt="" />
            <h3 class="dark-inverted">Spherical 360 Scene</h3>
            <p>
              Select this option if your photos cover all angles of the scene.
            </p>
            <div class="button-wrap">
              <V-Button
                color="primary"
                class="type-select-button"
                rounded
                elevated
                bold
                @click="validateStep('Web Development')"
              >
                Continue
              </V-Button>
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-3.svg" alt="" />
            <h3 class="dark-inverted">Additional Option</h3>
            <p>Keeping this here incase theres another option here.</p>
            <div class="button-wrap">
              <V-Button
                color="primary"
                class="type-select-button"
                rounded
                elevated
                bold
                @click="validateStep('Marketing')"
              >
                Continue
              </V-Button>
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
