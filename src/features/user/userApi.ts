export interface User {
  id: number;
  email: string;
  password: string;
}
export interface UserResponse {
  user: User | null;
  token: string;
}
export const listUsers: User[] = [
  {
    id: 1,
    email: 'acc1@gmail.com',
    password: '11111111'
  }
];
export const fetchLogin = (payload: User) => {
  return new Promise<{ data: UserResponse }>((resolve, rejected) => {
    setTimeout(() => {
      const res = listUsers.find((user) => {
        return (
          user.email === payload.email && user.password === payload.password
        );
      });
      const { password, ...others }: any = res;
      res && resolve({ data: { user: others, token: '' + Date.now() } });
      rejected();
    }, 500);
  });
};
