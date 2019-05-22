<template>
  <div class="about">
    <h1>ABOUT ME</h1>
    <p>Born & Raised in Ibadan, Oyo State also an indigene of Abeokuta-North, Ogun State. Graduated from Tai-Solarin University of Education (2016). I enjoy writing code and solving Problems, playing Video Games, surfing the web, writing rap lyrics and listening to music.</p>
    <div id="more-about">
      <img src="@/assets/images/girl.png" alt="Interest Image">
      <div class="hobbies">
        <h2 id="hobbies">Hobbies</h2>
        <ul id="hobbies-list">
          <li>Attending Meet ups</li>
          <li>Participating In Online Courses</li>
          <li>Playing Video Games</li>
          <li>Surfing the web</li>
          <li>Reading</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 10px;
}
.hobbies {
  width: 100%;
}
.hobbies #hobbies {
  display: inline-block;
  padding: 10px 25px;
  background-color: #38ce59;
  border-radius: 20px;
}

.hobbies #hobbies-list {
  width: 80%;
  margin: 0 auto;
  text-align: left;
  padding-left: 0;
}

.hobbies ul li {
  list-style-type: square;
  margin: 0;
    padding: 5px;
}

img {
    margin-top: 40px;
    width: 300px;
    height: 300px;
    border-radius: 100%;
  }
</style>
