import * as React from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import {
    NavigationContainer,
    useNavigation,
    createNavigationContainerRef,
} from "@react-navigation/native";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SignInScreen = () => {
    const nav = useNavigation();

    return (
        <View style={styles.layout}>
            <TextInput placeholder="Username" style={styles.inputField} />
            <TextInput
                placeholder="Password"
                style={styles.inputField}
                secureTextEntry
            />
            <Button title="SignIn" onPress={() => nav.navigate("MainTab")} />
        </View>
    );
};

const SignUpScreen = () => {
    const nav = useNavigation();

    return (
        <View style={styles.layout}>
            <TextInput placeholder="Test" style={styles.inputField} />
            <TextInput
                placeholder="Password"
                style={styles.inputField}
                secureTextEntry
            />
            <Button title="SignUp" onPress={() => nav.navigate("MainTab")} />
        </View>
    );
};

const HomeScreen = () => {
    return (
        <View style={styles.layout}>
            <Text>Home Screen</Text>
        </View>
    );
};

const FeedScreen = () => {
    return (
        <View style={styles.layout}>
            <Text>Feed Screen</Text>
        </View>
    );
};

const CatalogScreen = () => {
    return (
        <View style={styles.layout}>
            <Text>Catalog Screen</Text>
        </View>
    );
};

const AccountScreen = () => {
    return (
        <View style={styles.layout}>
            <Text>Account Screen</Text>
        </View>
    );
};

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Catalog" component={CatalogScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="MainTab" component={MainTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
    },
    inputField: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
});
