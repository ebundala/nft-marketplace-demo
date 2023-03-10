import React from "react";
import { TouchableOpacity, Text, Image, GestureResponderEvent, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

type ButtonProps = {
  imgUrl?: ImageSourcePropType | undefined,
  handlePress?:((event: GestureResponderEvent) => void) | undefined,
  right?:number | undefined,top?:number | undefined, left?:number | undefined,
}
export const CircleButton = ({ imgUrl, handlePress, ...props }:ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

type RectButtonProps = ButtonProps&{
  minWidth?:string | number | undefined,
  fontSize?:  number | undefined
}
export const RectButton = ({ minWidth, fontSize, handlePress, ...props }:RectButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
