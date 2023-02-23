import { defineStore } from "pinia";
import type { IUserReadModel } from "@/modules/user/user.types";
import { mapUserDtoToReadModel } from "@/modules/user/mapper";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "@/services/firebase";

interface IUserState {
  user: IUserReadModel | null;
}

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const useUserStore = defineStore("user", {
  state: (): IUserState => ({
    user: null,
  }),
  actions: {
    async login() {
      const data = await signInWithPopup(auth, googleProvider);
      this.user = mapUserDtoToReadModel(data.user);
    },
    async getUserData() {
      const userDto = await auth.currentUser;
      if (!userDto) return;
      this.user = mapUserDtoToReadModel(userDto);
    },
    async logout() {
      signOut(auth).then(() => {
        this.user = null;
      });
    },
  },
});
