import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly listUsers: Array<User> = [
    {
      userId: 1,
      username: 'Fehizoro',
      email: 'fehizoroandriantsarafara@gmail.com',
      password: 'azertyuiop',
    },
    {
      userId: 2,
      username: 'Fandresena',
      email: 'fandresenaandriantsarafara@gmail.com',
      password: 'azertyuiop',
    },
    {
      userId: 3,
      username: 'Fahendrena',
      email: 'fahendrenaandriantsarafara@gmail.com',
      password: 'azertyuiop',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.listUsers.find((user) => user.username === email);
  }
}
