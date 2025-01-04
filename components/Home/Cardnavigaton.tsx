import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
interface CardNavigationProps {
  title: string;
  route?: string;
  content?: string;
  icon?: React.ReactNode;
}
const CardNavigation = (props: CardNavigationProps) => {
  const { title, route, icon, content } = props;
  return (
    <TouchableOpacity onPress={() => console.log("she")}>
      <View className="bg-white p-4 rounded-xl shadow-sm w-28">
        <View className="flex items-center justify-center h-12">{icon}</View>
        <Text className="text-gray-800 font-semibold text-sm text-center">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardNavigation;
