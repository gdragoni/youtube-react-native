import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'; 

export default function VideoCard({ video }) {
    return (
        <View style={styles.container}>
            <Image resizeMode={'cover'} style={styles.videoImage} source={{ uri: video.videoThumbnail }} />
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image resizeMode={'cover'} style={styles.channelImage} source={{ uri: video.videoThumbnail }} />
                </View>
                <View style={{ flex: 4 }}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.description}>{video.description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width
    },

    videoImage: {
        height: Dimensions.get('window').width*0.5609756098,
        width: '100%'
    },

    channelImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 5
    },

    description: {
        fontSize: 16,
    }
});