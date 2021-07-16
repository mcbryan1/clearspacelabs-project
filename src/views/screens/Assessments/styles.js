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
        fontSize:dimensions.font.md ,
        fontFamily: 'SemiBold',
        flex: 8,
        color: colors.darkGray,
    },
    empty:{
        flex: 2
    },
    toggleContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop: dimensions.margin.lg,
        marginBottom: dimensions.margin.md,
    },
    toggler: {
        fontSize: dimensions.font.xl,
        color: colors.darkGray,
    }
})

export default styles;