import { Stack } from "expo-router";
import "../global.css";
import { KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <I18nextProvider i18n={i18n}>
        <PaperProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
              animated={true}
              backgroundColor="white"
              barStyle={"dark-content"}
              translucent={true}
            />

            <Stack
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="(tab)" />
            </Stack>
          </SafeAreaView>
        </PaperProvider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
}
