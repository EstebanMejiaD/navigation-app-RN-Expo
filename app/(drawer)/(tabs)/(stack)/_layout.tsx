import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "menu"}
            size={24}
            color={tintColor}
            onPress={() =>
              onHeaderLeftClick(canGoBack !== undefined ? canGoBack : false)
            }
            className={Platform.OS === "android" ? "mr-5" : "ml-1"}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
