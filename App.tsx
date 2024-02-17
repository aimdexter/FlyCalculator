import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { Pressable, StatusBar, Switch, Text, View } from "react-native";
import "./styles.css";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(
    colorScheme === "dark" ? true : false
  );
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const color = isEnabled ? "white" : "black";
  const backgroundColor = isEnabled
    ? ["#373737", "#000309"]
    : ["#FEFEFE", "#E5E5E5"];
  const keyboardBackgroundColor = isEnabled
    ? ["#002235", "white"]
    : ["#FEFEFE", "#E5E5E5"];

  return (
    <>
      <LinearGradient
        // Button Linear Gradient
        colors={backgroundColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View className="h-full flex justify-between">
          <View className="flex p-4 flex-row items-center justify-between">
            <Switch
              trackColor={{ false: "gray", true: "gray" }}
              thumbColor={isEnabled ? "white" : "black"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              onChange={toggleColorScheme}
            />
            <Octicons name="history" size={24} color={color} />
          </View>
          <View className="p-4 flex gap-[20px]">
            <Text className="font-medium text-[22px] self-end dark:text-[#FBFBFB] dark:opacity-50">
              1.000 × 4 + 2 × 1
            </Text>
            <View className="flex flex-row justify-between">
              <Text className="dark:text-white font-semibold text-[40px]">
                =
              </Text>
              <Text className="dark:text-white font-semibold text-[40px] self-end">
                4002
              </Text>
            </View>
          </View>
          <LinearGradient
            // Button Linear Gradient
            colors={keyboardBackgroundColor}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 3 }}
          >
            <View className="flex flex-row justify-between">
              <View className="flex bg-red-500 w-full flex-1 gap-y-[10px]">
                <View className="flex flex-row gap-x-[25px]">
                  <Pressable
                    className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                    onPress={() => {
                      console.log("hello");
                    }}
                  >
                    <Text className="dark:text-white font-semibold text-[26px]">
                      AC
                    </Text>
                  </Pressable>
                  <Pressable
                    className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                    onPress={() => {
                      console.log("hello");
                    }}
                  >
                    <Text className="dark:text-white font-semibold text-[26px]">
                      +/-
                    </Text>
                  </Pressable>
                  <Pressable
                    className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                    onPress={() => {
                      console.log("hello");
                    }}
                  >
                    <Text className="dark:text-white font-semibold text-[26px]">
                      %
                    </Text>
                  </Pressable>
                </View>
                <View className=" flex gap-y-[10px]">
                  <View className="flex flex-row gap-x-[25px]">
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        1
                      </Text>
                    </Pressable>
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        2
                      </Text>
                    </Pressable>
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        3
                      </Text>
                    </Pressable>
                  </View>
                  <View className="flex flex-row gap-x-[25px]">
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        4
                      </Text>
                    </Pressable>
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        5
                      </Text>
                    </Pressable>
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        6
                      </Text>
                    </Pressable>
                  </View>
                  <View className="flex flex-row gap-x-[25px]">
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        7
                      </Text>
                    </Pressable>
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        8
                      </Text>
                    </Pressable>
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        9
                      </Text>
                    </Pressable>
                  </View>
                  <View className="flex flex-row gap-x-[25px]">
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        .
                      </Text>
                    </Pressable>
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        0
                      </Text>
                    </Pressable>
                    <Pressable
                      className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                      onPress={() => {
                        console.log("hello");
                      }}
                    >
                      <Text className="dark:text-white font-semibold text-[26px]">
                        00
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View className="bg-green-500 flex justify-between">
                <Pressable
                  className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                  onPress={() => {
                    console.log("hello");
                  }}
                >
                  <Text className="dark:text-white font-semibold text-[26px]">
                    ÷
                  </Text>
                </Pressable>
                <Pressable
                  className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                  onPress={() => {
                    console.log("hello");
                  }}
                >
                  <Text className="dark:text-white font-semibold text-[26px]">
                    ×
                  </Text>
                </Pressable>
                <Pressable
                  className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                  onPress={() => {
                    console.log("hello");
                  }}
                >
                  <Text className="dark:text-white font-semibold text-[26px]">
                    -
                  </Text>
                </Pressable>
                <Pressable
                  className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                  onPress={() => {
                    console.log("hello");
                  }}
                >
                  <Text className="dark:text-white font-semibold text-[26px]">
                    +
                  </Text>
                </Pressable>
                <Pressable
                  className="bg-black rounded-full w-[70px] h-[70px] flex items-center justify-center"
                  onPress={() => {
                    console.log("hello");
                  }}
                >
                  <Text className="dark:text-white font-semibold text-[26px]">
                    =
                  </Text>
                </Pressable>
              </View>
            </View>
          </LinearGradient>
        </View>
      </LinearGradient>
      <StatusBar />
    </>
  );
}
