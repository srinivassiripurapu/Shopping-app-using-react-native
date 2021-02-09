import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { Cat5 } from '../Data'
import { connect } from 'react-redux'

class Cat5Screen extends Component {

    static navigationOptions = {
        headerTitle: 'Cat5'
    }
    render() {
        return (
            <View style={styles.container}>
                <Products products={Cat5} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(Cat5Screen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});