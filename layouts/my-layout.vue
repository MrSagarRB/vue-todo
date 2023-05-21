<template>
  <v-app>
    <v-card color="grey lighten-2" flat min-height="100vh" tile>
      <v-navigation-drawer permanent expand-on-hover mini-variant fixed>
        <v-list
          nav
          dense
          height="100%"
          class="d-flex flex-column align-center justify-center pa-0"
        >
          <div>
            <v-list-item
              active-class="green white--text"
              link
              v-for="(nav, ind) in navData"
              :key="ind"
              :to="nav.link"
            >
              <v-list-item-icon>
                <v-icon>{{ nav.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ nav.name }}</v-list-item-title>
            </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar fixed dense flat app :clipped-left="false" elevation="0">
        <v-container class="d-flex justify-space-between align-center">
          <v-card flat dense class="d-flex justify-space-between" width="25%">
            <div><h3>MITI 4.2</h3></div>
            <v-card class="px-5 py-1"
              ><v-icon>mdi-cog</v-icon> Company Config</v-card
            ></v-card
          >

          <v-card
            flat
            dense
            class="d-flex align-center justify-space-between"
            width="20%"
          >
            <v-btn-toggle dense v-model="toggle_exclusive">
              <v-btn> Auth </v-btn>
              <v-btn> Help </v-btn>
            </v-btn-toggle>
            <v-btn icon>
              <v-icon dark class="grey--text lighten-3"> mdi-bell </v-icon>
            </v-btn>
          </v-card>
        </v-container>
      </v-toolbar>
      <nuxt />
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      toggle_exclusive: 0,
      navData: [
        { name: "Home", icon: "mdi-apps", link: "/home" },
        { name: "KPIs", icon: "mdi-bullseye-arrow", link: "/kpi" },
        { name: "CMF Builder", icon: "mdi-format-list-group", link: "/cmf" },
      ],
    };
  },
};
</script>
