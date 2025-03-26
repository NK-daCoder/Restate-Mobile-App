import { FeaturedCard } from "@/components/Card";
import Header from "@/components/Header";
import { featuredCards } from "@/constants/data";
import { fontFamily, utilityStyles } from "@/constants/utilityStyles";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={[utilityStyles.hFull, utilityStyles.px3, utilityStyles.bgWhite]}>
      <FlatList 
        data={featuredCards}
        numColumns={2}
        ListHeaderComponent={
          <View style={[utilityStyles.px3, utilityStyles.mt3, utilityStyles.flexCol, utilityStyles.gap4]}>
            <Header />
            <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignItemCenter, utilityStyles.mb4]}>
              <Text style={[fontFamily.fontRubikSemiBold]}>Featured</Text>
              <TouchableOpacity>
                <Text style={[fontFamily.fontRubikSemiBold, utilityStyles.textSky400]}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <FeaturedCard 
            title={item.title} 
            location={item.location} 
            price={item.price} 
            ratings={item.rating} 
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
       
        contentContainerStyle={utilityStyles.pb4}
      />
    </SafeAreaView>
  );
}