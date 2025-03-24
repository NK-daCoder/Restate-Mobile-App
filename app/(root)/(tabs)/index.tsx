import { utilityStyles } from "@/constants/utilityStyles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
      }}
    >
      <Text style={[utilityStyles.text2xl, utilityStyles.textBold, utilityStyles.mb3]}>Welcome To <Text style={ utilityStyles.textSky400 }>Restate</Text></Text>
      <Link href="/sign-in">Sign Up</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
