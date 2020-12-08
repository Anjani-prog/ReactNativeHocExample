import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet, Image, Dimensions } from 'react-native';
import { AuthContext } from '../routes/Routes'


export default function HomeScreen() {
    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} resizeMode='contain' source={require('../assets/Home.jpeg')} />
            </View>
            <Button title="Sign out" onPress={signOut} />
        </View>
    );
}


const styles = StyleSheet.create({

    imgContainer: {
        alignSelf: 'center',
        padding: 20
    },
    img: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width
    }
})