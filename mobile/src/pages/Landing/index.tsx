import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icon/study.png'
import giveClassesIcon from '../../assets/images/icon/give-classes.png'
import heartIcon from '../../assets/images/icon/heart.png'

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigationToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {

    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}> 
                <RectButton 
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton style={[styles.button, styles.buttonSecondary]} >
                    <Image source={giveClassesIcon} />

                    <Text onPress={handleNavigationToGiveClassesPage} style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;