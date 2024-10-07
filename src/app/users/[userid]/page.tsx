import { notFound } from "next/navigation";

interface UserDetailPageProps {
  params: { userid: number };
}

const UserDetailPage = ({ params: { userid } }: UserDetailPageProps) => {
  if (userid > 10) notFound();
  return <div>{userid}</div>;
};

export default UserDetailPage;
