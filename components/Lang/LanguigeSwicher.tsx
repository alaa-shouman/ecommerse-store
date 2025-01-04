import { TouchableOpacity, Text } from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    await AsyncStorage.setItem("user-language", newLang);
    await i18n.changeLanguage(newLang);
  };

  return (
    <TouchableOpacity
      onPress={toggleLanguage}
      className="p-2 bg-gray-100 rounded-lg mx-2"
    >
      <Text className="font-medium">
        {i18n.language === "en" ? "Eng" : "ar"}
      </Text>
    </TouchableOpacity>
  );
};

export default LanguageSwitcher;
