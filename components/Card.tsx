import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { fontFamily, utilityStyles } from '@/constants/utilityStyles'
import icons from '@/constants/icons'

const FeaturedCard = ({ title, location, price, ratings, image }) => {
    return (
      <View style={[utilityStyles.relative, utilityStyles.h64, utilityStyles.w64, utilityStyles.mb4, utilityStyles.mx2]}>
        {/* Main Card Content */}
        <TouchableOpacity 
          onPress={() => Alert.alert("Card Activated", `You tapped ${title}`)} 
          style={[utilityStyles.hFull, utilityStyles.wFull, utilityStyles.relative, {overflow: 'hidden'}]}
          activeOpacity={0.8}
        >
          {/* Background Image with Overlay */}
          <Image 
            source={image} 
            resizeMode="cover" 
            style={[utilityStyles.wFull, utilityStyles.hFull, utilityStyles.absolute, utilityStyles.rounded2xl]}
          />
          
          {/* Dark overlay for better text visibility */}
          <View style={[
            utilityStyles.absolute, 
            utilityStyles.wFull, 
            utilityStyles.hFull,
            utilityStyles.rounded2xl,
            { backgroundColor: 'rgba(0,0,0,0.2)' }
          ]}/>
          
          {/* Rating Badge */}
          <View style={[
            utilityStyles.px2, 
            utilityStyles.absolute, 
            utilityStyles.top3, 
            utilityStyles.right3, 
            utilityStyles.flexRow, 
            utilityStyles.border,
            utilityStyles.roundedFull,
            utilityStyles.w16,
            { backgroundColor: 'rgba(255,255,255,0.5)' }
          ]}>
            <Image 
              source={icons.star} 
              resizeMode='contain' 
              style={ utilityStyles.size_2 }
            />
            <Text style={[fontFamily.fontRubikSemiBold, utilityStyles.textSm, utilityStyles.pt1, utilityStyles.px1]}>
              {ratings}
            </Text>
          </View>
          
          {/* Bottom Content */}
          <View style={[
            utilityStyles.px3, 
            utilityStyles.pb3, 
            utilityStyles.absolute, 
            utilityStyles.bottom0, 
            utilityStyles.wFull
          ]}>
            <Text 
              style={[
                utilityStyles.textWhite, 
                fontFamily.fontRubikSemiBold, 
                utilityStyles.textLg,
                utilityStyles.mb1
              ]}
              numberOfLines={1}
            >
              {title}
            </Text>
            
            <View style={[utilityStyles.flexRow, utilityStyles.alignItemCenter, utilityStyles.mb1]}>
              <Image 
                source={icons.location} 
                resizeMode='contain' 
                style={[utilityStyles.size_4, utilityStyles.mr1]}
              />
              <Text 
                style={[
                  utilityStyles.textWhite, 
                  fontFamily.fontRubikRegular, 
                  utilityStyles.textSm,
                  utilityStyles.flex1
                ]}
                numberOfLines={1}
              >
                {location}
              </Text>
            </View>
            
            <Text style={[
              utilityStyles.textWhite, 
              fontFamily.fontRubikBold, 
              utilityStyles.textXl
            ]}>
              {price}
            </Text>
          </View>
        </TouchableOpacity>
        
        {/* Favorite Button */}
        <TouchableOpacity 
          onPress={() => Alert.alert("Favorite", "Added to favorites!")} 
          style={[
            utilityStyles.size_3,
            utilityStyles.absolute,
            utilityStyles.bottom5,
            utilityStyles.right5,
          ]}
          activeOpacity={0.7}
        >
          <Image 
            source={icons.heart} 
            resizeMode='contain' 
            style={[utilityStyles.wFull, utilityStyles.hFull]}
          />
        </TouchableOpacity>
      </View>
    )
}
  

const Card = () => {
    return (
        <View>
            <Text>
                Featured Card
            </Text>
        </View>
    )
}

const Filter = () =>{
    return (
        <View>
            <Text>
                Filters
            </Text>
        </View>
    )
}

export { Card, FeaturedCard, Filter }