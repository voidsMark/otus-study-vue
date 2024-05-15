import axios from 'axios'

type Options = Partial<{
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  responseContentType: 'json' | 'blob'
}>

export const request = async <T = any>(url: string, body?: any, options: Options = {}) => {
  const response = await axios({
    method: options.method || (body ? 'POST' : 'GET'),
    url,
    data: body,
  })

  // TODO: handle error

  const data: T = await response.data
  return data
}
