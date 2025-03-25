import { View, Text, ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import icons from '@/constants/icons';
import { fontFamily, utilityStyles } from '@/constants/utilityStyles';

interface SettingsItemProp {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    showArrow?: boolean;
}

const SettingsItem = ({ title, onPress, icon, showArrow=true }:SettingsItemProp) => {
  return (
    <TouchableOpacity onPress={onPress} style={ [utilityStyles.flexRow, utilityStyles.alignItemCenter, utilityStyles.justifyBetween, utilityStyles.mt2, utilityStyles.p2] }>
        <View style={ [utilityStyles.flexRow, utilityStyles.gap3, utilityStyles.alignItemCenter] }>
            <Image source={icon} resizeMode="contain" style={[ utilityStyles.size_3 ]}/>
            <Text style={ fontFamily.fontRubikRegular }>{title}</Text>
        </View>
        { showArrow && <Image source={icons.rightArrow} resizeMode="contain" style={ utilityStyles.size_2 }/> }
    </TouchableOpacity>
  )
}

export default SettingsItem