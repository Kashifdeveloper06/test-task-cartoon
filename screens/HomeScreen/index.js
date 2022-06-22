import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    Loader,
    EpisodeCard,
} from '../../components';
import { fetchEpisodes } from '../../store/actions/episodes';

import styles from './styles';

const HomeScreen = (props) => {
    const { navigation } = props

    const dispatch = useDispatch()

    const { isLoading } = useSelector((state) => state.loading)
    const { episodesList = [] } = useSelector((state) => state.episodes)

    useEffect(() => {
        dispatch(fetchEpisodes())
    }, [])

    const _renderItem = ({ item }) => {
        return (
            <EpisodeCard
                data={item}
                navigation={navigation}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{"Episodes"}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatContentContainer}
                data={episodesList}
                extraData={episodesList}
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
            <Loader loading={isLoading} />
        </View>
    );
}

export default HomeScreen