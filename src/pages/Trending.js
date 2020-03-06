import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableHighlight } from 'react-native';

export default function Trending() {
    const [text, setText] = useState("");

    return (
        <SafeAreaView>
            <TextInput 
                onChangeText={_text => {
                    setText(_text);
                }}
                placeholder={"Digite"}
                style={{ height: 40, borderColor: '#ddd', borderWidth: 1, marginHorizontal: 10, marginVertical: 10 }}
                value={text} 
            />
            <Text>{`Texto no state: ${text}`}</Text>
        </SafeAreaView>
    )
}