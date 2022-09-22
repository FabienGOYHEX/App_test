import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


export default class Home extends React.Component {
    render() {
        return (
            <View style={style.View}>


                <TextInput
                    style={{ height: 40, borderColor: 'red', borderWidth: 2, marginVertical: 50 }}
                />
            </View>
        )
    }

}
const style = StyleSheet.create({
    View: {
        marginVertical: 140
    }
})