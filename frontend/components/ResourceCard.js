import { Card } from './styles/Card'

export default function ResourceCard({ title, owner, createdAt }) {
  return (
    <Card>
      <div>{title}</div>
      <div>{owner}</div>
    </Card>
  )
}
