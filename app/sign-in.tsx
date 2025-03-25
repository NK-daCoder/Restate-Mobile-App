import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { fontFamily, utilityStyles } from '@/constants/utilityStyles'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/globalProvider'
import { Redirect } from 'expo-router'


const SignIn = () => {

  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) {
    return <Redirect href="/" />
  }

  const handleLogIn = async () =>{
    const result = await login();
  
    if (result) {
      Alert.alert("✨Login SuccessFul", `logged in: ${result}`);
      refetch();
    } else {
      Alert.alert("😭 Login Unsuccessful", `logged in: ${result}`);
    }
  
  
  }

  return (
    <SafeAreaView style={ [utilityStyles.hFull, utilityStyles.bgWhite] }>
      <View style={ [utilityStyles.relative, utilityStyles.h3_4] }>
        <Image source={images.onboarding} style={[utilityStyles.wFull, utilityStyles.hFull]} resizeMode="contain"/>
      
        <View style={ [utilityStyles.px3, utilityStyles.py3, utilityStyles.absolute, utilityStyles.bottomN40, utilityStyles.wFull, utilityStyles.flexCol, utilityStyles.justifyCenterXY ] }>
          <Text style={ [utilityStyles.textBase, utilityStyles.px3, fontFamily.fontRubikSemiBold, utilityStyles.textGray300, utilityStyles.uppercase] }>Welcome To Restate</Text>
          <Text style={ [utilityStyles.textCenter, utilityStyles.textGray800, utilityStyles.text2xl, fontFamily.fontRubikBold, utilityStyles.mb2, fontFamily.fontRubikMedium] }>One step closer to your {"\n"}<Text style={ utilityStyles.textSky300 }>Dream Home</Text></Text>
          <TouchableOpacity onPress={ handleLogIn } style={[utilityStyles.flexRow, utilityStyles.gap3, utilityStyles.mt4, utilityStyles.border, utilityStyles.roundedFull, utilityStyles.py3, utilityStyles.px4, utilityStyles.flexRow, utilityStyles.alignItemCenter]}>
            <Image source={icons.google} style={[utilityStyles.size_3]} resizeMode="contain"/>
            <Text style={ fontFamily.fontRubikRegular }>Continue With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default SignIn