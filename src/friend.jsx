export default function Friend(friend) {
  console.log(friend);
  const { name, username, email } = friend.friend;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
}
