import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Auth } from '../components/Auth'
import Image from 'next/image'

const WithAuth: React.FC<{ children: any; isLoading: boolean }> = ({
  children,
  isLoading,
}) => {
  const { data: session, status } = useSession()
  const [isPreloaderShown, setIsPreloaderShown] = React.useState(
    status === 'loading'
  )
  const user = session?.user

  useEffect(() => {
    if (status !== 'loading' && !isLoading) {
      setTimeout(() => {
        setIsPreloaderShown(false)
      }, 1000)
    }
  }, [isLoading, status])

  if (isPreloaderShown)
    return (
      <div>
        <Image
          src="/loader.gif"
          width={100}
          height={100}
          alt="loader"
          priority
        />
      </div>
    )

  return user ? children : <Auth />
}

export default WithAuth
