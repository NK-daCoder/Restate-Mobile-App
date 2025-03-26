import { View, Text, Image, TextInput, TouchableOpacity, Alert, Touchable } from 'react-native'
import React, { useState } from 'react'
import { useDebouncedCallback } from "use-debounce";
import icons from '@/constants/icons';
import { utilityStyles } from '@/constants/utilityStyles';
import { router, useLocalSearchParams, usePathname } from 'expo-router';

const Search = () => {

    // constant styling
    const flexStyles = [utilityStyles.flexRow, utilityStyles.alignItemCenter]

    // functionality

    const getCurrentScreenPath = usePathname(); // getting current path of the screen
    const extractedParams = useLocalSearchParams(); // extracting query parameters from the URL (if any)
    const [search, setSearch] = useState(extractedParams.query); // Initializing state for search input with the query parameter (if available)

    // Creating a debounced function to update the search query in the URL after 500ms
    const debouncedSearch = useDebouncedCallback((text: string) => {
        router.setParams({ query: text }); // Updates the query parameter in the URL
    }, 500);

    const handleSearch = (text: string) => {
        setSearch(text); // Updates local search state
        debouncedSearch(text); // Calls the debounced function to update the URL
    };
    
    
    return (
        <View style={ [utilityStyles.mt4, utilityStyles.border, utilityStyles.roundedFull, utilityStyles.flexRow, utilityStyles.justifyBetween] }>
            <View style={ [utilityStyles.flexRow, utilityStyles.alignItemCenter] }>
                <TouchableOpacity onPress={() => Alert.alert("Search Activated", "Coming Soon")} style={ [utilityStyles.size_4, utilityStyles.px2] }>
                    <Image source={icons.search} resizeMode="contain" style={ [utilityStyles.wFull, utilityStyles.hFull] }/>
                </TouchableOpacity>
                <TextInput 
                    value={ search }
                    onChangeText={handleSearch}
                    placeholder='Search For A Property'
                    style={ [utilityStyles.px4, utilityStyles.borderLeft] }
                />
            </View>
            <View style={ flexStyles }>
                <TouchableOpacity onPress={() => Alert.alert("Search Filter Activated", "Comeing Soon")} style={ [utilityStyles.size_2, utilityStyles.mr3] }>
                    <Image source={icons.filter} resizeMode="contain" style={ [utilityStyles.hFull, utilityStyles.wFull] }/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search;