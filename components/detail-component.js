import React, { Component } from 'react';
import { StyleSheet, Text, Image, TouchableHighlight, View, ActivityIndicator, BackHandler, UIManager, findNodeHandle, Picker} from 'react-native';
import { Container, Header, Left,  List, ListItem, Body, Right, Button, Icon, Title,Subtitle ,Content, Accordion} from 'native-base';
import { TextInput } from 'react-native';
import { Input, Card } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

import colors from '../theme/colors'
import pages from '../pages'
import lists from '../data/list';
import details from '../data/detail';

import { strings } from '../locales/i18n';



class DetailPage extends Component {
    static navigationOptions = {
         header: null
    };
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            screen: null
        }
        console.disableYellowBox = true;
    };

   render() {
        return (
            <Container>
               <Content style={styles.contentStyle}>
                    <Card containerStyle={styles.cardStyle}>
                        <Text allowFontScaling={false} style={styles.adultStyle}>Details:</Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                             <Text allowFontScaling={false} style={styles.nameStyle}>Name:</Text>
                             <Text allowFontScaling={false} style={styles.dataStyle}>{details.name}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Text allowFontScaling={false} style={styles.nameStyle}>Location:</Text>
                            <Text allowFontScaling={false} style={styles.dataStyle}>{details.location}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                             <Text allowFontScaling={false} style={styles.nameStyle}>Age:</Text>
                             <Text allowFontScaling={false} style={styles.dataStyle}>{details.age}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                             <Text allowFontScaling={false} style={styles.nameStyle}>Status:</Text>
                             <Text allowFontScaling={false} style={styles.dataStyle}>{details.status}</Text>
                        </View>
                    </Card>
               </Content>
            </Container>
        );
   }
}
const styles = StyleSheet.create({
     contentStyle: {
         backgroundColor: colors.pageBackGroundColor
     },
     cardStyle:{
         borderRadius: 8,
         marginLeft: 8,
         marginRight: 8,
         marginBottom: 4,
         marginTop: 4,
         padding:8
     },
     adultStyle:{
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
         fontWeight: 'bold',
         marginBottom: 8,
         color: colors.black,
         fontSize:18
     },
     nameStyle:{
         width: '30%',
         marginTop: 4,
         alignItems: 'center',
         fontWeight: 'bold'
     },
     dataStyle:{
         width: '70%',
         marginTop: 4,
         marginLeft: 8,
         alignItems: 'center'
     },
     detailStyle:{
        width: '100%',
        marginLeft: 8,
        marginTop: 6
     }
});
export default DetailPage;