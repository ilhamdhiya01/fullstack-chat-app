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

type User = CheckUserResponse;

type TypeFormatDate =
  | "DD/MM/YYYY"
  | "DD-MM-YYYY"
  | "DD MMM YYYY"
  | "DD MMM YYYY H:m"
  | "YYYY-MM-DD";
