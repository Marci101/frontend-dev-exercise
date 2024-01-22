import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div>
      <p>Sorry, page not found!</p>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </div>
  )
}