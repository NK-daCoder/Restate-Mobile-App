import { Card, CardFilter, FeaturedCard } from "@/components/Card";
import Header from "@/components/Header";
import { cards, featuredCards } from "@/constants/data";
import images from "@/constants/images";
import { fontFamily, utilityStyles } from "@/constants/utilityStyles";
import { useGlobalContext } from "@/lib/globalProvider";
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";




export default function Index() {

  const { user } = useGlobalContext()

  return (
    <SafeAreaView style={[utilityStyles.hFull, utilityStyles.px1, utilityStyles.bgWhite]}>
      <FlatList 
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingVertical: 16,
          
        }}
        style={utilityStyles.hFull}
        ListHeaderComponent={() => (
            <View style={[utilityStyles.px2, utilityStyles.mt3, utilityStyles.flexCol, utilityStyles.gap4]}>
              <Header avatar={ user?.avatar ? { uri: user.avatar } : images.avatar } user={ user?.name ? user?.name : "Name Surname" }/>
              <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignItemCenter, utilityStyles.mt3]}>
                <Text style={[fontFamily.fontRubikSemiBold]}>Featured</Text>
                <TouchableOpacity onPress={() => console.log("pressed see more")}>
                  <Text style={[fontFamily.fontRubikSemiBold, utilityStyles.textSky400]}>See All</Text>
                </TouchableOpacity>
              </View>

              <FlatList 
                  horizontal
                  data={featuredCards}
                  renderItem={({item}) => (
                    <FeaturedCard 
                      title={item.title} 
                      location={item.location} 
                      price={item.price} 
                      ratings={item.rating} 
                      image={item.image}
                    />
                  )}
                  keyExtractor={item => item.id}
              />
              <View style={ [utilityStyles.flexRow, utilityStyles.justifyBetween] }>
                <Text style={ fontFamily.fontRubikSemiBold }>Recommended</Text>
                <TouchableOpacity onPress={() => console.log("pressed see more")}>
                  <Text style={[fontFamily.fontRubikSemiBold, utilityStyles.textSky400]}>See All</Text>
                </TouchableOpacity>
              </View>
              <CardFilter />
            </View>
          )
        }

        data={cards}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between', // or 'space-around'
          gap: 2, // Add this if you're using React Native 0.71+
        }}
        renderItem={({ item }) => (
          <View>
            <Card onPress={() => Alert.alert(`${item.title} Button Activated`)} image={item.image} title={item.title} location={item.location} price={item.price} ratings={item.rating}/>
          </View>
        )}
        keyExtractor={(item, _index) => `card-${_index}`}
        showsVerticalScrollIndicator={false}
       
        contentContainerStyle={ {paddingBottom: 100} }
      />
    </SafeAreaView>
  );
}