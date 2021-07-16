import {StyleSheet} from 'react-native';
import { colors, dimensions } from '../../../constants'

const styles = StyleSheet.create({
    button:{
        borderRadius:dimensions.radius.md,
        paddingVertical: dimensions.padding.sm,
        paddingHorizontal:dimensions.padding.sm + 2,
        borderColor: colors.seaBlue,
        borderWidth: 1,
        alignSelf: 'flex-end',
        marginBottom:dimensions.margin.md,
    },
    buttonText:{
        fontFamily: 'Bold',
        color: colors.seaBlue,
        fontSize: dimensions.font.sm 
    }
})

export default styles;