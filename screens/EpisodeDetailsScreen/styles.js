import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    heading: {
        marginTop: 16,
        marginLeft: 16,
        fontSize: 16,
        fontWeight: '800',
        color: colors.teal
    },
    description: {
        marginLeft: 16,
        marginBottom: 16,
        fontSize: 12,
        fontWeight: '400'
    },
    flatContentContainer: {
        flexGrow: 1,
        paddingHorizontal: 16
    },
    itemContainer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.white,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    link: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.blue
    }
})

export default styles;