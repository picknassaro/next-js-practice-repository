import Link from "next/link";
import UsersTable from "../../components/UsersTable/UsersTable";
import { Suspense } from "react";

interface UsersPageProps {
  searchParams: { sort: string };
}

const UsersPage = ({ searchParams: { sort } }: UsersPageProps) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New
      </Link>
      <Suspense fallback={<p>Loading users table...</p>}>
        <UsersTable sortBy={sort} />
      </Suspense>
    </>
  );
};

export default UsersPage;
