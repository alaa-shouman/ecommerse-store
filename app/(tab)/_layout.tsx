import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import "../../global.css"
const _layout = () => {


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "add",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={24} color="red" />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "chats",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat-bubble-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "menu",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
