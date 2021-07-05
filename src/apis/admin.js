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
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjI1NTA4NDgzfQ.TNHIz7EzV60O7doUzvCLzDeMh5KOPwzC0JqR3qE-iJ4` }
    })
  }
}