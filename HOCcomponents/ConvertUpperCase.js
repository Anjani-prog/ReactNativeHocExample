import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet, Image, Dimensions } from 'react-native';

export const ConvertUpperCase = (WrappedComponent) => (props) => {
    return (
        <View>
            <WrappedComponent {...props}>
                {props.children.toUpperCase()}
            </WrappedComponent>
        </View>
    )
}

export const TextValue = (props) => (
    <Text style={styles.title}>{props.children}</Text>
)


const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        padding: 15,
        fontSize: 18,
        fontFamily: 'bold'
    },

})