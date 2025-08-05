import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home🏠" }} />
      <Stack.Screen name="menu/menuu" options={{ title: "Menu📄" }} />
      <Stack.Screen name="menu/[id]" options={{ title: "☕" }} />
    </Stack>
  );
}
