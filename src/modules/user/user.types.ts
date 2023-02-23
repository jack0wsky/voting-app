import type { User } from "firebase/auth";

export type IUserDto = User;

export interface IUserReadModel extends IUserDto {
  userInitials: string;
}
