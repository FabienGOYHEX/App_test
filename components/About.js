import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

export default class About extends Component {
    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>À propos</Text>
                <Text>Lorem ipsum</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        margin: 40
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    }
})