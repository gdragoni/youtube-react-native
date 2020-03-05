import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import VideoCard from '../components/VideoCard.component';

import youtubeVideos from '../youtubeVideos';

export default function List() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.list}
                data={youtubeVideos}
                keyExtractor={video => video._id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <VideoCard key={item._id} video={item} />
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    list: {
        flex: 1
    }
});