import fetchUsers from "@/hooks/fetchUsers";
import Link from "next/link";

interface UsersTableProps {
  sortBy: string;
}

const UsersTable = async ({ sortBy }: UsersTableProps) => {
  const users = await fetchUsers();

  users.sort(
    sortBy === "email"
      ? (a, b) => a.email.localeCompare(b.email)
      : sortBy === "name" ? (a, b) => a.name.localeCompare(b.name) : undefined
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link href="/users?sort=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sort=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
