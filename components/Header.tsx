import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { fontFamily, utilityStyles } from '@/constants/utilityStyles'
import Search from './Search'

const Header = ( {avatar, user} ) => {
  const [greeting, setGreeting] = useState('');
  const [toggle, setToggle] = useState(false);

  const flexCenter = [ utilityStyles.flexRow, utilityStyles.alignItemCenter, utilityStyles.justifyBetween, utilityStyles.gap4]
  const itemsCenter = [ utilityStyles.flexRow, utilityStyles.alignItemCenter ];

  useEffect(() => {
    // Function to get the appropriate greeting based on current time
    const getGreeting = () => {
      const hour = new Date().getHours();
      
      if (hour < 12) {
        return 'Morning';
      } else if (hour < 18) {
        return 'Afternoon';
      } else {
        return 'Evening';
      }
    };

    setGreeting(getGreeting());
  }, []);

  const toggleSearchBar = () => {
    setToggle(state => !state);
  }

  return (
    <View>
      <View style={ flexCenter }>
        <View style={ itemsCenter } >
          <Image source={ avatar } resizeMode='contain' style={ [utilityStyles.size_5, utilityStyles.roundedFull, utilityStyles.mr2]}/>
          <View>
            <Text style={ [utilityStyles.textGray500, utilityStyles.textSm, fontFamily.fontRubikRegular] }>Good {greeting}</Text>
            <Text style={ fontFamily.fontRubikRegular }>{user}</Text>
          </View>
        </View>
        <View style={ flexCenter }>
          <TouchableOpacity onPress={ toggleSearchBar } style={ utilityStyles.size_2 }>
            <Image source={icons.search} resizeMode='contain' style={ [utilityStyles.hFull, utilityStyles.wFull] }/> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Notification Activated", "Comeing Soon")} style={ utilityStyles.size_2 }>
            <Image source={icons.bell} resizeMode='contain' style={ [utilityStyles.hFull, utilityStyles.wFull] }/> 
          </TouchableOpacity>
        </View>

      </View>

      {
        toggle ? <Search /> : null
      }
    </View>
    
  )
}

export default Header