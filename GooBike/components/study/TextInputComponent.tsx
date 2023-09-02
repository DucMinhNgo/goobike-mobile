import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputComponent = () => {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                numberOfLines={4}
                multiline
                editable
                maxLength={40}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Useless Placeholder"
                keyboardType="numeric"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1
    },
});

export default TextInputComponent;