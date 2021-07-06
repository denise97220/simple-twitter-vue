<template>
  <div class="container">
    <div class="wrapper">
      <!-- Navbar -->
      <div class="admin-navbar">
        <AdminNavbar />
      </div>
      <!-- AdminTweets -->
      <div class="admin-tweets-list">
        <AdminTweetsList :admin-tweets="adminTweets" />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminTweetsList from "./../components/AdminTweetsList.vue";
import { Fire } from "./../utils/helper";
const dummyData = [
  {
    id: 505,
    UserId: 15,
    description: null,
    createdAt: "2021-07-05T16:19:06.000Z",
    updatedAt: "2021-07-05T16:19:06.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 5,
    UserId: 15,
    description: "dolore",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 15,
    UserId: 15,
    description: "magnam",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 25,
    UserId: 15,
    description: "blanditiis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 35,
    UserId: 15,
    description: "natus",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 45,
    UserId: 15,
    description: "praesentium",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 55,
    UserId: 15,
    description: "alias",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 65,
    UserId: 15,
    description: "magnam",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 75,
    UserId: 15,
    description: "vel",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 85,
    UserId: 15,
    description: "qui",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 95,
    UserId: 15,
    description: "sit",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user1",
      account: "user1",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 105,
    UserId: 25,
    description: "saepe",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 115,
    UserId: 25,
    description: "aut",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 125,
    UserId: 25,
    description: "aut",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 135,
    UserId: 25,
    description: "omnis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 145,
    UserId: 25,
    description: "dolores",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 155,
    UserId: 25,
    description: "debitis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 165,
    UserId: 25,
    description: "nobis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 175,
    UserId: 25,
    description: "voluptates",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 185,
    UserId: 25,
    description: "fugit",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 195,
    UserId: 25,
    description: "perferendis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user2",
      account: "user2",
      avatar: "https://i2.kknews.cc/SIG=t4a6t5/4r5r0002r2qo665o5699.jpg",
    },
  },
  {
    id: 205,
    UserId: 35,
    description: "aliquam",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 215,
    UserId: 35,
    description: "quo",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 225,
    UserId: 35,
    description: "sint",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
];

export default {
  name: "AdminMain",
  components: {
    AdminNavbar,
    AdminTweetsList,
  },
  data() {
    return {
      adminTweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        // TODO : API資料無法接近來，先使用dummyData資料
        this.adminTweets = dummyData;
        console.log(this.adminTweets);
      } catch (error) {
        console.error("error", error);
        Fire.fire({
          icon: "warning",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
* {
  font-style: normal;
  font-weight: bold;
}

.wrapper {
  display: grid;
  grid-template-columns: 378px 1062px;
  height: 100%;
}
</style>

