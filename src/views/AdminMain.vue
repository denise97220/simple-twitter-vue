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

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminTweetsList from "./../components/AdminTweetsList.vue";

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
  {
    id: 235,
    UserId: 35,
    description: "repudiandae",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 245,
    UserId: 35,
    description: "dolor",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 255,
    UserId: 35,
    description: "rem",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 265,
    UserId: 35,
    description: "eius",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 275,
    UserId: 35,
    description: "dolore",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 285,
    UserId: 35,
    description: "consequuntur",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 295,
    UserId: 35,
    description: "et",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user3",
      account: "user3",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 305,
    UserId: 45,
    description: "unde",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 315,
    UserId: 45,
    description: "qui",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 325,
    UserId: 45,
    description: "laudantium",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 335,
    UserId: 45,
    description: "hic",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 345,
    UserId: 45,
    description: "reiciendis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 355,
    UserId: 45,
    description: "eos",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 365,
    UserId: 45,
    description: "error",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 375,
    UserId: 45,
    description: "reiciendis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 385,
    UserId: 45,
    description: "aspernatur",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 395,
    UserId: 45,
    description: "veniam",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user4",
      account: "user4",
      avatar: "https://image.flaticon.com/icons/png/512/847/847969.png",
    },
  },
  {
    id: 405,
    UserId: 55,
    description: "optio",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 415,
    UserId: 55,
    description: "sunt",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 425,
    UserId: 55,
    description: "in",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 435,
    UserId: 55,
    description: "omnis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 445,
    UserId: 55,
    description: "perferendis",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 455,
    UserId: 55,
    description: "dolor",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 465,
    UserId: 55,
    description: "odit",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 475,
    UserId: 55,
    description: "et",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 485,
    UserId: 55,
    description: "modi",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
    },
  },
  {
    id: 495,
    UserId: 55,
    description: "sed",
    createdAt: "2021-07-05T11:04:53.000Z",
    updatedAt: "2021-07-05T11:04:53.000Z",
    User: {
      name: "user5",
      account: "user5",
      avatar: "https://image.flaticon.com/icons/png/512/528/528098.png",
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
    fetchTweets() {
      this.adminTweets = dummyData;
    },
  },
};
</script>