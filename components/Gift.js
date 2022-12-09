import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const Gift = (props) => {
    return(
        <View style={styles.itemToGift}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
            </View>
            <Text style={styles.itemText}>{props.text}</Text>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemToGift: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#f20a29",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: "80%"
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: "#f20a29",
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Gift;