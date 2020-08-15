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


import colors from '../theme/colors';
import lists from '../data/list';
import DetailPage from './detail-component';
import pages from '../pages'

 class NotificationPage extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        const { changeActiveTab } = this.props;
        this.state = {
          loading: false,
          screen: null
        }
    };

    changePage(page,data){
        this.props.changeActiveTab(page,{'selectedItem': data})
    }

    renderItem(list){
      return (
          <Card containerStyle={styles.cardStyle}>
              <ListItem button noBorder onPress={() => this.changePage(pages.NOTIFICATION_DETAIL, list)}  avatar style={styles.itemStyle}>
                  <Left style={{marginLeft:8,marginTop:-4}}>
                    <Thumbnail source={{ uri: list.thumbnail }} style={{width:48,height:48}}/>
                  </Left>
                  <Body>
                      <Text allowFontScaling={false} style={styles.fontColor}>
                        {list.name}
                      </Text>
                      <View style={{flex: 1, flexDirection: 'row',marginTop:4}}>
                        <Image source={require("../assets/image/location.png")} style={styles.icons} />
                        <Text allowFontScaling={false} style={styles.messageColor}>
                            {list.location}
                        </Text>
                      </View>
                  </Body>
                  <Right style={{marginTop:-2}}>
                      <Text>
                      </Text>
                      <Text allowFontScaling={false} style={styles.rightClass}>
                        {list.status}
                      </Text>
                  </Right>
              </ListItem>
          </Card>
      );
    }

    render() {
        return (
            <Container>
                <Content style={styles.contentStyle}>
                    {lists.length > 0 &&
                    <List dataArray={lists}
                        renderRow={list => this.renderItem(list)}
                    />}
                    { lists.length == 0 && <Text style={styles.errorStyle}>
                         Error Msg
                    </Text>}
                    <View style={{ marginTop: 15,marginLeft:50}}>
                      <Button transparent onPress={() => this.changePage(pages.REGISTER)} style={{flexDirection: "row",marginLeft:250}} >
                             <Icon active name="plus" style={styles.iconStyle} type="FontAwesome"/>
                      </Button>
                   </View>
                </Content>

            </Container>
        );
    }
 }

 const styles = StyleSheet.create({
    contentStyle: {
       backgroundColor: colors.pageBackGroundColor,
       color: colors.notificationColor
    },
    chatIcon:{
        right: 0,
        top: 10,
        backgroundColor: colors.notificationColor,
        width: 8,
        height: 8
    },
    notificationIcon:{
        right: 6,
        top: 10,
        backgroundColor: colors.notificationColor,
        width: 8,
        height: 8
    },
    search: {
        width: '100%',
        marginBottom: 0,
        marginTop: 8,
        height:48,
        backgroundColor: 'white',
        borderColor: colors.searchBorderColor,
        borderWidth: 0.5
    },
    cardStyle:{
        borderRadius: 8,
        borderWidth:0,
        margin: 4,
        marginLeft:8,
        marginRight:8,
        marginTop:6,
        padding:0
    },
    itemStyle:{
        marginLeft: 0,
        paddingLeft: 0,
    },
    facebookStyle: {
       fontSize: 15,
       color: colors.facebookColor,
       marginTop: 2,
       height:20
    },
    fontColor:{
        color: colors.headingStyleColor,
        fontWeight: 'bold'
    },
    messageColor: {
        color: colors.subHeadingStyleColor,
        fontWeight:'bold',
        fontSize:12,
         marginTop:2
    },
    icons:{
        width: 15,
        height: 15,
        marginTop:2,
        marginRight:8
    },
    rightClass:{
        color: colors.backgroundBatchTextColor,
        backgroundColor: colors.backgroundBatchColor,
        borderRadius:8,
        fontWeight: 'bold',
        padding:3,
        paddingLeft:4,
        fontSize:10
    },
    notificationIcon:{
        right: 2,
        top: 0,
        backgroundColor: colors.notificationColor,
        width: 8,
        height: 8
    },
    errorStyle:{
        color:colors.red,
        fontSize: 16,
        marginLeft:135,
        marginTop:15,
        fontWeight:'bold'

    },
    buttonStyle: {
        width:'30%',
        height:50,
        marginLeft: 268,
        marginBottom: 0,
        marginTop: 50,
        backgroundColor: colors.loginButtonColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:80
    },
    menuText: {
        color: colors.white,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    iconStyle: {
         width: 70,
         height:40,
         fontSize: 28,
         borderRadius: 10,
         color: colors.white,
         borderWidth:1,
         backgroundColor:colors.loginButtonColor,
         borderColor:colors.black,
         paddingLeft:24,
         paddingTop:6

    },
 });

export default NotificationPage;