<template>
  <div class="container">
    <header>
      <div class="header-text">使用者列表</div>
    </header>
    <div class="user-card-wrapper">
      <div class="user-card" v-for="user in users" :key="user.id">
        <router-link to="">
          <div class="user-card-inner-wrapper">
            <div class="user-cover">
              <img class="user-cover-img" :src="user.cover" alt="">
            </div>
            <div class="user-info">
              <div class="name">{{ user.name }}</div>
              <div class="account">@dandan</div>
              <div class="reply-info">
                <div class="reply">
                  <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.846.242L8.698.232h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 00.12.403.744.744 0 001.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V14.67a.75.75 0 00-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" fill="#657786"/></svg>
                  <div class="reply-count">400</div>
                </div>
                <div class="like">
                  <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8 19.638h-.014C8.203 19.59.75 12.856.75 6.478.75 3.414 3.275.724 6.153.724c2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H10.8v.002zM6.154 2.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965h-.001z" fill="#657786"/></svg>
                  <div class="like-count">899</div>
                </div>
              </div>
              <div class="follow-info">{{ user.FollowingsCount }} 個跟隨中 {{ user.FollowersCount }}位跟隨者</div>
            </div>
          </div>
          <div class="user-avatar">
            <img class="user-avatar-img" :src="user.avatar" alt="">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminUsersCard",
  data() {
    return {
      users: [
        {
          "id": 2,
          "name": "user1",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/27/perspective.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 3,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 23,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 13,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 18,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 14,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 12,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 6,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 11,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
        {
          "id": 7,
          "name": "user2",
          "avatar": "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/16830650_1574719455879207_7536261785329937290_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=d32igIfF6_wAX8v8XHf&_nc_ht=scontent.ftpe13-1.fna&oh=332f441ac395b91e15e9b9e8abd6dc76&oe=60E9A11D",
          "cover": "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          "TweetsCount": 10,
          "LikesCount": 0,
          "FollowersCount": 0,
          "FollowingsCount": 0
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

header {
  padding: 15px;
  border-left: solid 1px #E6ECF0;
  border-bottom: solid 1px #E6ECF0;
  .header-test {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    padding-left: 26px;
  }
}

.user-card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  grid-gap: 15px;
  padding: 15px;
  border-left: solid 1px #E6ECF0;
}

.user-card {
  width: 245px;
  height: 314px;
  background-color: #F6F7F8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  .user-avatar {
    position: absolute;
    top: 67px;
    left: 50%;
    transform: translateX(-50%);
    .user-avatar-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .user-cover {
    .user-cover-img {
      width: 100%;
      height: 140px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 33px;
  }
  .reply-info, .reply, .like {
    display: flex;
  }
}

</style>