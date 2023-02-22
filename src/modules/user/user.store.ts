import { defineStore } from "pinia";
import type { User } from "firebase/auth";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "@/services/firebase";

interface IUserState {
  user: User | null;
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
      this.user = data.user;
    },
    async getUserData() {
      this.user = await auth.currentUser;
    },
    async logout() {
      signOut(auth).then(() => {
        this.user = null;
      });
    },
  },
});
