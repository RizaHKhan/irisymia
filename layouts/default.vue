<template>
  <v-app id="inspire">
    <AppBar />
    <NavigationDrawer />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
      <Footer />
    </v-main>
    <LoadingOverlay />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import NavigationDrawer from '@/components/NavigationDrawer'
import Footer from '@/components/Footer'
import LoadingOverlay from '@/components/LoadingOverlay'

export default {
  components: {
    AppBar,
    NavigationDrawer,
    Footer,
    LoadingOverlay,
  },
}
</script>
