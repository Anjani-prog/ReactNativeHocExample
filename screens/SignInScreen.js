import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet, Image, Dimensions } from 'react-native';
import { AuthContext } from '../routes/Routes'
import { ConvertUpperCase, TextValue } from '../HOCcomponents/ConvertUpperCase'
import { FullScreenBorder, Screen } from '../HOCcomponents/FullScreenBorder'
import WithLoading from '../HOCcomponents/WithLoading'

const UpperCaseUsername = ConvertUpperCase(TextValue)
const Border = FullScreenBorder(Screen)



function SignInSection() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { signIn } = React.useContext(AuthContext);
    return (
        // <FullSCreenSpinner spinner={Loader}>
        <Border>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} resizeMode='contain' source={require('../assets/Login.jpeg')} />
                </View>
                <View>
                    <UpperCaseUsername>Login</UpperCaseUsername>
                </View>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Button title="Sign in" onPress={() => signIn({ username, password })} />
                </View>
            </View>
        </Border>
        // </FullSCreenSpinner>
    );
}


const ListWithLoading = WithLoading(SignInSection)

export default function Mycomponent() {
    const [Loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 5000);

        return () => {

        }
    }, []);


    return (
        <View>
            <ListWithLoading isLoading={Loader} />
        </View>
    )
}



const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        padding: 15,
        fontSize: 18,
        fontFamily: 'bold'
    },
    container: {
        justifyContent: 'center',
        padding: 20
    },
    imgContainer: {
        alignSelf: 'center',
        padding: 20
    },
    img: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width - 50
    }
})