<template>
  <div>
    <h1>Projects</h1>
    <div style="margin-bottom: 30px;">
      Here are some projects I've developed so far in my game development process.
    </div>
    <div id="wall-Games">
      <ProjectsList v-bind:projects="projects" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>

<style scoped>
/* Existing styles */
</style>
