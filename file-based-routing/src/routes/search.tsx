import { createFileRoute, Link, useSearch } from '@tanstack/react-router'
import { useMemo } from 'react'

type TestSearch = {
  active: boolean,
  filter: string,
  tags: string[]
}

export const Route = createFileRoute('/search')({
  validateSearch: (search: Record<string, unknown>): TestSearch => {
    return {
      active: search.active as boolean || false,
      filter: search.filter as string || '',
      tags: search.tags as string[] || [],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const search = useSearch({ strict: false, shouldThrow: false})

  const searchParams = useMemo(() => {
    const searchParams = new URLSearchParams()
    if (!search) return searchParams
    Object.entries(search).map(([key, value]) => {
      if (!searchParams.has(key)) {
        console.info(`Key is ${key} Value is ${value}`)
        // searchParams.append(key, value)
      }
    })
    return searchParams
  }, [search])

  return <div>
    <div>Search is {JSON.stringify(searchParams, null, 2)}</div>
    <Link to="." search={(prev) => ({
      ...prev,
      tags: ['bugs', 'features']
    })}>Next</Link>
  </div>
}
