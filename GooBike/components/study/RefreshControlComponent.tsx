import { useCallback, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native"

const RefreshControlComponent = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        console.log(refreshing);

        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Text>Pull down to see RefreshControl indicator {refreshing ? 'a' : 'b'}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default RefreshControlComponent;