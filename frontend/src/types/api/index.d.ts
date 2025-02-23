interface ApiResponse<T> {
  data: T;
  // message: string;
  status: number;
}

interface GeneralResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface CheckUserResponse extends GeneralResponse {
  email: string;
  fullName: string;
  profilePic: string;
}

type LoginResponse = CheckUserResponse;
type SignupResponse = CheckUserResponse;
type UpdateProfileResponse = CheckUserResponse;
