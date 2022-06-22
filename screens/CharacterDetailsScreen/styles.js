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
        fontSize: 12,
        fontWeight: '400'
    },
    flatContentContainer: {
        flexGrow: 1,
        paddingHorizontal: 16
    },
})

export default styles;