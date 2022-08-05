import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import amplifyConfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { getUser } from "./src/graphql/queries";
import { getRandomImage } from "./data/userImages";
import { createUser } from "./src/graphql/mutations";
import useUserAuth from "./hooks/useUserAuth";

Amplify.configure({
  ...amplifyConfig,
  Analytics: {
    disabled: true,
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useUserAuth();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
