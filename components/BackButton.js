import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import colors from '../utils/colors';

const EpisodeCard = (props) => {
    const { navigation } = props

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigation.goBack()
            }}>
            <AntDesign
                name={"left"}
                size={25}
                color={colors.black}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 16,
        alignItems: 'center',
        justifyContent: 'center',
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
})

export default EpisodeCard