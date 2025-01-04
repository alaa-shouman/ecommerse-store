import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
interface ListItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
}
const ListCard = ({ item }: { item: ListItem }) => (
  <View className="bg-white rounded-lg shadow-sm mx-2 mb-2 w-48">
    <Image
      source={{
        uri: item.image,
        cache: "force-cache",
      }}
      className="w-full h-20 rounded-t-lg"
      resizeMode="cover"
    />
    <View className="p-2">
      <Text className="text-sm font-bold text-gray-800" numberOfLines={1}>
        {item.title}
      </Text>
      <Text className="text-xs text-gray-600" numberOfLines={1}>
        {item.subtitle}
      </Text>
      <Text className="text-xs text-gray-500" numberOfLines={2}>
        {item.description}
      </Text>
      <Text className="text-xs font-bold text-primary">{item.price}</Text>
    </View>
  </View>
);

const List = ({ data }: { data: ListItem[] }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListCard item={item} />}
      contentContainerClassName="py-4"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default List;
