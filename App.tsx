import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./styles.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-green-500 font-bold">
        Open up App.tsx to start working on your app! Aimade Anouar
      </Text>
      <StatusBar />
    </View>
  );
}
