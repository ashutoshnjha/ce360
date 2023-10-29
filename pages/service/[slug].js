import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Chosen service is : {router.query.slug}</p>
}

