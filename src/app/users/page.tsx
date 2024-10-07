import UsersTable from "../../components/UsersTable/UsersTable";

interface UsersPageProps {
  searchParams: { sort: string };
}

const UsersPage = ({ searchParams: { sort } }: UsersPageProps) => {
  return (
    <>
      <h1>Users</h1>
      <UsersTable sortBy={sort} />
    </>
  );
};

export default UsersPage;
