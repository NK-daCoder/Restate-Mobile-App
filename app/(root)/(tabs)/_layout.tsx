import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import TabIcon from '@/components/TabIcon';
import icons from '@/constants/icons';

const TabLayout = () => {
  return (
    <Tabs 
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "white",
        position: "absolute",
        borderTopColor: "#0061FF1A",
        borderTopWidth: 1,
        minHeight: 68,
      }
    }}>
    
    <Tabs.Screen 
      name="index"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.home} title="Home" />
        )
      }}
    />

    <Tabs.Screen 
      name="explore"
      options={{
        title: "explore",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.search} title="Explore" />
        )
      }}
    />
    
    <Tabs.Screen 
      name="message"
      options={{
        title: "message",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.message} title="Message" />
        )
      }}
    />

    <Tabs.Screen 
      name="homes"
      options={{
        title: "homes",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.apartment} title="Property" />
        )
      }}
    />

    <Tabs.Screen 
      name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.person} title="Profile" />
        )
      }}
    />

    </Tabs>
  )
}

export default TabLayout;