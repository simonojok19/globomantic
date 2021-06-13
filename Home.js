import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View, ActivityIndicator, Image, TouchableWithoutFeedback, FlatList} from "react-native";

export default function HomePage({navigation}) {
    const API_KEY = '1151765e4af24b2dafed8292cb2cffce';
    const [dataLoading, finisLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${API_KEY}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => setData(json.articles))
            .catch((error) => console.error(error))
            .finally(() => finisLoading(false))
    }, [])

    const StoryItem = ({item}) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {navigation.navigate('NewsDetail', {url: item.url})}}>
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image style={styles.thumbnail} source={{uri: item.urlToImage}} />
                    <Text style={styles.blurb}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator /> : (
                <FlatList data={data} renderItem={({item}) => {return <StoryItem item={item}/>}}
                          keyExtractor={item => item.url}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
        height: 100,
        width: '98%'
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
});