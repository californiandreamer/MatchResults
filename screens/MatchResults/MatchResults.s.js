import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F9F9F9",
    },
    backgroundImage: {
        width: "100%",
        height: 170,
    },
    chartWrapper: {
        width: "100%",
        position: "relative",
        top: -90,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: "transparent",
        marginBottom: -90,
    },
    tabs: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
    },
});
