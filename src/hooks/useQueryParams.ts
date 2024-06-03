import { useSearchParams } from 'react-router-dom'

type TParams = '3d'

type TQueryParams = { [key in TParams]: string }

export function useQueryParams(): TQueryParams | null {
  const [searchParams] = useSearchParams()
  const queryParams = {} as TQueryParams

  searchParams.forEach((value, key) => {
    queryParams[key as TParams] = value
  })

  return JSON.stringify(queryParams) !== '{}' ? queryParams : null
}
