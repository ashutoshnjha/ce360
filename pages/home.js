import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Root</Link>
      </li>
      <li>
        <Link href="/info">Info</Link>
      </li>
      <li>
        <Link href="/service/hello-world">service Post</Link>
      </li>
    </ul>
  )
}
 
export default Home