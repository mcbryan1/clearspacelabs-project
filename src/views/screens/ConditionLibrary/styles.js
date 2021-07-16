import {StyleSheet} from 'react-native';
import { colors, dimensions } from '../../../constants'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:colors.red,
        padding:dimensions.padding.lg
    }
})

export default styles;