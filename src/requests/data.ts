import axios from 'axios';

import { TESKALABS_API_URL } from '../constants';
import {
  DataResponse,
  DetailItem,
  PaginationParams,
} from '../interfaces/data.interface';

const baseUrl = `${TESKALABS_API_URL}`;

export const fetchData = async (
  params?: PaginationParams,
): Promise<DataResponse> => {
  const response = await axios.get<DataResponse>(`${baseUrl}/data`, { params });
  return response.data;
};

export const fetchDetail = async (id: string): Promise<DetailItem> => {
  const response = await axios.get<DetailItem>(`${baseUrl}/detail/${id}`);
  return response.data;
};
