import { apiHelper } from "./../utils/helper";

export default {
  getMessages() {
    return apiHelper.get("/chat");
  }
};
