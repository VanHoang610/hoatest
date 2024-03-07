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
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
    const navigation = useNavigation();
    console.log(navigation)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        
        <View style={styles.container}>
            <View style={{ width: '100%', height: '30%' }}><Image style={{ width: '100%', height: '100%' }} source={require('../../../media/login.jpg')} resizeMode='contain' /></View>
            <View>
                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}>Đăng nhập</Text>
            </View>
            <View style={styles.viewTextInput}>
                <TextInput style={{ color: '#95958B', fontSize: 16, paddingHorizontal: 15 }} placeholder='Email/Số điện thoại' />
            </View>
            <View style={[styles.viewTextInput, { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }]}>
                <TextInput style={{ color: '#95958B', fontSize: 16 }} placeholder='Mật khẩu' />
                <Image style={{ width: 24, height: 24 }} source={require('../../../media/eyeLogin.png')} />
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        style={styles.checkbox}
                    />
                </View>
                <View>
                    <Text style={{ color: '#000', fontSize: 16, marginTop: -3, marginStart: 5 }}>Ghi nhớ mật khẩu</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.textButtonLogin}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ color: '#008080', fontSize: 16, fontWeight: 'bold', marginTop: 15, textAlign: 'center' }}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                <Text style={{ color: '#008080', fontSize: 16, fontWeight: 'bold', marginTop: 15, textAlign: 'center' }}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    textButtonLogin: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonLogin: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFD700',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    viewTextInput: {
        borderColor: '#797979',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 12,

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,

    }
})