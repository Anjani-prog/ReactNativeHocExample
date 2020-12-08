import React from 'react';
import { Text, ActivityIndicator, StyleSheet, Dimensions, View, Image } from 'react-native';


const LoaderOne = () => {
    return (
        <View style={[styles.wrapper]}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} resizeMode='contain' source={require('../assets/Loading.jpeg')} />
                <Text style={styles.text}>Loading........</Text>
            </View>
        </View>
    )
}


function WithLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
        if (isLoading)
            return (
                <LoaderOne />
            )
        else
            return (
                <View>
                    <Component {...props} />
                </View>

            )
    }
}

export default WithLoading;


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 1
    },
    imgContainer: {
        alignSelf: 'center',
        padding: 20
    },
    img: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width - 50
    },
    text: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'green',
        fontWeight: 'bold'
    }
})