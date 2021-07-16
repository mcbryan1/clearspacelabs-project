import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'



const Assessments = ({navigation}) => {
    const toggleDrawer = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.container}>
            <Text>Assesments</Text>
            <Button title="Assesments"  onPress={toggleDrawer} / >
        </View>
    )
}

export default Assessments

