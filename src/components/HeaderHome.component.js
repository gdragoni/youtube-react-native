import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'; 

export default function HeaderHome() {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../assets/youtube-logo.png')} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight>
                    <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/cast.png')} />
                </TouchableHighlight>
                <TouchableHighlight>
                    <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/video.png')} />
                </TouchableHighlight>
                <TouchableHighlight>
                    <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/search.png')} />
                </TouchableHighlight>
                <TouchableHighlight>
                    <Image style={[styles.icon, styles.borderRadiusCircle]} source={require('../assets/perfil.jpg')} />
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
    },

    logo: {
        height: 25,
        width: 90,
        resizeMode: 'contain',
    },

    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginHorizontal: 8,
    },

    tintColorGray: {
        tintColor: '#666',
    },

    borderRadiusCircle: {
        borderRadius: 17.5
    }
});