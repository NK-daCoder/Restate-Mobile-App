import { View, Text, Image, TouchableOpacity, Alert, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { settings } from '@/constants/data'
import SettingsItem from '@/components/SettingsItem'
import { fontFamily, utilityStyles } from '@/constants/utilityStyles'

const profile = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: "100%" }}>
      <FlatList
        data={settings}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingVertical: 16,
          // provides some space for scroll
          paddingBottom: 80
        }}
        style={ utilityStyles.hFull }

        ListHeaderComponent={
          <View style={{
            gap: 16,
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 24
          }}>
            <View style={ [utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignItemCenter, utilityStyles.wFull] }>
              <Text style={ [ utilityStyles.textXl, fontFamily.fontRubikSemiBold ] }>Profile</Text>
              <Image source={icons.person} resizeMode='contain' style={ utilityStyles.size_2 }/>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("Profile Settings", "Coming Soon")}>
              <Image 
                source={images.avatar} 
                resizeMode='cover' 
                style={{ 
                  width: 250, 
                  height: 250, 
                  borderRadius: 100000 
                }} 
              />
              <Image 
                source={icons.edit} 
                resizeMode='contain' 
                style={
                  [
                    utilityStyles.size_5, 
                    utilityStyles.absolute, 
                    utilityStyles.right5, 
                    utilityStyles.bottom0
                  ]
                } 
              />
            </TouchableOpacity>
            <Text style={{ 
              fontSize: 24, 
              fontFamily: 'Rubik-SemiBold',
              marginBottom: 8
            }}>
              Name Surname
            </Text>
          </View>
        }

        renderItem={({ item, index }) => (
          <SettingsItem 
            key={index}
            title={item.title} 
            icon={item.icon} 
            onPress={() => Alert.alert("Settings Activated", "Coming Soon")} 
          />
        )}

        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default profile