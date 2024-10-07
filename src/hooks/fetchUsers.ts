export interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();
  return users;
};

export default fetchUsers;
