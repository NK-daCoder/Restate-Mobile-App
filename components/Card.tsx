import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native'
import { useState } from 'react'
import { Image } from 'react-native'
import { fontFamily, utilityStyles } from '@/constants/utilityStyles'
import icons from '@/constants/icons'
import { categories } from '@/constants/data'
import { router, useLocalSearchParams } from 'expo-router'
import { Models } from 'react-native-appwrite'


interface CardProps {
  title: string;
  location: string;
  price: string | number;
  ratings?: number;
  image: any; // ImagePropType or your specific type
  onPress?: () => void;
  category?: string;
  item: Models.Document;
}

const FeaturedCard = ({ title, onPress, location, price, ratings, image, item } : CardProps) => {
    return (
      <View style={[utilityStyles.relative, utilityStyles.h68, utilityStyles.w64, utilityStyles.mb4, utilityStyles.mr2]}>
        {/* Main Card Content */}
        <TouchableOpacity 
          onPress={ onPress } 
          style={[utilityStyles.hFull, utilityStyles.wFull, utilityStyles.relative, {overflow: 'hidden'}]}
          activeOpacity={0.8}
        >
          {/* Background Image with Overlay */}
          <Image 
            source={{ uri: item.image }} 
            resizeMode="cover" 
            style={[utilityStyles.wFull, utilityStyles.hFull, utilityStyles.absolute, utilityStyles.rounded2xl]}
          />
          
          {/* Dark overlay for better text visibility */}
          <View style={[
            utilityStyles.absolute, 
            utilityStyles.wFull, 
            utilityStyles.hFull,
            utilityStyles.rounded2xl,
            { backgroundColor: 'rgba(0,0,0,0.40)' }
          ]}/>
          
          {/* Rating Badge */}
          <View style={[
            utilityStyles.px2,
            utilityStyles.py1, 
            utilityStyles.absolute, 
            utilityStyles.top3, 
            utilityStyles.right3, 
            utilityStyles.flexRow, 
            utilityStyles.border,
            utilityStyles.roundedFull,
            utilityStyles.w16,
            { backgroundColor: 'rgba(255,255,255,0.5)' },
            utilityStyles.justifyCenterXY
          ]}>
            <Image 
              source={icons.star} 
              resizeMode='contain' 
              style={ utilityStyles.size_2 }
            />
            <Text style={[fontFamily.fontRubikSemiBold, utilityStyles.textSm, utilityStyles.pt1, utilityStyles.px1]}>
              {item.rating}
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
                utilityStyles.textSm,
                utilityStyles.mb1,
                utilityStyles.uppercase
              ]}
              numberOfLines={1}
            >
              {item.name}
            </Text>
            
            <View style={[utilityStyles.flexRow, utilityStyles.alignItemCenter, utilityStyles.mb1]}>
              <Image 
                source={icons.location} 
                resizeMode='contain' 
                style={[utilityStyles.size_4, utilityStyles.mr1, utilityStyles.size_2]}
                tintColor={utilityStyles.textWhite.color}
              />
              <Text 
                style={[
                  utilityStyles.textWhite, 
                  fontFamily.fontRubikRegular, 
                  utilityStyles.textBase,
                  
                ]}
                numberOfLines={1}
              >
                {item.address}
              </Text>
            </View>
            
            <Text style={[
              utilityStyles.textWhite, 
              fontFamily.fontRubikBold, 
              utilityStyles.text2xl
            ]}>
              R {item.price}
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
  

const Card = ({ onPress, image, title, location, price, ratings , item } : CardProps) => {
    return (
        <View>
            <TouchableOpacity onPress={ onPress } style={ [utilityStyles.relative, utilityStyles.wFull, utilityStyles.px1, utilityStyles.my2 ,utilityStyles.rounded2xl, utilityStyles.shadowSm, utilityStyles.px2, utilityStyles.py3] }>
              <Image source={ {uri: item.image} } resizeMode='cover' style={ [utilityStyles.wFull, utilityStyles.h32, utilityStyles.roundedXl] }/>
              
              <View style={[
                utilityStyles.px2, 
                utilityStyles.absolute, 
                utilityStyles.top5, 
                utilityStyles.right3, 
                utilityStyles.flexRow, 
                utilityStyles.border,
                utilityStyles.roundedFull,
                
                { backgroundColor: 'rgba(255,255,255,0.5)' }
              ]}>
                <Image 
                  source={icons.star} 
                  resizeMode='contain' 
                  style={ utilityStyles.size_2 }
                />
                <Text style={[fontFamily.fontRubikSemiBold, utilityStyles.textSm, utilityStyles.pt1, utilityStyles.px1]}>
                  {item.rating}
                </Text>
              </View>
              <View style={[utilityStyles.flexCol]}>
                <Text style={ [utilityStyles.textSm, fontFamily.fontRubikRegular, utilityStyles.uppercase, utilityStyles.mt2] }>{item.name}</Text>
                <View style={ [utilityStyles.flexRow, utilityStyles.mb2, utilityStyles.alignItemCenter ] }>
                  <Image source={icons.location} resizeMode='contain' style={[utilityStyles.size_2]} />
                  <Text style={ [{fontSize: 13}, fontFamily.fontRubikRegular, utilityStyles.w32] }>{item.address}</Text>
                </View>
                <View style={ [utilityStyles.flexRow, utilityStyles.alignItemCenter, utilityStyles.justifyBetween] }>
                  <Text style={ [utilityStyles.textSky400, utilityStyles.textBase, fontFamily.fontRubikSemiBold] }>R {item.price}</Text>
                  <TouchableOpacity onPress={() => Alert.alert("Favourite Activated", `${item.name}`)}>
                    <Image source={icons.heart} resizeMode='contain' style={[utilityStyles.size_2]} tintColor={utilityStyles.textGray500.color}/>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
        </View>
    )
}


const CardFilter = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      router.setParams({ filter: "" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 0, marginBottom: 12 }}
      keyExtractor={(item) => `filter-${item.category}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.category)}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 999,
          
            borderColor: '#e5e7eb',
            backgroundColor: selectedCategory === item.category ? '#38bdf8' : 'white',
          }}
        >
          <Text
            style={{
              color: selectedCategory === item.category ? 'white' : '#6b7280',
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export { Card, FeaturedCard, CardFilter }