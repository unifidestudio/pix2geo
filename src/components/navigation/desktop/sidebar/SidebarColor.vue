<template>
  <div class="main-sidebar is-colored">
    <div class="sidebar-brand">
      <RouterLink :to="{ name: 'index' }">
        <AnimatedLogo light width="38px" height="38px" />
      </RouterLink>
    </div>
    <div class="sidebar-inner">
      <div class="naver"></div>

      <ul class="icon-menu">
        <!-- Activity -->
        <SidebarItemHome />
        <!-- Layouts -->
        <SidebarItemLayouts />
        <!-- Bounties -->
        <SidebarItemElements />
        <!-- Bugs -->
        <SidebarItemComponents />
        <!-- Messaging -->
        <SidebarItemMessaging />
      </ul>

      <!-- User account -->
      <ul class="bottom-menu">
        <!--Switch Layouts-->
        <SidebarItemLayoutSwitcher />
        <!-- Notifications -->
        <SidebarItemSearch />
        <!-- Wallet -->
        <SidebarItemSettings />
        <!-- Profile -->
        <SidebarItemProfile />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/layout/_sidebar.scss';
</style>
