import { useState } from "react"
import { Modal, Pressable, StyleSheet, Text, View } from "react-native"

const ModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.centeredView}>
            <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Hello Word!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={() => setModalVisible(true)}
                style={[styles.button, styles.buttonOpen]}
            >
                <Text>Show modal</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    button: {
        elevation: 2,
        padding: 10,
        borderRadius: 20
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    }
})

export default ModalComponent;