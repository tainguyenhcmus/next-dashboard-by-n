import Link from 'next/link'

//not-found.js components do not accept any props.
//By default, not-found is a Server Component. You can mark it as async to fetch and display data:

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}