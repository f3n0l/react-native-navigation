import * as React from "react";
import { StyleSheet, Text, TextInput, Button, View, FlatList, ActivityIndicator } from "react-native";
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

const FetchComponent = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error('Error fetching data: ', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10 }}>
                            <Text>{`ID: ${item.id}`}</Text>
                            <Text>{`Title: ${item.title}`}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const HomeScreen = () => {
    return (
        <View style={styles.layout}>
            <Text>Home Screen</Text>
            <FetchComponent />
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
