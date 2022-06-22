import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    Loader,
    BackButton,
} from '../../components';
import { fetchEpisodeDetails } from '../../store/actions/episodes';

import styles from './styles';

const HomeScreen = (props) => {
    const { navigation, route } = props
    const { episodeId = -1 } = route.params

    const dispatch = useDispatch()

    const { isLoading } = useSelector((state) => state.loading)
    const { episodeDetails = {} } = useSelector((state) => state.episodes)

    useEffect(() => {
        dispatch(fetchEpisodeDetails(episodeId))
    }, [])

    const _renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                    navigation.navigate("CharacterDetailsScreen", { characterLink: item })
                }}>
                <Text style={styles.link}>{item}</Text>
            </TouchableOpacity>
        )
    }

    if (isLoading) return <Loader loading={isLoading} />
    return (
        <View style={styles.container}>
            <BackButton navigation={navigation} />
            <Text style={styles.heading}>{episodeDetails.name}</Text>
            <Text style={styles.description}>{episodeDetails.air_date}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatContentContainer}
                data={episodeDetails?.characters}
                extraData={episodeDetails?.characters}
                keyExtractor={(item, index) => `${item?.id}_${index}`}
                ListEmptyComponent={() => {
                    if (isLoading) return null
                    return (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>NO DATA</Text>
                        </View>
                    )
                }}
                renderItem={_renderItem}
            />
        </View>
    );
}

export default HomeScreen