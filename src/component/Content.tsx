import { Button, Text, View } from "react-native"
import { styles } from "./Styles"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { fetchContent } from "../redux/contentActions"

const Counter: React.FC = () => {
    const {users, loading, fulfilled} = useAppSelector(state => state.content)
    const dispatch = useAppDispatch()
    const onPress = () => {
        dispatch(fetchContent())
    }
    return (
        <View style={styles.container}>
            <Text>{`Loading: ${loading}`}</Text>
            <Text>{`Fulfilled:- ${fulfilled}`}</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Call Api"
                    onPress={onPress}
                />
            </View>
            {
                users.map((item, index) => {
                    return (
                        <View key={index.toString()} >
                            <Text>{item.email}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Counter