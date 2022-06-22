import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import colors from '../utils/colors';

const EpisodeCard = (props) => {
    const { navigation, data = {} } = props

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigation.navigate("EpisodeDetailsScreen", { episodeId: data?.id })
            }}>
            <Text style={styles.heading}>{data.name}</Text>
            <Text style={styles.description}>{data.air_date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    heading: {
        fontSize: 16,
        fontWeight: '800'
    },
    description: {
        fontSize: 12,
        fontWeight: '400'
    }
})

export default EpisodeCard