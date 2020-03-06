import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Main() {
    const text = useSelector(state => state.text);
    
    return (
        <SafeAreaView>
            <Text>{`Texto no redux state: ${text}`}</Text>
        </SafeAreaView>
    )
}