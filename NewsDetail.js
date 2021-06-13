import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, ScrollView} from "react-native";

export default function NewsDetail({route, navigation}) {
    const API_KEY = '1151765e4af24b2dafed8292cb2cffce';
    const [dataLoading, finishLoading] = useState(true);
    const [data, setData] = useState([]);
    const { url } = route.params;

    const selectedPost = data.find((post) => post.url === url);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.error(error))
            .finally(() => {
                finishLoading(false)
            })
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
            {dataLoading ? <ActivityIndicator/>: (
                <ScrollView>
                    <Text style={styles.title}>{selectedPost.title}</Text>
                    <Image
                        style={styles.storyImage}
                        source={{url: selectedPost.url}}/>
                    <Text style={styles.blurb}>{selectedPost.description}</Text>
                    <Text style={styles.content}>{selectedPost.content}</Text>
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'OpenSans',
        justifyContent: 'center'
    },
    storyImage: {
        height: 300,
        width: '100%'
    },
    title: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        padding: 20,
        fontStyle: 'italic'
    },
    content: {
        flex: 1,
        fontFamily: 'OpenSans',
        fontSize: 16,
        paddingTop: 30,
        paddingBottom: 100,
        paddingLeft: 20,
        paddingRight: 20
    }
})