import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const Sidebar = ({ activePage }) => {
    return (
        <View style={styles.background}>
            <TouchableOpacity>
                <Image style={[styles.menu, activePage === 'Menu' && styles.hidden]} source={require('../assets/Menu.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={[styles.profile, (activePage === 'CreateProfile' || activePage === 'Profile') && styles.hidden]} source={require('../assets/ef.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={[styles.statistics, (activePage === 'Stats1' || activePage === 'Stats2') && styles.hidden]} source={require('../assets/statistics.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={[styles.cart, (activePage === 'Cart' || activePage === 'CartEmpty') && styles.hidden]} source={require('../assets/cart.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: 380,
        height: 90,
        backgroundColor: '#fff',
        bottom: 5
    },
    menu: {
        position: 'absolute',
        left: 40,
        height: 45,
        width: 45,
        top: 18,
        opacity: 0.5
    },
    profile: {
        position: 'absolute',
        right: 40,
        height: 45,
        width: 35,
        top: 18,
        opacity: 0.5
    },
    statistics: {
        position: 'absolute',
        right: 113,
        height: 65,
        width: 65,
        top: 10,
        opacity: 0.5
    },
    cart: {
        position: 'absolute',
        left: 113,
        height: 65,
        width: 65,
        top: 10,
        opacity: 0.5
    },
    hidden: {
        opacity: 0 // Hides the element
    }
})

export default Sidebar;
