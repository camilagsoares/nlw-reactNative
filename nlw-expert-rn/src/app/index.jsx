import { View, Text, StyleSheet, Button } from 'react-native'

export default function Home() {
    const pessoa = {
        nome: "Camila",
        idade: 23
    }

    return (
        <View>
            <Text style={styles.baseText}>
                I am bold
                <Text style={styles.innerText}> and red</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
    },
    innerText: {
        color: 'red',
    },
});