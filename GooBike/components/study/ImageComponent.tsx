import { Image, StyleSheet, Text, View } from "react-native";

const ImageComponent = () => {
    return (<View style={styles.container}>
        <View style={styles.rowContainer}>
            <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                }}
            />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    },
    rowContainer: {
        flexDirection: 'row',
    }
})

export default ImageComponent;