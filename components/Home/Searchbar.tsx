import { View } from "react-native";
import React, { useCallback, useState } from "react";
import { Searchbar as PaperSearchbar } from "react-native-paper";
import debounce from "lodash/debounce";
import { useTranslation } from "react-i18next";
const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim()) {
        setIsLoading(true);
        try {
          console.log("Searching for:", query);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setIsLoading(false);
        }
      }
    }, 600),
    []
  );

  // Immediate UI update, delayed search
  const handleSearch = (query: string) => {
    setSearchQuery(query); // Update UI immediately
    debouncedSearch(query); // Trigger delayed search
  };

  return (
    <View className="mx-4 my-2">
      <PaperSearchbar
        placeholder={t("What are you looking for?")}
        onChangeText={handleSearch}
        value={searchQuery}
        mode="bar"
        elevation={1}
        style={{
          borderRadius: 16,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 3,
        }}
        inputStyle={{
          fontSize: 16,
        }}
        iconColor="#374151"
        placeholderTextColor="#9CA3AF"
        onSubmitEditing={() => console.log("Submit:", searchQuery)}
      />
    </View>
  );
};

export default Searchbar;
