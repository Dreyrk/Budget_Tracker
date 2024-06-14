import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabBarLabel from "@/components/navigation/TabBarLabel";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarStyle: { paddingBottom: 4, height: 60 },
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "home" : "home-outline"} color={focused ? "#0466c8" : color} />
          ),
          tabBarLabel: ({ focused }) => <TabBarLabel label={"Home"} focused={focused} activeColor={"#0466c8"} />,
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="Budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "calendar" : "calendar-outline"} color={focused ? "#0466c8" : color} />
          ),
          tabBarLabel: ({ focused }) => <TabBarLabel label={"Budget"} focused={focused} activeColor={"#0466c8"} />,
        }}
      />
      <Tabs.Screen
        name="Analytics"
        options={{
          title: "Analytics",
          tabBarActiveTintColor: "#0466c8",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "bar-chart" : "bar-chart-outline"} color={focused ? "#0466c8" : color} />
          ),
          tabBarLabel: ({ focused }) => <TabBarLabel label={"Analytics"} focused={focused} activeColor={"#0466c8"} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "settings" : "settings-outline"} color={focused ? "#0466c8" : color} />
          ),
          tabBarLabel: ({ focused }) => <TabBarLabel label={"Settings"} focused={focused} activeColor={"#0466c8"} />,
        }}
      />
    </Tabs>
  );
}
