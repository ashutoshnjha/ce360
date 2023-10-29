import { useRouter } from 'next/router'
 
export default function ReadMore() {
  const router = useRouter()
 
  return (
    <button onClick={() => router.push('/home')}>
      Go to Home page
    </button>
  )
}