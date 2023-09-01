import { ImageBackground, StyleSheet, Text, View } from "react-native"

const ImageBackgroundComponent = () => {
    return (<View style={styles.container}>
        <ImageBackground source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }} style={styles.image}>
            <Text style={styles.text}>Inside</Text>
        </ImageBackground>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0'
    }
})

export default ImageBackgroundComponent;