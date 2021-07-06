import { apiHelper } from "./../utils/helper";

export default {
  login({ email, password }) {
    return apiHelper.post("admin/signin", {
      email,
      password,
    });
  },
  tweets() {
    return apiHelper.get('tweets', {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTYyNTU3MzkzM30.TzK09xUNSn--CJ1fXgsfavNNVfK00f-PBWVHBXipu40` }
    })
  }
}