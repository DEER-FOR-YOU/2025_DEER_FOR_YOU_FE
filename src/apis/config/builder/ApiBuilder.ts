import apiClient from '../apiClient';
import { useQuery, useMutation } from '@tanstack/react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type RequestConfig<T> = {
  params?: Record<string, any>;
  data?: T;
  headers?: Record<string, string>;
};

class ApiBuilder<T = any, R = any> {
  private endpoint: string;
  private method: ApiMethod = 'GET';
  private config: RequestConfig<T> = {};

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  static create<T, R>(endpoint: string) {
    return new ApiBuilder<T, R>(endpoint);
  }

  setMethod(method: ApiMethod) {
    this.method = method;
    return this;
  }

  setParams(params: Record<string, any>) {
    this.config.params = params;
    return this;
  }

  setData(data: T) {
    this.config.data = data;
    return this;
  }

  setHeaders(headers: Record<string, string>) {
    this.config.headers = headers;
    return this;
  }

  async execute(): Promise<AxiosResponse<R>> {
    const requestConfig: AxiosRequestConfig = {
      method: this.method,
      url: this.endpoint,
      ...this.config,
    };
    return apiClient(requestConfig);
  }

  // Hook 대신 쿼리 함수를 반환하는 메서드
  getQueryFn() {
    return async () => {
      const response = await this.execute();
      return response.data;
    };
  }

  // Hook 대신 뮤테이션 함수를 반환하는 메서드
  getMutationFn() {
    return async (data: T) => {
      this.setData(data);
      const response = await this.execute();
      return response.data;
    };
  }
}

export function useApiQuery<T, R>(
  apiBuilder: ApiBuilder<T, R>,
  queryKey: any,
  options?: UseQueryOptions<R>,
) {
  return useQuery<R>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: apiBuilder.getQueryFn(),
    ...options,
  });
}

export function useApiMutation<T, R>(
  apiBuilder: ApiBuilder<T, R>,
  options?: UseMutationOptions<R, unknown, T>,
) {
  return useMutation<R, unknown, T>({
    mutationFn: apiBuilder.getMutationFn(),
    ...options,
  });
}

export default ApiBuilder;
