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
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const Register = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('')
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container1}>
                    <View style={{ height: '90%' }}>
                        <View style={{ width: '100%', height: '30%' }}><Image style={{ width: '100%', height: '100%' }} source={require('../../../media/imageRegister.jpg')} resizeMode='cover' /></View>
                        <View style={{ marginTop: 20, alignSelf: 'center' }}>
                            <Text style={{ color: '#555555', fontSize: 17 }}>Bắt đầu trải nghiệm cùng <Text style={{ color: '#3b5998' }}>Be</Text></Text>
                        </View>
                        <View style={styles.viewTextInputPhone}>
                            <Image style={{ width: 20, height: 20, marginStart: 10, marginRight: 10 }} source={require('../../../media/phoneRegister.png')} />
                            <TextInput style={{ fontSize: 15 }} value={phoneNumber}
                                onChangeText={(text) => setPhoneNumber(text)}
                                placeholder='Số điện thoại của bạn' />
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View>
                            <Text style={{ textAlign: 'center' }}>Tôi đồng ý với <Text style={{ color: '#426EB4' }}>điều kiện và điều khoản sử dụng </Text >của <Text style={{ color: '#103667', fontWeight: '700' }}>Be</Text></Text>
                        </View>
                        <TouchableOpacity style={styles.buttonContinue} onPress={() => { navigation.navigate('OTP', { phone: phoneNumber }) }}>
                            <Text style={styles.textButtonContinue}>Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    textButtonContinue: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17
    },
    buttonContinue: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5
    },
    viewTextInputPhone: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#A0A0A0',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        height: 40,
        alignSelf: 'center',
        marginTop: 10
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    container:{
        flex: 1
    }
})