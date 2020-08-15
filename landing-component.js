    import React, { Component } from 'react';
import { Platform, StyleSheet, View, NetInfo, StatusBar,Text, ScrollView, Image, BackHandler} from 'react-native';
import { Container } from 'native-base';


class LandingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
        this.changeScreen = this.changeScreen.bind(this);

    };

    changeScreen() {
        switch (this.state.screen) {
            case pages.SCHEDULE_TAB_CLASS.id:
                 return (<ScheduleTabClassPage changeActiveTab={this.changeActiveTab} openControlPanel={this.openControlPanel}  selectedProfile={this.state.selectedData}/>);
                 break;

        }
    }


    render() {
        return (
            <Container>
                <StatusBar backgroundColor={this.state.statusColor} barStyle="light-content" />
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});

export default LandingComponent;
