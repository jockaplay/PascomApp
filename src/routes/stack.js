import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { Link } from '@react-navigation/native';
import Login from "../pages/Login";
import { Pressable, Text } from "react-native";

const Stack = createStackNavigator();

export default function StackRoute () {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{title: "Login", headerTitleAlign: 'center'}} name="login" component={Login} />
            <Stack.Screen options={{title: "Pascom", headerTitleAlign: 'center', headerLeft: () => {return}, headerRight: () => {
                return <Link style={{padding: 15}} to={{screen: 'profile'}}><Ionicons name={"person-outline"} size={20}/></Link>
                }}} name="main" component={Home} />
            <Stack.Screen options={{title: "Perfil", headerTitleAlign: 'center', headerRight: () => {return <Pressable style={{padding: 15}}><Text>Edit</Text></Pressable>}}} name="profile" component={Profile} />
        </Stack.Navigator>
    );
}
