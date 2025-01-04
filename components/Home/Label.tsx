import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Label = ({ title }: { title: string }) => {
  return (
    <View className="flex-row items-center m-3 ">
      <Text className="font-bold">{title}</Text>
      <Text className="ml-auto">
        <TouchableOpacity onPress={() => console.log("she")}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Label;
