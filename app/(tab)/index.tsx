import { View, Text, ScrollView } from "react-native";
import React from "react";
import Searchbar from "@/components/Home/Searchbar";
import CardNavigation from "@/components/Home/Cardnavigaton";
import LanguageSwitcher from "@/components/Lang/LanguigeSwicher";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import Label from "@/components/Home/Label";
import List from "@/components/Home/List";
import { mockData } from "@/data/Listdata";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="pt-4 pb-20">
        <View className="flex-row items-center justify-between px-1">
          <View className="flex-1">
            <Searchbar />
          </View>
          <LanguageSwitcher />
        </View>
        <View className="flex flex-row flex-wrap justify-center mt-4 gap-4">
          <CardNavigation
            title={t("Property For Rent")}
            route="/categories"
            content="test"
            icon={<FontAwesome name="building" size={24} color="red" />}
          />
          <CardNavigation
            title={t("Property For Sale")}
            icon={<FontAwesome name="building" size={24} color="red" />}
          />
          <CardNavigation
            title={t("Off-Plan Propertes")}
            icon={<FontAwesome6 name="building-wheat" size={24} color="red" />}
          />
        </View>
        <View className="flex flex-row flex-wrap justify-center mt-4 gap-4">
          <CardNavigation
            title={t("Rooms For Rent")}
            icon={<FontAwesome5 name="door-open" size={24} color="red" />}
          />
          <CardNavigation
            title={t("Motors")}
            icon={<AntDesign name="car" size={24} color="red" />}
          />
          <CardNavigation
            title={t("Motors")}
            icon={<AntDesign name="car" size={24} color="red" />}
          />
        </View>
        <View className="flex flex-row flex-wrap justify-center mt-4 gap-4">
          <CardNavigation
            title={t("Motors")}
            icon={<AntDesign name="car" size={24} color="red" />}
          />
          <CardNavigation
            title={t("Motors")}
            icon={<AntDesign name="car" size={24} color="red" />}
          />
          <CardNavigation
            title={t("Motors")}
            icon={<AntDesign name="car" size={24} color="red" />}
          />
        </View>
        <Label title={t("Popular in Residential for Rent")} />
        <List data={mockData} />
        <Label title={t("Popular in Residential for Rent")} />
        <List data={mockData} />
        <Label title={t("Popular in Residential for Rent")} />
        <List data={mockData} />
        <Label title={t("Popular in Residential for Rent")} />
        <List data={mockData} />
      </View>
    </ScrollView>
  );
};

export default index;
