import React from "react";
import { StyleSheet, View } from "react-native";
import MatchResults from "./screens/MatchResults/MatchResults";

export default function App() {
    return (
        <View style={s.container}>
            <MatchResults />
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
