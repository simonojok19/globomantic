import React from 'react'
import {StyleSheet, Text, View} from "react-native";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text>This will be the Home Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});