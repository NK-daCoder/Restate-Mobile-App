import { Card, CardFilter, FeaturedCard } from "@/components/Card";
import Header from "@/components/Header";
import { cards, featuredCards } from "@/constants/data";
import images from "@/constants/images";
import { fontFamily, utilityStyles } from "@/constants/utilityStyles";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/globalProvider";
import seed from "@/lib/seed";
import { useAppwrite } from "@/lib/useAppwrite";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Alert, Button, FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";




export default function Index() {

  const { user } = useGlobalContext()

  // extracting local search params such as queries and filters
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const { data: latestProperties, loading: latestPropertiesLoading } = useAppwrite({ fn: getLatestProperties });
  const { data: properties, refetch, loading } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      // limit: <number of elements per page>
      limit: 6,
    },
    // skip a specific amount of data needed
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);


  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  return (
    <SafeAreaView style={[utilityStyles.hFull, utilityStyles.px1, utilityStyles.bgWhite]}>
      { /* <Button title="Seed" onPress={seed} />*/}
      
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
                  data={latestProperties}
                  renderItem={({item}) => (
                    <FeaturedCard 
                      
                      item={item}
                      onPress={() => handleCardPress(item.$id)}
                    />
                  )}
                  keyExtractor={(item) => item.$id}
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

        data={properties}
        numColumns={2}
        columnWrapperStyle={ utilityStyles.gap3 }
        renderItem={({ item }) => (
            <Card 
              item={item} 
              onPress={() => handleCardPress(item.$id)}  
            /> 
        )}
        keyExtractor={(item, _index) => `card-${_index}`}
        showsVerticalScrollIndicator={false}
       
        contentContainerStyle={ {paddingBottom: 100} }
      />
    </SafeAreaView>
  );
}