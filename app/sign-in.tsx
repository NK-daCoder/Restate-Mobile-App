import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { fontFamily, utilityStyles } from '@/constants/utilityStyles'
import icons from '@/constants/icons'

const handleLogIn = () =>{
  Alert.alert("✨ Logged In", "✅ You Have successfully logged into the app have a awesome day")
}

const SignIn = () => {
  return (
    <SafeAreaView style={ [utilityStyles.hFull, utilityStyles.bgWhite] }>
      <View style={ [utilityStyles.relative, utilityStyles.h3_4] }>
        <Image source={images.onboarding} style={[utilityStyles.wFull, utilityStyles.hFull]} resizeMode="contain"/>
      
        <View style={ [utilityStyles.px3, utilityStyles.py3, utilityStyles.absolute, utilityStyles.bottomN40, utilityStyles.wFull, utilityStyles.flexCol, utilityStyles.justifyCenterXY ] }>
          <Text style={ [utilityStyles.text3xl, utilityStyles.px3, fontFamily.fontRubikSemiBold] }>Welcome To <Text style={[utilityStyles.textSky300]}>Restate</Text></Text>
          <Text style={[utilityStyles.textCenter, utilityStyles.textGray500, utilityStyles.textBase, fontFamily.fontRubikRegular, utilityStyles.mb2, fontFamily.fontRubikRegular]}>Lets get you one step closer to {"\n"} your dream home</Text>
          <TouchableOpacity onPress={ handleLogIn } style={[utilityStyles.flexRow, utilityStyles.gap3, utilityStyles.mt4, utilityStyles.border, utilityStyles.roundedFull, utilityStyles.py3, utilityStyles.px4, utilityStyles.flexRow, utilityStyles.alignItemCenter]}>
            <Image source={icons.google} style={[utilityStyles.size_3]} resizeMode="contain"/>
            <Text>Continue With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default SignIn