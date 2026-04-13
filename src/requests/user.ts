import axios from 'axios';

import { TESKALABS_API_URL } from '@/constants';
import { UserListResponse, UserDetailData } from '@/interfaces/user.interface';
import { PaginationParams } from '@/interfaces/app.interface';

const baseUrl = `${TESKALABS_API_URL}`;

export const getUserList = async (
  params?: PaginationParams,
): Promise<UserListResponse> => {
  const response = await axios.get<UserListResponse>(`${baseUrl}/data`, {
    params,
  });
  return response.data;
};

export const getUserDetail = async (id: string): Promise<UserDetailData> => {
  const response = await axios.get<UserDetailData>(`${baseUrl}/detail/${id}`);
  return response.data;
};
