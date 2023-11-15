import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

const useShoppingCart = () => {

        const navigation = useNavigation()

        const [levelProgress, setLevelProgress] = useState(0)

        const ProgressBar = ({ progessBar, routeName }) => {
                setLevelProgress(progessBar)
                navigation.navigate(routeName)
        }

        return {
                ProgressBar,
                levelProgress,
        }
}

export default useShoppingCart