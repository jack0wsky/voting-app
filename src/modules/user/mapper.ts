import type { IUserReadModel, IUserDto } from "@/modules/user/user.types";

export const mapUserDtoToReadModel = (userDto: IUserDto): IUserReadModel => {
  return {
    ...userDto,
    userInitials: userDto.displayName ? userDto.displayName?.slice(0, 1) : "",
  };
};
