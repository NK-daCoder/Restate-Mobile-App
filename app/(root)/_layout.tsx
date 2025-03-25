import { utilityStyles } from "@/constants/utilityStyles";
import { useGlobalContext } from "@/lib/globalProvider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function AppLayout() {
  const { loading, isLogged } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView style={ [utilityStyles.flexCol, utilityStyles.justifyCenterXY, utilityStyles.hFull] }>
        <ActivityIndicator style={ utilityStyles.textSky400 } size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}