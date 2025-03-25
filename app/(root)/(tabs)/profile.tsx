import { View, Text, Image, TouchableOpacity, Alert, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { settings } from '@/constants/data'
import SettingsItem from '@/components/SettingsItem'
import { fontFamily, utilityStyles } from '@/constants/utilityStyles'
import { useGlobalContext } from '@/lib/globalProvider'
import { logout } from '@/lib/appwrite'

const profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          style: "destructive",
          
          onPress: async () => {
            const result = await logout();
            if (result) {
              Alert.alert("Success", "Logged out successfully");
              refetch();
            } else {
              Alert.alert("Error", "Failed to logout");
            }
          }
        }
      ]
    );
  };

  const handleSettingPress = (title) => {
    Alert.alert(title, "Coming soon");
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={settings}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingVertical: 16,
          paddingBottom: 80
        }}
        style={utilityStyles.hFull}
        ListHeaderComponent={
          <View style={{
            gap: 16,
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 24
          }}>
            <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignItemCenter, utilityStyles.wFull]}>
              <Text style={[utilityStyles.textXl, fontFamily.fontRubikSemiBold]}>Profile</Text>
              <Image source={icons.person} resizeMode='contain' style={utilityStyles.size_2}/>
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
                style={[
                  utilityStyles.size_5, 
                  utilityStyles.absolute, 
                  utilityStyles.right5, 
                  utilityStyles.bottom0
                ]} 
              />
            </TouchableOpacity>
            <Text style={{ 
              fontSize: 24, 
              fontFamily: 'Rubik-SemiBold',
              marginBottom: 8
            }}>
              {user?.name || 'Name Surname'}
            </Text>
          </View>
        }
        renderItem={({ item, index }) => {
          const isLogout = item.title.toLowerCase().includes('logout');
          
          return (
            <SettingsItem 
              key={index}
              title={item.title} 
              icon={item.icon} 
              textColor={isLogout ? utilityStyles.textRed600 : null}
              imageColor={isLogout ? utilityStyles.textRed600.color : null}
              onPress={() => isLogout ? handleLogout() : handleSettingPress(item.title)}
              containerStyle={isLogout ? {
                marginTop: 24,
                borderTopWidth: 1,
                borderTopColor: '#e5e7eb',
                paddingTop: 16
              } : null}
            />
          )
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default profile