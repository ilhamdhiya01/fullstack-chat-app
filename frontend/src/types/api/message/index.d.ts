interface MessageResponse extends GeneralResponse {
  senderId: string;
  receiverId: string;
  text: string;
}
