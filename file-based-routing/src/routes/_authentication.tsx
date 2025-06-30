import { Login } from '@/components/login'
import { useAuth } from '@/hooks/use-auth'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentication')({
  component: () => {
    const isAuth = useAuth()
    if (!isAuth) {
      return <Login />
    }
    return <div>Hello "/dispatches"!</div>
  },
})
