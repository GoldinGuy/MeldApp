import * as React from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { WebView } from "react-native-webview";
import * as Haptics from "expo-haptics";

export default function App() {
	const webViewRef = React.useRef(null);

	const handleGuessEntered = () => {
		// Trigger haptic feedback when the user enters a guess
		Haptics.selectionAsync();
	};

	return (
		<View style={styles.container}>
			<WebView
				ref={webViewRef}
				javaScriptEnabled={true}
				domStorageEnabled={true}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				// injectedJavaScript={injectedJavaScript}
				source={{ uri: "https://meld.goldin.io/" }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 0,
	},
});
