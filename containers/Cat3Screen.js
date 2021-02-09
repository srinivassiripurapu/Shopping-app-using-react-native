import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { Cat3 } from '../Data'
import { connect } from 'react-redux'

class Cat3Screen extends Component {

    static navigationOptions = {
        headerTitle: 'Cat3'
    }
    render() {
        return (
            <View style={styles.container}>
                <Products products={Cat3} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(Cat3Screen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});