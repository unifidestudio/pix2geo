<script setup lang="ts">
import { wizardData } from '/@src/state/wizardState'

const onAddFile = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error)
    return
  }

  const _file = fileInfo.file as File
  if (_file) {
    wizardData.logo = _file
  }
}

const onRemoveFile = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error)
    return
  }

  wizardData.logo = null
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Add a new Project</h2>
    </div>

    <div class="project-info">
      <div class="project-info-head">
        <div class="project-avatar-upload">
          <V-FilePond
            size="small"
            class="profile-filepond"
            name="profile_filepond"
            :chunk-retry-delays="[500, 1000, 3000]"
            label-idle="<i class='lnil lnil-cloud-upload'></i>"
            :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
            :image-preview-height="140"
            :image-resize-target-width="140"
            :image-resize-target-height="140"
            image-crop-aspect-ratio="1:1"
            style-panel-layout="compact circle"
            style-load-indicator-position="center bottom"
            style-progress-indicator-position="right bottom"
            style-button-remove-item-position="left bottom"
            style-button-process-item-position="right bottom"
            @addfile="onAddFile"
            @removefile="onRemoveFile"
          />
          <p>
            <span>Upload a project logo</span>
            <span>File size cannot exceed 2MB</span>
          </p>
        </div>
        <div class="project-info">
          <div class="project-name">
            <V-Field>
              <V-Control>
                <input
                  v-model="wizardData.name"
                  class="input"
                  placeholder="Project Name"
                />
              </V-Control>
            </V-Field>
          </div>
          <div class="project-description p-t-10"></div>
        </div>
      </div>
    </div>
  </div>
</template>
