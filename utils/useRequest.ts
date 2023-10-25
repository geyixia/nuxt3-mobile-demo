import type { UseFetchOptions } from 'nuxt/app'

export const useRequest = async (url: string,options?: UseFetchOptions<any>) => {
  const { data, error } = await useFetch(url, {
    baseURL: 'http://interview-api-t.itheima.net/h5/',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    ...options,
  })

  if (error.value) {
    return Promise.reject(error)
  } else {
    return data.value.data
  }
}