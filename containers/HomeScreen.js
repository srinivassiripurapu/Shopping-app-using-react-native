import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Cat1" onPress={() => this.props.navigation.navigate('Cat1')} />
                <Button title="Cat2" onPress={() => this.props.navigation.navigate('Cat2')} />
                <Button title="Cat3" onPress={() => this.props.navigation.navigate('Cat3')} />
                <Button title="Cat4" onPress={() => this.props.navigation.navigate('Cat4')} />
                <Button title="Cat5" onPress={() => this.props.navigation.navigate('Cat5')} />
                <Button title="Cat6" onPress={() => this.props.navigation.navigate('Cat6')} />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});