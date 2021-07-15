<template>
  <div class="chatroom-container">
    <div class="dialog-box">
      <h1>聊天室</h1>
    </div>
    <div class="online-users">
      <div class="user-top">上線使用者(5)</div>
      <div class="user-list">
        <div class="user-card">
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/30623878_2126472630703933_1331523221500535509_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xfGfnyD9CgIAX-tdZVd&_nc_ht=scontent.ftpe13-1.fna&oh=3c85861785e538c40a3f89634fcd07fb&oe=60F61540"
              alt="avatar"
            />
          </div>
          <div class="user-info">Ashley <span>@ashley</span></div>
        </div>
        <div class="user-card">
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/30623878_2126472630703933_1331523221500535509_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xfGfnyD9CgIAX-tdZVd&_nc_ht=scontent.ftpe13-1.fna&oh=3c85861785e538c40a3f89634fcd07fb&oe=60F61540"
              alt="avatar"
            />
          </div>
          <div class="user-info">Ashley <span>@ashley</span></div>
        </div>
        <div class="user-card">
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/30623878_2126472630703933_1331523221500535509_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xfGfnyD9CgIAX-tdZVd&_nc_ht=scontent.ftpe13-1.fna&oh=3c85861785e538c40a3f89634fcd07fb&oe=60F61540"
              alt="avatar"
            />
          </div>
          <div class="user-info">Ashley <span>@ashley</span></div>
        </div>
        <div class="user-card">
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/30623878_2126472630703933_1331523221500535509_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xfGfnyD9CgIAX-tdZVd&_nc_ht=scontent.ftpe13-1.fna&oh=3c85861785e538c40a3f89634fcd07fb&oe=60F61540"
              alt="avatar"
            />
          </div>
          <div class="user-info">Ashley <span>@ashley</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPublic",
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.chatroom-container {
  display: grid;
  grid-template-columns: 2fr 1.2fr;
}

.dialog-box {
  grid-column: 1 / 2;
}
.online-users {
  grid-column: 2 / 3;
}

// online users
$borderColor: #e6ecf0;
$accountColor: #657786;

.online-users {
  font-weight: 700;
}

.user-top {
  border: $borderColor 1px solid;
  border-bottom: none;
  font-size: 1rem;
  padding: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.user-card {
  border: $borderColor 1px solid;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  line-height: 21px;
  .user-avatar > img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border-color: $borderColor;
    padding: 0.3rem;
    object-fit: cover;
  }

  .user-info > span {
    padding-left: 1px;
    color: $accountColor;
    font-weight: 500;
  }
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
}
</style>