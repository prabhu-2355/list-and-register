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
import NotificationPage from './notification-component';
import NotificationDetailPage from './notification-detail-component';
import DetailPage from './detail-component';
import RegisterPage from './register-component';

import colors from '../theme/colors'
import pages from '../pages'


class LandingComponent extends Component {
    constructor(props) {
            super(props);
            this.state = {
                loading: false,
                screen: pages.NOTIFICATION.id,
                activeTab: pages.NOTIFICATION.activeTab
            }
            this.changeScreen = this.changeScreen.bind(this);
            this.changeActiveTab = this.changeActiveTab.bind(this);

    };
    changeScreen() {
        switch (this.state.screen) {
            case pages.NOTIFICATION.id:
                 return (<NotificationPage changeActiveTab={this.changeActiveTab} />);
                 break;
            case pages.ASSET_EXAMPLE.id:
                 return (<AssetExamplePage />);
                 break;
            case pages.DETAIL.id:
                 return (<DetailPage changeActiveTab={this.changeActiveTab} />);
                 break;
            case pages.NOTIFICATION_DETAIL.id:
                 return (<NotificationDetailPage changeActiveTab={this.changeActiveTab} />);
                 break;
            case pages.REGISTER.id:
                 return (<RegisterPage changeActiveTab={this.changeActiveTab} />);
                 break;
        }
    }

    changeActiveTab(page,data){
        if(!data){
            data ={};
        }
        this.setState({ screen: page.id,
            activeTab: page.activeTab,
        })
    }

    render(){
        return(
            <Container>
                {this.changeScreen()}
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});

export default LandingComponent;