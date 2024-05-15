    import React from 'react';
    import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

    const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.headerText}>더 나은 내일을 위한</Text>
        <Text style={styles.brandText}>Naeil</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}
        >
            <Text style={styles.buttonText}>Let's go!</Text>
        </TouchableOpacity>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0066FF',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        marginBottom: 8,
    },
    brandText: {
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 40,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
    },
    buttonText: {
        color: '#0066FF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    });

    export default WelcomeScreen;
