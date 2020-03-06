import React from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Subscribe() {
    const text = useSelector(state => state.text);

    const dispatch = useDispatch();
    return (
        <SafeAreaView>
            <TextInput 
                onChangeText={_text => {
                    dispatch({
                        type: 'SET_TEXT',
                        value: _text,
                    })
                }}
                placeholder={"Digite"}
                style={{ height: 40, borderColor: '#ddd', borderWidth: 1, marginHorizontal: 10, marginVertical: 10 }}
                value={text} 
            />
        </SafeAreaView>
    )
}