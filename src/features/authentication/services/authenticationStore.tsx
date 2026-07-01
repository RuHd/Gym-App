import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userProfile } from "../types";

interface ProfileState {
  profile: userProfile;
  setProfile: (profile: userProfile) => void;
  changeMeasure: (altura: string, peso: string) => void;
}

const useProfileState = create<ProfileState>()(
  persist(
    (set) => ({
      profile: {
        name: "",
        email: "",
        altura: "",
        peso: "",
      },

      setProfile: (profile) => set({ profile }),

      changeMeasure: (altura, peso) =>
        set((state) => ({
          profile: {
            ...state.profile,
            altura,
            peso,
          },
        })),
    }),
    {
      name: "user-profile", // chave no localStorage
    }
  )
);

export default useProfileState;