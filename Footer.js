import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import * as RootNavigation from './RootNavigation'
import {navigate} from "./RootNavigation";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Globomantics')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('About')}
            >
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => RootNavigation.navigate('Quote')}
                style={styles.button}>
                <Text>Quote</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}>
                <Text>Catalog</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
   footer: {
       width: '100%',
       height: 80,
       flexDirection: 'row',
       alignItems: 'flex-start',
       justifyContent: 'center'
   },
    button: {
       padding: 20
    }
});