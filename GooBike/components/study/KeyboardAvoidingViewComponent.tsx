import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"

const KeyboardAvoidingViewComponent = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback>
                <View style={styles.inner}>
                    <View>
                        <Text style={styles.header}>Header</Text>
                        <TextInput placeholder="Username" style={styles.textInput} />
                    </View>
                    <View style={styles.btnContainer} >
                        <Button title="Submit" />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 26
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around'
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12
    }
})

export default KeyboardAvoidingViewComponent;