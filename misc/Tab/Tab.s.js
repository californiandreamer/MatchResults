import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10,
        maxWidth: 500,
    },
    row: {
        width: "100%",
        padding: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonGreen: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#0DE27E",
        borderRadius: 20,
    },
    buttonTextWhite: {
        fontSize: 12,
        fontWeight: "700",
        color: "#fff",
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "transparent",
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: "700",
        color: "#000",
    },
    grid: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    gridItem: {
        width: "33.33333%",
        height: 100,
        padding: 5,
    },
    gridImg: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});
