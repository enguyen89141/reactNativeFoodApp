import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.background}>
            <Feather
                name="search"
                size={30}
                style={styles.iconStyle}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;