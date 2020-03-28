import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation}) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {results.length ? 
        <FlatList 
            horizontal
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
        : <Text style={styles.text}>No results found.</Text>}
        
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    },
    text: {
        marginLeft: 15
    },
});

export default ResultsList;