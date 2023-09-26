import { StyleSheet, View, Platform, Switch } from "react-native";
import Constants from "expo-constants";
import { NativeRouter, Route, Routes } from "react-router-native";
import Layout from "./src/components/Layout";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import { UserProvider } from "./src/components/UserContext";
import Contacts from "./src/pages/Contacts";
import Search from "./src/pages/Search";
import Requests from "./src/pages/Requests";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

export default function App() {
    return (
        <UserProvider>
            <NativeRouter>
                <Routes>
                    <Route path="/" Component={() => <Layout Comp={Home} />} />
                    <Route
                        path="/login"
                        Component={() => <Layout Comp={Login} />}
                    />
                    <Route
                        path="/register"
                        Component={() => <Layout Comp={Register} />}
                    />
                    <Route path="/contacts" element={<Layout Comp={Contacts}/>}/>
                    <Route path="/search" element={<Layout Comp={Search}/>}/>
                    <Route path="/requests" element={<Layout Comp={Requests}/>}/>
                </Routes>
            </NativeRouter>
        </UserProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: Platform.OS === "ios" ? 20 : STATUSBAR_HEIGHT,
    },
});
