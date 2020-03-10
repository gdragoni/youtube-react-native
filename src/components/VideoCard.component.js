import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, Dimensions, Linking } from 'react-native'; 

export default VideoCard = ({ video }) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => {
                Linking.openURL(video.url).catch((err) => console.error('An error occurred', err));
            }}>
                <Image resizeMode={'cover'} style={styles.videoImage} source={{ uri: video.videoThumbnail }} />
            </TouchableHighlight>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image resizeMode={'cover'} style={styles.channelImage} source={{ uri: video.channelThumbnail }} />
                </View>
                <View style={{ flex: 4 }}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.description}>{video.description}</Text>
                </View>
            </View>
        </View>
    )
}

class VideoCardClass extends React.Component {

    render() {
        const { video } = this.props;

        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => {
                    Linking.openURL(video.url).catch((err) => console.error('An error occurred', err));
                }}>
                    <Image resizeMode={'cover'} style={styles.videoImage} source={{ uri: video.videoThumbnail }} />
                </TouchableHighlight>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image resizeMode={'cover'} style={styles.channelImage} source={{ uri: video.channelThumbnail }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={styles.title}>{video.title}</Text>
                        <Text style={styles.description}>{video.description}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        marginBottom: 20,
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
        color: '#222',
        fontSize: 18,
        marginRight: 5
    },

    description: {
        color: '#444',
        marginTop: 3,
        fontSize: 14,
    }
});