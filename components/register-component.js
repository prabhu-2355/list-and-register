import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Button, Icon } from 'react-native'
import colors from '../theme/colors';
import { Input, Card } from 'react-native-elements';

class RegisterPage extends Component {
   static navigationOptions = {
        header: null
   };
   constructor(props) {
       super(props);
       const { changeActiveTab } = this.props;
       this.state = {
             loading: false,
             screen: null,
             firstName: '',
             firstNameErrorStatus: false,
             lastName: '',
             lastNameErrorStatus: false,
             phone: '',
             phoneErrorStatus: false,
             email: '',
             emailErrorStatus: false,
             password: '',
             passwordErrorStatus: false
       }
  }

  changePage(page,data){
      this.props.changeActiveTab(page,{'selectedItem': data})
  }

  /*validate(){
      const {firstName,lastName,phone,email,password} = this.state;
      const firstNameError = !!validate('firstName', firstName);
      const lastNameError = !!validate('lastName', lastName);
      const phoneError = !!validate('phone', phone);
      const emailError = !!validate('email', email);
      const passwordError = !!validate('password', password);
      this.setState({ firstNameErrorStatus: firstNameError,lastNameErrorStatus: lastNameError,phoneErrorStatus: phoneError,emailErrorStatus: emailError,passwordErrorStatus: passwordError });
      return !firstNameError && !lastNameError && !phoneError && !emailError && !passwordError;
  }*/


  /*register() {
      const {firstName,lastName,phone,email,password} = this.state;
      if(this.validate()){
          registerDetail={
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                password: password,
          }
          console.log(registerDetail)
          this.alertMsg();
      }
  }*/


  register() {
      const {firstName} = this.state;
      const {lastName} = this.state;
      const {phone} = this.state;
      const {email} = this.state;
      const {password} = this.state;
      let registerDetail = {}
      this.checkFirstName(firstName)
      this.checkLastName(lastName)
      this.checkPhone(phone)
      this.checkEmail(email)
      this.checkPassword(password)
      if(!this.state.firstNameErrorStatus && !this.state.lastNameErrorStatus &&  !this.state.phoneErrorStatus && !this.state.emailErrorStatus && !this.state.passwordErrorStatus){
          registerDetail={
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              email: email,
              password: password,
          }
          console.log(registerDetail)
          this.alertMsg();

      }
      else{
      }
  }

  alertMsg = () =>
       Alert.alert(
         "Success Message",
         "Success",
         [
           {
             text: "Cancel",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
           },
           { text: "OK", onPress: () => console.log("OK Pressed") }
         ],
         { cancelable: false }
       );

  checkFirstName(firstName){
      this.setState({firstName: firstName})
      if(firstName.length == 0){
          this.state.firstNameErrorStatus= true;
      }else{
          this.state.firstNameErrorStatus= false;
      }
  }

  checkLastName(lastName){
      this.setState({lastName: lastName})
      if(lastName.length == 0){
          this.state.lastNameErrorStatus= true;
      }else{
          this.state.lastNameErrorStatus= false;
      }
  }

  checkPhone(phone){
        this.setState({phone: phone})
        if(phone.length == 0){
            this.state.phoneErrorStatus= true;
        }else{
            this.state.phoneErrorStatus= false;
        }
  }

  checkEmail(email){
      this.setState({email: email})
      if(email.length == 0){
          this.state.emailErrorStatus= true;
      }else{
          this.state.emailErrorStatus= false;
      }
  }

  checkPassword(password){
      this.setState({password: password})
      if(password.length == 0){
          this.state.passwordErrorStatus=true;
      }else{
          this.state.passwordErrorStatus= false;
      }
  }


   render() {
        let { firstName } = this.state;
        let { lastName } = this.state;
        let { phone } = this.state;
        let { email } = this.state;
        let { password } = this.state;
      return (
      <Card>
         <View style = {styles.container}>
             <Text allowFontScaling={false} style={styles.adultStyle}>Register Details:</Text>
             <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "First Name"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText={firstName => this.checkFirstName(firstName)}
             />
              { this.state.firstNameErrorStatus && <Text style={styles.errorStyle}>
                 Fill the detail......!
             </Text>}
             <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Last Name"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText={lastName => this.checkLastName(lastName)}
             />
               { this.state.lastNameErrorStatus && <Text style={styles.errorStyle}>
                  Fill the detail......!
             </Text>}
             <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Phone Number"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText={phone => this.checkPhone(phone)}
             />
              { this.state.phoneErrorStatus && <Text style={styles.errorStyle}>
                 Fill the detail......!
             </Text>}
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText={email => this.checkEmail(email)}
             />
             { this.state.emailErrorStatus && <Text style={styles.errorStyle}>
                Fill the detail......!
             </Text>}
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText={password => this.checkPassword(password)}
                secureTextEntry={true}
                />
                { this.state.passwordErrorStatus && <Text style={styles.errorStyle}>
                   Fill the detail......!
                </Text>}



             <TouchableOpacity
                style = {styles.submitButton}
                onPress={() => this.register()}
                >
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
         </View>
      </Card>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   buttonStyle: {
     width:'100%',
     height:50,
     borderWidth: 1,
     marginBottom: 9,
     backgroundColor: colors.loginButtonColor,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius:0
   },
   menuText: {
     color: colors.white,
     fontSize: 18,
     alignItems: 'center',
     justifyContent: 'center',
     fontWeight: 'bold'
   },
   errorStyle:{
     color:colors.red,
     fontSize: 15,
     marginLeft: 15,
     marginBottom: 4,
     marginTop: -10
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
   iconStyle: {
       width: 70,
       height:40,
       fontSize: 28,
       borderRadius: 10,
       color: colors.white,
       borderWidth:1,
       backgroundColor:colors.loginButtonColor,
       borderColor:colors.black,
       paddingLeft:20,
       paddingTop:6

   }
});

export default RegisterPage;