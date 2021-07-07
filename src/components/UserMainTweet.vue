<template>
  <div class="container">
    <div class="wrapper">
      <div class="user-tweet">
        <div class="user-avatar">
          <img
            src="https://img.shoplineapp.com/media/image_clips/5f803796cb32120038c61202/original.jpg?1602238358"
            alt=""
          />
        </div>
        <div class="user-content">
          <div class="user-info">Ashley <a href="#"> @ashley‧ 3小時</a></div>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            rem, autem minima fugiat ut quasi expedita possimus ratione dolore
            voluptatibus maxime nisi porro nobis hic deserunt veritatis vero
            tenetur molestias
          </div>
          <div class="tweet-icons">
            <div class="like">like</div>
            <div class="comments">comments</div>
          </div>
        </div>
      </div>
      <div class="user-tweet">
        <div class="user-avatar">
          <img
            src="https://img.shoplineapp.com/media/image_clips/5f803796cb32120038c61202/original.jpg?1602238358"
            alt=""
          />
        </div>
        <div class="user-content">
          <div class="user-info">Ashley <a href="#"> @ashley‧ 3小時</a></div>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            rem, autem minima fugiat ut quasi expedita possimus ratione dolore
            voluptatibus maxime nisi porro nobis hic deserunt veritatis vero
            tenetur molestias
          </div>
          <div class="tweet-icons">
            <div class="like">like</div>
            <div class="comments">comments</div>
          </div>
        </div>
      </div>
      <div class="user-tweet">
        <div class="user-avatar">
          <img
            src="https://img.shoplineapp.com/media/image_clips/5f803796cb32120038c61202/original.jpg?1602238358"
            alt=""
          />
        </div>
        <div class="user-content">
          <div class="user-info">Ashley <a href="#"> @ashley‧ 3小時</a></div>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            rem, autem minima fugiat ut quasi expedita possimus ratione dolore
            voluptatibus maxime nisi porro nobis hic deserunt veritatis vero
            tenetur molestias
          </div>
          <div class="tweet-icons">
            <div class="like">like</div>
            <div class="comments">comments</div>
          </div>
        </div>
      </div>
      <div class="user-tweet">
        <div class="user-avatar">
          <img
            src="https://img.shoplineapp.com/media/image_clips/5f803796cb32120038c61202/original.jpg?1602238358"
            alt=""
          />
        </div>
        <div class="user-content">
          <div class="user-info">Ashley <a href="#"> @ashley‧ 3小時</a></div>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            rem, autem minima fugiat ut quasi expedita possimus ratione dolore
            voluptatibus maxime nisi porro nobis hic deserunt veritatis vero
            tenetur molestias
          </div>
          <div class="tweet-icons">
            <div class="like">like</div>
            <div class="comments">comments</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
.user-tweet {
  display: grid;
  grid-template-columns: 0.2fr 2fr;
  grid-gap: 0.5 rem;
  border: 1px solid #c4c4c4;
  padding: 0.5rem;
}
.user-avatar > img {
  border: 1px solid #c4c4c4;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.tweet-icons {
  display: flex;
  flex-direction: row;
}
</style>