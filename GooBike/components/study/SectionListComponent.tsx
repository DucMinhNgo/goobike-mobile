import { SafeAreaView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native"

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
];

const SectionListComponent = () => {
    return (<SafeAreaView style={styles.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    title: {
        fontSize: 24,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    }
})

export default SectionListComponent;