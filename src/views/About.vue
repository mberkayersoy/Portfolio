<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Berkay Ersoy</strong>, a recent graduate with a degree in Computer Engineering and a deep passion for game development.<br/>
        As a recent graduate, I'm looking for opportunities where I can bring my skills and enthusiasm.
        I am eager to immerse myself in a professional environment where I can apply my theoretical and technical knowledge to real-world projects.
      </div>

      <!-- <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">stuff</router-link>, on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div> -->

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a junior game developer. You can reach me at <a href="mailto:mberkayersoy@gmail.com">mberkayersoy@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/aboutmeavatar.jpg" alt="Avatar of Me" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: -25px;
  text-align: center;
}
.photo img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>