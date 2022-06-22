import React, { useEffect } from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    Loader,
    BackButton,
    AvatarComponent,
} from '../../components';
import { fetchCharacterDetails } from '../../store/actions/characters';

import styles from './styles';

const { width: screenWidth } = Dimensions.get("window")

const CharacterDetailsScreen = (props) => {
    const { navigation, route } = props
    const { characterLink = -1 } = route.params

    const dispatch = useDispatch()

    const { isLoading } = useSelector((state) => state.loading)
    const { characterDetails = {} } = useSelector((state) => state.characters)

    useEffect(() => {
        dispatch(fetchCharacterDetails(characterLink))
    }, [])

    if (isLoading) return <Loader loading={isLoading} />
    else return (
        <View style={styles.container}>
            <BackButton navigation={navigation} />
            <AvatarComponent
                style={{ marginTop: 16, width: screenWidth, height: screenWidth * 0.7 }}
                source={characterDetails?.image}
            />
            <Text style={styles.heading}>{characterDetails.name}</Text>
            <Text style={styles.description}>{characterDetails.species}</Text>
            <Text style={styles.description}>{characterDetails.gender}</Text>
        </View>
    );
}

export default CharacterDetailsScreen