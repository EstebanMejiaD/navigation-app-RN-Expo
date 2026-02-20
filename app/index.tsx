import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-5xl" style={{ fontFamily: "WorkSans-Black" }}>
          Hola mundo
        </Text>

        <Text className="text-4xl font-work-black">Hola mundo</Text>

        <Text className="text-3xl font-work-medium">Hola mundo</Text>

        <Text className="text-2xl font-work-light">Hola mundo</Text>

        <Text className="text-xl">Hola mundo</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
