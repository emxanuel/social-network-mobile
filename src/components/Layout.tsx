import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Navbar from "./Navbar";
import AppBar from "./AppBar";

interface props {
    Comp: React.ComponentType;
}

const Layout: React.FC<props> = ({ Comp }) => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Comp />
            <Navbar />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }
})

export default Layout;
