export interface UserListData {
  id: string;
  username: string;
  email: string;
  created: number;
  last_sign_in: number;
  address: string;
}

export interface UserDetailData extends UserListData {
  phone_number: string;
  ip_address: string;
  mac_address: string;
}

export interface UserListResponse {
  count: number;
  data: UserListData[];
}
