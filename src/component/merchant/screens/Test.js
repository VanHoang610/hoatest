import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    Image, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Test = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('')
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.container1}>
                    <View>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Image style={{ width: 24, height: 24, marginStart: 20, marginTop: 20 }} source={require('../../../media/iconReturn.png')} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#363636', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Nhập mã OTP</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#707070', fontSize: 15, fontWeight: '400', textAlign: 'center' }}>Mã OTP sẽ được gửi đến số</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#363636', fontSize: 15, fontWeight: '700', textAlign: 'center' }}>111</Text>
                        </View>
                        <View style={styles.viewOTPContainer}>
                            <View style={styles.viewOTP}>
                                <TextInput style={styles.textOTP} placeholder='' />
                            </View>
                            <View style={styles.viewOTP}>
                                <TextInput style={styles.textOTP} placeholder='' />
                            </View>
                            <View style={styles.viewOTP}>
                                <TextInput style={styles.textOTP} placeholder='' />
                            </View>
                            <View style={styles.viewOTP}>
                                <TextInput style={styles.textOTP} placeholder='' />
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonContinue} onPress={() => { navigation.navigate('Partner') }}>
                            <Text style={styles.textButtonContinue}>Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Test

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    }, textButtonContinue: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonContinue: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFD700',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 2
    },
    viewOTPContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        alignSelf: 'center',
        marginTop: 20
    },
    textOTP: {
        // backgroundColor: 'pink',
        height: '100%',
        textAlign: 'center',
        fontSize: 35
    },
    viewOTP: {
        width: 45,
        height: 70,
        borderColor: '#898989',
        borderWidth: 1
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
});