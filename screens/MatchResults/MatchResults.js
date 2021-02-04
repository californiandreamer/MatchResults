import React from "react";
import s from "./MatchResults.s";
import { View, Text, ScrollView, Image } from "react-native";
import GreenFrameImg from "../../assets/images/gradient-green.jpg";
import Header from "../../misc/Header/Header";
import Chart from "../../misc/Chart/Chart";
import Tab from "../../misc/Tab/Tab";

const MatchResults = () => {
    const headerProps = {
        supTitle: "Tuesday night FC",
        title: "Match Results",
    };

    const chartProps = {
        teamName1: "Tuesday Night Football",
        teamName2: "Gook Monkeys Football",
        teamType1: "Team 1",
        teamType2: "Team 2",
        teamPlayer1: {
            name: "Chris Mathew",
            position: "Capitan",
            status: "Fit",
        },
        teamPlayer2: {
            name: "Boris Gorero",
            position: "Capitan",
            status: "Fit",
        },
        teamCount1: 0,
        teamCount2: 3,
        statistic: "30/4",
        time: "Full time",
    };

    return (
        <ScrollView style={s.container}>
            <Header {...headerProps} />
            <Image style={s.backgroundImage} source={GreenFrameImg} />
            <View style={s.chartWrapper}>
                <Chart {...chartProps} />
            </View>
            <View style={s.tabs}>
                <Tab />
            </View>
        </ScrollView>
    );
};

export default MatchResults;
