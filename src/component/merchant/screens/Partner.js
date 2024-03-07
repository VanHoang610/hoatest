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
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native'
const dataCity = [
    { label: 'Hồ Chí Minh', value: '1' },
    { label: 'Hà Nội', value: '2' },
];
const Partner = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(null);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 20, marginTop: 20 }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Image style={{ width: 24, height: 24 }} source={require('../../../media/iconReturn.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#103667', fontSize: 22, fontWeight: 'bold', marginStart: 10 }}>Đăng ký trở thành đối tác Nhà hàng</Text>
                    </View>
                    <View style={{ width: '100%', height: '85%', backgroundColor: '#ECECEC', paddingHorizontal: 24, marginTop: 10 }}>
                        <View>
                            <Text style={{ color: '#103667', fontSize: 20, fontWeight: '700', marginTop: 10 }}>Email</Text>
                        </View>
                        <View style={styles.viewTextInput}>
                            <TextInput style={{ marginStart: 15 }} placeholder='nguyenvana@gmail.com' />
                        </View>
                        <View>
                            <Text style={{ color: '#103667', fontSize: 20, fontWeight: '700', marginTop: 10 }}>Tên Nhà hàng</Text>
                        </View>
                        <View style={styles.viewTextInput}>
                            <TextInput style={{ marginStart: 15 }} placeholder='YumHub' />
                        </View>
                        <View>
                            <Text style={{ color: '#103667', fontSize: 20, fontWeight: '700', marginTop: 10 }}>Họ Và Tên</Text>
                        </View>
                        <View style={styles.viewTextInput}>
                            <TextInput style={{ marginStart: 15 }} placeholder='Lê Văn Hoàng' />
                        </View>
                        <View>
                            <Text style={{ color: '#103667', fontSize: 20, fontWeight: '700', marginTop: 10 }}>Số điện thoại</Text>
                        </View>
                        <View style={styles.viewTextInput}>
                            <TextInput style={{ marginStart: 15 }} placeholder='0776616818' />
                        </View>
                        <View>
                            <Text style={{ color: '#103667', fontSize: 20, fontWeight: '700', marginTop: 10 }}>Địa chỉ Nhà hàng</Text>
                        </View>
                        <View style={styles.viewTextInput}>
                            <TextInput style={{ marginStart: 15 }} placeholder='1096 Quang Trung, Quận Gò Vấp' />
                        </View>
                        <View>
                            <Text style={{ color: '#103667', fontSize: 20, fontWeight: '700', marginTop: 10 }}>Thành phố</Text>
                        </View>
                        <View style={styles.viewTextInput}>
                            <Dropdown
                                data={dataCity}
                                maxHeight={200}
                                labelField="label"
                                valueField="value"
                                placeholder="Chọn mục"
                                selectedTextStyle={styles.selectedTextStyle}
                                value={value}
                                onChange={item => {
                                    setValue(item.value);
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonContinue}>
                            <Text style={styles.textButtonContinue}>Gửi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Partner

const styles = StyleSheet.create({
    textButtonContinue: {
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
        marginTop: 10,
        marginBottom: 2
    },
    selectedTextStyle: {
        marginStart: 15,
        marginTop: 5
    },
    viewTextInput: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#fff',
        marginTop: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})