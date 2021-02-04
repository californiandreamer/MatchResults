import React from "react";
import s from "./Tab.s";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Image1 from "../../assets/images/image.jpg";

const Tab = () => {
    return (
        <View style={s.container}>
            <View style={s.row}>
                <TouchableOpacity style={s.buttonGreen} activeOpacity={0.8}>
                    <Text style={s.buttonTextWhite}>Highlights</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.button} activeOpacity={0.8}>
                    <Text style={s.buttonText}>Summary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.button} activeOpacity={0.8}>
                    <Text style={s.buttonText}>Stats</Text>
                </TouchableOpacity>
            </View>
            <View style={s.grid}>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
                <View style={s.gridItem}>
                    <Image style={s.gridImg} source={Image1} />
                </View>
            </View>
        </View>
    );
};

export default Tab;
