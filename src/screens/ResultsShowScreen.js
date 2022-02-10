import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data); 
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    
    return (
        <View>
            <Text style={styles.titleStyle}>
                {result.name} ({result.price}) {result.rating} stars
            </Text>
            <Text style={styles.subTitleStyle}>
                Phone number: {result.phone}
            </Text>
            <TouchableOpacity
                onPress={() => Linking.openURL(result.url)} 
                style={styles.buttonStyle}
                >
                    <Text style={styles.buttonTextStyle}>{result.name}'s website</Text>
            </TouchableOpacity>
            <FlatList
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={styles.image} source={{ uri: item }} />
                    }}
            />
        </View>
    );
}; 

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15
    },
    image: {
        height: 200,
        width: 300,
        marginLeft: 15,
        marginBottom: 5
    },
    subTitleStyle: {
        marginLeft: 15
    },
    buttonStyle: {
        backgroundColor: '#F0F0F0',
        height: 20,
        width: 250,
        marginHorizontal: 15,
        marginBottom: 15
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        color: '#005295',
        textAlignVertical: 'center'
    }
});

export default ResultsShowScreen; 

