import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import logo from './assets/globomantics-logo-bug-black.png'

export default function Header({headerDisplay}) {
    return(
        <View styles={styles.header}>
            <Image source={logo} style={{width: 35, height: 35}}/>
            <View>
                <Text style={styles.text}>{headerDisplay}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'OpenSans',
    }
});