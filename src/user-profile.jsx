export default function UserProfile({ name, email }) {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}
