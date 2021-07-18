import { apiHelper } from "./../utils/helper";

export default {
  getMessages() {
    return apiHelper.get("/chat");
  },
  getChatUserList() {
    return apiHelper.get("/chat/private");
  },
  getChatUserMsg({ RoomId }) {
    return apiHelper.get(`/chat/${RoomId}`);
  },
};
