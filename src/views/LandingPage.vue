<template>
  <div class="home">
    <div class="container">
      <NavBar />
      <div class="d-flex justify-space-between container1">
        <div class="container-left">
          <h2 class="DarkBlue--text mb-9">
            Write something Here, idk what tho
          </h2>
          <p class="mb-9 font-weight-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea iure
            recusandae sit asperiores aperiam tempore laboriosam nobis? Eligendi
            cumque voluptas quia amet!
          </p>
          <Button text="sign up now" class="LightPink font-weight-medium" />
          <div class="mt-5">
            <img
              class="image-border"
              src="../assets/icon-family.png"
              alt=""
              width="50"
            />
            <img
              class="image-border"
              src="../assets/icon-personWithHeart.png"
              alt=""
              width="50"
            />
          </div>
        </div>
        <div class="container-right d-flex align-center">
          <img src="../assets/Caress (1).png" alt="" width="400" />
        </div>
      </div>
    </div>
    <div class="about1">
      <div
        class="d-flex flex-row-reverse justify-space-between about align-center"
      >
        <div class="about-right">
          <Title title="About" class="LightPink--text font-weight-medium" />
          <p class="pt-4 font-weight-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            velit praesentium dolorem at adipisci, doloribus molestias ipsa.
            Numquam maxime architecto officiis, modi expedita voluptate,
            possimus repudiandae quod, officia pariatur molestiae.
          </p>
        </div>
        <div class="about-left d-flex align-center">
          <img src="../assets/Psychologist-pana (1).svg" alt="" width="400" />
        </div>
      </div>
    </div>

    <div>
      <div class="How">
        <Title title="How?" class="DarkBlue--text" />
        <p class=" pb-8">We bring the solution home to you</p>
        <v-card class="d-flex flex-row-reverse justify-space-between align-center parents">
          <div class="about-right">
            <h2 class="LightPink--text font-weight-medium">Parents</h2>
            <p class="pt-4 font-weight-medium">
              if you’re a parent, you can consult a doctor for your child Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Mauris sit
              amet massa vitae.
            </p>
          </div>
          <div class="about-left d-flex align-center">
            <img
              src="../assets/young-family-with-their-little-son-at-home-having-fun.jpg"
              alt=""
              width="400"
            />
          </div>
        </v-card>
      </div>
      <div class="d-flex justify-space-between cards">
        <div v-for="n in 4" :key="n">
          <SpecificationCard
            :title="ParentsCards.titles[n - 1]"
            :image="require(`@/assets/${ParentsCards.images[n - 1]}`)"
            :steps="n"
          />
        </div>
      </div>
      <v-card class="d-flex flex-row justify-space-between align-center docs">
        <div class="docs-left">
          <h2 class="LightPink--text font-weight-medium">Doctors</h2>
          <p class="pt-4 font-weight-medium">
            if you’re a parent, you can consult a doctor for your child Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet
            massa vitae.
          </p>
        </div>
        <div class="docs-right d-flex align-center">
          <img src="../assets/[Downloader 2 (1).png" alt="" width="400" />
        </div>
      </v-card>
      <div class="d-flex justify-space-between cards wrap">
        <div v-for="n in 3" :key="n">
          <SpecificationCard
            :title="DoctorsCards.titles[n - 1]"
            :image="require(`@/assets/${DoctorsCards.images[n - 1]}`)"
            :steps="n"
          />
        </div>
      </div>
    </div>
    <div class="quizz">
      <div class="d-flex flex-row-reverse justify-space-between">
        <div class="quiz-right d-flex flex-column align-center justify-center">
          <h1 class="DarkBlue--text pb-3">Take a Quiz</h1>
          <p class="font-weight-medium pb-3">
            Get to know your child better by taking this quiz, it’ll make you
            realize how different they are from what you expect them to be.
          </p>
          <Button text="Take The Quiz" class="LightBlue font-weight-medium" />
        </div>
        <div>
          <img src="../assets/Customer Survey-cuate 1.png" alt="" width="380" />
        </div>
      </div>
    </div>
    <div class="d-flex flex-row-reverse join align-center">
      <div>
        <img src="../assets/Account-pana 1.png" alt="" width="250"/>
      </div>
      <div class=" d-flex flex-column align-center pl-8 pr-8">
        <h1 class="pb-3">Wanna join?</h1>
        <p class=" align-content-center font-weight-medium pb-3">
          You can join this program, and submit for a free trial as a parent,
          benefit from the many services and keep a good relationship with your
          child
        </p>
        <Button text="Join Now" class="LightBlue font-weight-medium" />
      </div>
      <div>
        <img src="../assets/Add User-pana 1.png" alt="" width="250" />
      </div>
    </div>
    <footer class="DarkBlue d-flex flex-row justify-space-between">
      <div class="footer-left">
        <img src="../assets/Caress (2).png" alt="" width="100" class=" pb-8">
        <div>
          <ul class=" font-weight-medium white--text">
            <li>Home</li>
            <li>About Us</li>
            <li>I'm a parent</li>
            <li>Become a doctor</li>
            <li>Our policy</li>
            <li>Guidelines</li>
            <li>Need Help?</li>
            <li>SignIn</li>
            <li>SignUp</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>
      <form class=" d-flex flex-column">
        <div></div>
        <h3 class=" LightPink--text">Contact Us</h3>
        <p class="white--text">Drop your message in the box bellow</p>
        <input type="email" name="email" id="email" placeholder="Drop your email" class="white pa-3 mb-5">
        <textarea name="message" id="message" cols="40" rows="5" placeholder="write your message here" class="white pa-2 mb-5"></textarea>
        <Button text="Submit" type="submit" class="LightBlue font-weight-medium" />
      </form>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Button from "@/components/Button.vue";
import Title from "@/components/Title.vue";
import SpecificationCard from "@/components/SpecificationCard.vue";

export default {
  name: "LandingPage",
  components: {
    NavBar,
    Button,
    Title,
    SpecificationCard,
  },
  props: {},
  data() {
    return {
      ParentsCards: {
        images: [
          "Online article-rafiki 1.png",
          "Questions-bro 1.png",
          "Texting-amico 1.png",
          "Online Doctor-cuate 1 (1).png",
        ],
        titles: [
          "Read Articles",
          "Ask For Help",
          "Chat With Others",
          "Check Doctors",
        ],
      },
      DoctorsCards: {
        images: [
          "Publish article-bro 1.png",
          "Telecommuting-pana 1.png",
          "Active Support-cuate 1.png",
        ],
        titles: ["Writing Articles", "Help The Parents", "Get a Patient"],
      },
    };
  },
};
</script>

<style scoped>
.image-border {
  border-radius: 10px;
  margin-right: 13px;
}
h2 {
  font-size: 40px;
  max-width: 500px;
  line-height: 1.3em;
}
.container-left {
  width: 40%;
}
.container-right {
  width: 40%;
}
.container {
  background-image: url("../assets/imageedit_1_6148904988.png");
  background-size: cover;
  background-position: center;
  padding-bottom: 8em;
}
.container1,
.about {
  margin: 0 6em;
  margin-top: 7em;
}
.about-right {
  width: 40%;
}
.about-left {
  width: 60%;
}

.How {
  margin: 0 6em;
  margin-top: 7em;
}
.How img {
  border-radius: 13px;
}
.cards {
  margin: 0 12em;
  padding-top: 4em;
}
.parents{
  padding: 3em;
  border-radius: 20px !important;
}
.docs-left {
  width: 40%;
}
.docs-right img {
  border-radius: 13px;
}
.docs {
  justify-content: space-between;
  margin-top: 5em !important;
  margin: 0 6em;
  padding: 3em;
  border-radius: 20px !important;
}
.quizz {
  background-image: url("../assets/Group 26 (6).png");
  background-size: cover;
  background-position: bottom;
  padding: 10em 6em;
  margin-top: 5em;
}
.quiz-right {
  width: 45%;
}
.quiz-right h1, .join h1 {
  font-size: 40px;
}
.join{
  margin: 7em 6em 7em 6em;
} 
.join p {
  text-align: center;
}
footer{
  margin-top: 5em;
  padding: 4em 10em;
}
ul{
  list-style: none;
  padding: 0;
  column-count: 2;
}
li{
  padding-bottom: 1em;
}
textarea, input{
  border-radius: 20px;
  resize: none;
}
.footer-left{
  width: 60%;
}
p{
  font-size: 18px;
}

</style>