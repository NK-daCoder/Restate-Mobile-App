import { View, Text, ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import { fontFamily, utilityStyles } from '@/constants/utilityStyles';


interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
    title: string;
}

const TabIcon = ({ focused, icon, title } : TabIconProps) => {
  return (
    <View style={[utilityStyles.flex, utilityStyles.pt2,utilityStyles.flexCol, utilityStyles.alignItemCenter]}>
      <Image source={icon} tintColor={focused ? utilityStyles.textSky300.color : utilityStyles.textGray300.color} style={utilityStyles.size_2}/>
      <Text style={[fontFamily.fontRubikSemiBold, focused ? utilityStyles.textSky300 : utilityStyles.textGray300, utilityStyles.wFull, utilityStyles.textSm]}>{title}</Text>
    </View>
  )
}

export default TabIcon