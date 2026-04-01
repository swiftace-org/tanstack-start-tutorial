import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: 4}}>
        <Link to="/">Home</Link>
        <a>About</a>
      </nav>
      <p>DoLater is a task management app for lazy people.</p>
    </div>
  )
}
