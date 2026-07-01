import useProfileState from "./features/authentication/services/authenticationStore"
import { userProfile } from "./features/authentication/types"


export const useFormProfile = (user : userProfile) => {
    const profile = useProfileState((state) => state.profile)
    const setProfile = useProfileState((state) => state.setProfile)

    for (let i in user) {
        if (i.length < 1) return
    }
    
    setProfile(user)


}

