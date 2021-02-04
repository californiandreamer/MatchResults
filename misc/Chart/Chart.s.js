import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
    },
    wrapper: {
        width: "100%",
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    cardsWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    teamCardContainer: {
        width: 120,
    },
    teamCard: {
        width: "100%",
        paddingTop: 10,
        borderRadius: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#fff",
    },
    teamImg: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    teamName: {
        width: "100%",
        paddingHorizontal: 10,
        textAlign: "center",
        fontSize: 12,
    },
    teamButton: {
        width: "100%",
        height: 40,
        marginTop: 10,
    },
    teamButtonImg: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    teamImageStyle: {
        borderRadius: 20,
    },
    teamButtonText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
    },
    totalContainer: {
        minWidth: 100,
        padding: 10,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    totalStat: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
    },
    totalWrapper: {
        width: "100%",
        height: 40,
    },
    totalBgImg: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    totalImageStyle: {
        borderRadius: 20,
    },
    totalCount: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
    },
    totalTime: {
        fontSize: 14,
        fontWeight: "700",
        color: "#000",
    },
    person: {
        width: "100%",
        paddingVertical: 20,
    },
    personWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    personImg: {
        width: 40,
        height: 40,
        resizeMode: "contain",
        borderRadius: 500,
    },
    personInfo: {
        paddingHorizontal: 10,
    },
    personName: {
        fontSize: 8,
    },
    personPositionWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    personPosition: {
        fontSize: 10,
        fontWeight: "700",
        color: "#000",
    },
    roundRed: {
        width: 8,
        height: 8,
        marginHorizontal: 5,
        backgroundColor: "#FF4040",
        borderRadius: 10,
    },
    personBtnWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    personBtnGreen: {
        width: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#0DE27E",
        justifyContent: "center",
        alignItems: "center",
    },
    personBtnTextGreen: {
        fontSize: 8,
        fontWeight: "700",
        color: "#0DE27E",
    },
    personBtnRed: {
        width: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#FF0057",
        justifyContent: "center",
        alignItems: "center",
    },
    personBtnTextRed: {
        fontSize: 8,
        fontWeight: "700",
        color: "#FF0057",
    },
});
