export interface DataItem {
  id: string;
  username: string;
  email: string;
  created: number;
  last_sign_in: number;
  address: string;
}

export interface DetailItem extends DataItem {
  phone_number: string;
  ip_address: string;
  mac_address: string;
}

export interface DataResponse {
  count: number;
  data: DataItem[];
}

export interface PaginationParams {
  p?: number;
  i?: number;
}
