import Link from "next/link";
import UsersTable from "../../components/UsersTable/UsersTable";

interface UsersPageProps {
  searchParams: { sort: string };
}

const UsersPage = ({ searchParams: { sort } }: UsersPageProps) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">New</Link>
      <UsersTable sortBy={sort} />
    </>
  );
};

export default UsersPage;
