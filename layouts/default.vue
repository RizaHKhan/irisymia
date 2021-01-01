<template>
  <v-app id="inspire">
    <AppBar />
    <NavigationDrawer />
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import NavigationDrawer from '@/components/NavigationDrawer'
import Footer from '@/components/Footer'

export default {
  components: {
    AppBar,
    NavigationDrawer,
    Footer,
  },
}
</script>
