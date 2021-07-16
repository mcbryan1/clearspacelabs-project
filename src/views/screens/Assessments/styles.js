import {StyleSheet} from 'react-native';
import { colors, dimensions } from '../../../constants'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.white,
        justifyContent: 'flex-end',
    },
    subContainer:{
        marginHorizontal: dimensions.margin.lg
    },
    descriptionContainer:{
        marginHorizontal:dimensions.margin.lg,
        marginVertical:dimensions.margin.xl,
        flexDirection:'row',
    },
    description:{
        fontSize:dimensions.font.md + 2,
        fontFamily: 'Bold',
        flex: 8,
        color: colors.darkGray,
    },
    empty:{
        flex: 2
    }
})

export default styles;