import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    heading: {
        margin: 16,
        fontSize: 18,
        fontWeight: '800',
        color: colors.teal
    },
    flatContentContainer: {
        flexGrow: 1,
        paddingHorizontal: 16
    }
})

export default styles;