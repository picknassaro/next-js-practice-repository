interface UserDetailPageProps {
  params: { userid: number };
}

const UserDetailPage = ({ params: { userid } }: UserDetailPageProps) => {
  return <div>{userid}</div>;
};

export default UserDetailPage;
