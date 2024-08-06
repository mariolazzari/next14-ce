import { User } from "@/types/User";

async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
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
