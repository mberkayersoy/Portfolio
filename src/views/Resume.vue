<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      
      <br />Throughout my academic journey in computer engineering, 
      I constantly looked for projects that would improve my skills. Even though I had no professional experience, 
      I actively took part in personal projects aimed at constantly improving myself. 
      These initiatives include the development of various games and applications that demonstrate my dedication to improving my programming and problem-solving skills.
      <br />
      <br />Right now I'm working on interactive electronic games with my friend.
      <br />
      <br />Besides development, I also love playing video games (yes I know it's very surprising), 
            and I like reading comic book, cooking and skateboarding.

      <!-- <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="https://drive.google.com/file/d/1WTcb8WyE5H5iuehKu3dPoz6zVTZTXz8v/view?usp=sharing" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div> -->
    </div>
    <div class="photo" style="margin-top:-100px;">
      <img src="img/Resume_photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>Udo Games - Game Developer Intern</h3>
      <h4>Ankara, Turkey <span style="float: right;">Jul 2023 - Aug 2023</span></h4>
      <div>The internship was conducted remotely for a duration of 1 month. Throughout the internship, Involved in then development of a single project, 
        which was successfully completed through seamless collaboration with a remote team.</div>

        <div class="box">
          The source code of the game prototype I developed during my internship is available on <a href="https://github.com/mberkayersoy/MowIt" target="_blank">GitHub</a>.
        </div>

      <h3>Skyloft - Game Developer Intern</h3>
      <h4>Izmir, Turkey <span style="float: right;">Aug 2022 - Sep 2022</span></h4>
      <div>Internship was done face to face in the office for 1 month. During the internship, 2 projects were developed.</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C#" />
        <SkillRate name="C++" />
        <SkillRate name="Python" />
        <SkillRate name="JAVA"/>
        <SkillRate name="SQL"/>
      </div>

      <div class="skill-set">
        <h3>Tools & Frameworks</h3>
        <SkillRate name="Unity"/>
        <SkillRate name="Zenject"/>
        <SkillRate name="Firebase"/>
        <SkillRate name="Photon Engine"/>
        <SkillRate name="Mirror Networking"/>
        <SkillRate name="GIT"/>
      </div>

      <div class="skill-set">
        <h3>Soft skills</h3>
        <SkillRate name="Teamwork"/>
        <SkillRate name="Self-Awareness"/>
        <SkillRate name="Continuous Learning"/>
        <SkillRate name="Time Managment"/>
        <SkillRate name="Creativity"/>
      </div>
      
      <div class="skill-set">
        <h3>Technical skills</h3>
        <SkillRate name="Design Patterns"/>
        <SkillRate name="Game Architecture"/>
        <SkillRate name="Game Physics"/>
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Mugla Sitki Kocman University</h3>
      <h4>B.S. in Computer Engineering (Sep 2018 - Jun 2023)</h4>

      <h2>Languages</h2>
      <h4>English - B2</h4>
      <h4>Turkish - Native</h4>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Music</h3>
        <div>I am proficient in playing both drums and guitar, often indulging in street performances whenever the opportunity arises. 
          Additionally, I have prior stage experience with a band. Now, I am eager to assemble a new band and take to the stage once more."</div>
        <h3>I 🧡 Sports</h3>
        <div>What could be better than taking your skateboard and going for a ride when the weather is nice?</div>
        <div>I am also interested in Latin dances and basketball.</div>
      

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}
.box {
    border: 1px solid #ccc;
    padding: 5px; 
    max-width: fit-content;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 20px;
}

.photo img {
  height: 450px;
  width: 350px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    display: flex;
    align-items: center;
    flex-direction: column;
    float: left;
    padding-right: 30px; 
    max-width: 230px;  
  }
}
</style>