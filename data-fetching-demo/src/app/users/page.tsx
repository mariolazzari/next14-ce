import { User } from "@/types/User";

async function UsersPage() {
  // fake delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // fetch users
  const res = await fetch("https://jsonplaceholder.typicode.com/users1");

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const users: User[] = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-4"> Users</h1>
      <ul>
        {users.map(user => (
          <li className="text-xl" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
