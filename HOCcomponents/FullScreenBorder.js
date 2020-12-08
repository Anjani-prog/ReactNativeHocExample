import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet, Image, Dimensions } from 'react-native';


export const FullScreenBorder = (WrappedComponent) => (props) => {
    return (
        <View>
            <WrappedComponent {...props}>
                <View style={styles.ScreenBorder}>
                    {props.children}
                </View>
            </WrappedComponent>
        </View>
    )
}

export const Screen = (props) => (
    <View style={[styles.ScreenBorder, { borderColor: 'green' }]}>
        {props.children}
    </View>
)


const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        padding: 15,
        fontSize: 18,
        fontFamily: 'bold'
    },
    ScreenBorder: {
        borderWidth: 5,
        borderColor: '#2190F8',
        height: '100%',
        width: '100%'
    }

})