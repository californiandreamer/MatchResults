import React from "react";
import s from "./Chart.s";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import BallGreen from "../../assets/icons/football-green.png";
import BallRed from "../../assets/icons/football-red.png";
import GradientGreenImg from "../../assets/images/gradient-green.jpg";
import GradientRedImg from "../../assets/images/gradient-red.jpg";
import PersonImg from "../../assets/images/person.jpg";

const Chart = ({
    teamName1,
    teamName2,
    teamType1,
    teamType2,
    teamPlayer1,
    teamPlayer2,
    teamCount1,
    teamCount2,
    statistic,
    time,
}) => {
    return (
        <View style={s.container}>
            <View style={s.cardsWrapper}>
                <View style={s.teamCardContainer}>
                    <View style={s.teamCard}>
                        <View style={s.wrapper}>
                            <Image style={s.teamImg} source={BallGreen} />
                        </View>
                        <View style={s.wrapper}>
                            <Text style={s.teamName}>{teamName1}</Text>
                        </View>
                        <TouchableOpacity
                            style={s.teamButton}
                            activeOpacity={0.8}
                        >
                            <ImageBackground
                                style={s.teamButtonImg}
                                source={GradientGreenImg}
                                imageStyle={s.teamImageStyle}
                            >
                                <Text style={s.teamButtonText}>
                                    {teamType1}
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={s.person}>
                        <View style={s.personWrapper}>
                            <Image style={s.personImg} source={PersonImg} />
                            <View style={s.personInfo}>
                                <Text style={s.personName}>
                                    {teamPlayer1.name}
                                </Text>
                                <View style={s.personPositionWrapper}>
                                    <Text style={s.personPosition}>
                                        {teamPlayer1.position}
                                    </Text>
                                    <View style={s.roundRed} />
                                </View>
                            </View>
                        </View>
                        <View style={s.personBtnWrapper}>
                            <TouchableOpacity
                                style={s.personBtnGreen}
                                activeOpacity={0.8}
                            >
                                <Text style={s.personBtnTextGreen}>
                                    {teamPlayer1.status}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={s.totalContainer}>
                    <View style={s.wrapper}>
                        <Text style={s.totalStat}>{statistic}</Text>
                    </View>
                    <View style={s.totalWrapper}>
                        <ImageBackground
                            style={s.totalBgImg}
                            source={GradientRedImg}
                            imageStyle={s.totalImageStyle}
                        >
                            <Text style={s.totalCount}>
                                {teamCount1}:{teamCount2}
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={s.wrapper}>
                        <Text style={s.totalTime}>{time}</Text>
                    </View>
                </View>
                <View style={s.teamCardContainer}>
                    <View style={s.teamCard}>
                        <View style={s.wrapper}>
                            <Image style={s.teamImg} source={BallRed} />
                        </View>
                        <View style={s.wrapper}>
                            <Text style={s.teamName}>{teamName2}</Text>
                        </View>
                        <TouchableOpacity
                            style={s.teamButton}
                            activeOpacity={0.8}
                        >
                            <ImageBackground
                                style={s.teamButtonImg}
                                source={GradientRedImg}
                                imageStyle={s.teamImageStyle}
                            >
                                <Text style={s.teamButtonText}>
                                    {teamType2}
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={s.person}>
                        <View style={s.personWrapper}>
                            <Image style={s.personImg} source={PersonImg} />
                            <View style={s.personInfo}>
                                <Text style={s.personName}>
                                    {teamPlayer2.name}
                                </Text>
                                <View style={s.personPositionWrapper}>
                                    <Text style={s.personPosition}>
                                        {teamPlayer2.position}
                                    </Text>
                                    <View style={s.roundRed} />
                                </View>
                            </View>
                        </View>
                        <View style={s.personBtnWrapper}>
                            <TouchableOpacity
                                style={s.personBtnRed}
                                activeOpacity={0.8}
                            >
                                <Text style={s.personBtnTextRed}>
                                    {teamPlayer2.status}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Chart;
