import React from "react";
import s from "./Header.s";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LeftArrowImg from "../../assets/icons/left-arrow.png";

const Header = ({ supTitle, title }) => {
    return (
        <View style={s.container}>
            <TouchableOpacity style={s.button} activeOpacity={0.8}>
                <Image style={s.buttonImg} source={LeftArrowImg} />
            </TouchableOpacity>
            <View style={s.content}>
                <Text style={s.supTitle}>{supTitle}</Text>
                <Text style={s.title}>{title}</Text>
            </View>
            <TouchableOpacity style={s.button} activeOpacity={0.8} />
        </View>
    );
};

export default Header;
