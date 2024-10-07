import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-4 m-4">AdminSidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
