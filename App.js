import React, {Component} from 'react';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { StyleSheet, Text, Image, TouchableHighlight, View, ActivityIndicator, BackHandler, SafeAreaView } from 'react-native';
import { Container, Header, List, ListItem, Left, Body, Right, Button, Icon, Title,Subtitle ,Content, Accordion, Thumbnail} from 'native-base';
import { TextInput } from 'react-native';
import { Input, Card } from 'react-native-elements';
import MaterialTabs from 'react-native-material-tabs';
import { Toolbar, Badge,IconToggle, Avatar} from 'react-native-material-ui';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


// You can import from local files
import LandingComponent  from './components/landing-component';

import colors from './theme/colors'


// or any pure javascript modules available in npm

class App extends Component {

    render() {
        return (
          <View style={styles.container}>
              <LandingComponent />
          </View>

      );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            paddingTop: Constants.statusBarHeight,
            backgroundColor: '#ecf0f1',
            padding: 8,
        },
        contentStyle: {
           backgroundColor: colors.pageBackGroundColor,
           color: colors.notificationColor
        }
    });

export default App;