import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { Cat1 } from '../Data'
import { connect } from 'react-redux'

class Cat1Screen extends Component {

    static navigationOptions = {
        headerTitle: 'Cat1'
    }
    render() {
        return (
            <View style={styles.container}>
                <Products products={Cat1} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(Cat1Screen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});