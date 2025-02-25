interface CheckUserResponse extends GeneralResponse {
  email: string;
  fullName: string;
  profilePic: string;
}

type LoginResponse = CheckUserResponse;
type SignupResponse = CheckUserResponse;
type UpdateProfileResponse = CheckUserResponse;
