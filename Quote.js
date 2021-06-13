import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function QuotePage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [submitted, trySubmit] = useState(false);

    const postMessage = () => {
        if (!name || !email || !message) {
            setError(true);
        } else {
            setError(false);
            trySubmit(true)
        }
    }

    const TextEdit = (label, value, setValue) => {
        return (
            <>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input} onChangeText={text => setValue(text)} value={value}/>
            </>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {error ? (
                    <Text style={styles.status}>You didn't enter Name, Email, or Message</Text>
                ) : (
                    <Text style={styles.status}>Please enter the requested Information</Text>
                )}
                {submitted ? (
                    <Text>Name: {name} Email: {email}</Text>
                ) : (
                    <Text style={styles.req}>* required</Text>
                )}

                <TextEdit value={name} setValue={setName} label="Name *"/>
                <TextEdit value={email} setValue={setEmail} label="Email *"/>
                <TextEdit value={phone} setValue={setPhone} label="Phone Number"/>
                <Text style={styles.label}>Message *</Text>
                <TextInput style={styles.multiline} onChangeText={text => setMessage(text)} value={message} multiline
                           numberOfLines={6}/>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => postMessage()}>
                    <Text>SubmitQuote</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 26,
        fontFamily: 'OpenSans',
        width: 250
    },
    label: {
        fontSize: 18,
        fontFamily: 'OpenSans',
        paddingTop: 20
    },
    req: {
        fontFamily: 'OpenSans',
        paddingTop: 10,
        fontStyle: 'italic'
    },
    multiline: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 16,
        fontFamily: 'OpenSans',
        width: 300
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10
    },
    status: {
        paddingTop: 10,
        paddingBottom: 15
    }
});