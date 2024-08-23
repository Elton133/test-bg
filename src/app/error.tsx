'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import {Button} from "@components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    //   @ts-ignore
    console.error(error)
  }, [error])

  return (
    <div className={'v-stack mx-auto my-auto h-screen w-screen gap-12 items-center justify-center'}>
      <h2 className={'text-2xl font-semibold'}>Something went wrong!</h2>
        {/*<p>*/}
        {/*    {error.message}*/}
        {/*</p>*/}
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}