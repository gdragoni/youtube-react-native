import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, Image, View, Dimensions, TouchableHighlight } from 'react-native';

import youtubeVideos from '../youtubeVideos';

export default function Detail({ route }) {
    const { params: { video } } = route;

    return (
        <SafeAreaView style={styles.container}>
            <Image resizeMode={'cover'} style={styles.videoImage} source={{ uri: video.videoThumbnail }} />
            <View style={{ padding: 18 }}>
                <Text style={styles.title}>{video.title}</Text>
                <Text style={[styles.description, { marginTop: 8 }]}>{"1.687.140 visualizações"}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingTop: 20 }}>
                    <TouchableHighlight>
                        <View style={styles.alignItemsCenter}>
                            <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/like.png')} />
                            <Text style={[styles.description, { marginTop: 5 }]}>{"161 mil"}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.alignItemsCenter}>
                            <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/hated.png')} />
                            <Text style={[styles.description, { marginTop: 5 }]}>{"1,1 mil"}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.alignItemsCenter}>
                            <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/reply.png')} />
                            <Text style={[styles.description, { marginTop: 5 }]}>{"Compartilhar"}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.alignItemsCenter}>
                            <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/download.png')} />
                            <Text style={[styles.description, { marginTop: 5 }]}>{"Download"}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.alignItemsCenter}>
                            <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/save.png')} />
                            <Text style={[styles.description, { marginTop: 5 }]}>{"Salvar"}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={[styles.box, { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 18 }]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image resizeMode={'cover'} style={styles.channelImage} source={{ uri: video.channelThumbnail }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.title}>{video.channel}</Text>
                        <Text style={styles.description}>{"3,33 mi de inscritos"}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>{"INSCRITO"}</Text>
                    <TouchableHighlight>
                        <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/bell.png')} />
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 18, alignItems: "center", }}>
                <Text style={styles.description}>{"Próximo"}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <Text style={styles.description}>{"Reprodução automática"}</Text>
                    <TouchableHighlight>
                        <Image style={[styles.icon, styles.tintColorGray]} source={require('../assets/toggle.png')} />
                    </TouchableHighlight>
                </View>
            </View>
            <FlatList 
                style={styles.list}
                data={youtubeVideos}
                keyExtractor={video => video._id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: "row", paddingHorizontal: 18, paddingVertical: 10, height: halfCardWidth/1.8+20 }}>
                            <Image resizeMode={'cover'} style={styles.videoRightImage} source={{ uri: item.videoThumbnail }} />
                            <View style={{ width: halfCardWidth, marginLeft: 12 }}>
                                <Text numberOfLines={3} ellipsizeMode='tail' style={styles.title}>{item.title}</Text>
                                <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.description, { marginTop: 8 }]}>{item.description}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const halfCardWidth = Dimensions.get('window').width/2 - 18

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    title: {
        color: '#222',
        fontSize: 18,
        marginRight: 5
    },

    description: {
        color: '#444',
        fontSize: 14,
    },

    videoImage: {
        height: Dimensions.get('window').width*0.5609756098,
        width: '100%'
    },

    videoRightImage: {
        width: halfCardWidth,
        height: halfCardWidth/1.8
    },

    channelImage: {
        width: 40,
        height: 40,
        borderRadius: 20
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

    alignItemsCenter: {
        alignItems: "center"
    },

    box: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingVertical: 10,
    }
});