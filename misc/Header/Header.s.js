import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    button: {
        width: 50,
        height: "100%",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonImg: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
    },
    supTitle: {
        textTransform: "uppercase",
        fontSize: 14,
        color: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
    },
});
