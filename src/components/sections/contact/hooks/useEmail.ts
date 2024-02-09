import { useState } from "react"
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import emailjs from 'emailjs-com';

export const useEmail = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleOnChangeName = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setName(event.nativeEvent.text);
        console.log(event.nativeEvent.text)
    };

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(event.nativeEvent.text);
        console.log(event.nativeEvent.text)
    };

    const handleOnChangeMessage = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setMessage(event.nativeEvent.text);
        console.log(event.nativeEvent.text);
    };

    const sendEmail = () => {
        if (name === '' || email === '' || message === '') {
            Alert.alert("Preencha todos os campos!");
        } else {
            const templateParams = {
                from_name: name,
                email: email,
                message: message
            };

            emailjs.send("service_apiclwk", "template_hnt1ii8", templateParams, "hBvqXjHcjABwWQyJw")
                .then((promise) => {
                    console.log(promise)
                    Alert.alert("Email enviado.")
                    setName('');
                    setEmail('');
                    setMessage('');
                }, (err) => {
                    Alert.alert(`ERRO: ${err}`)
                });
        }
    }

    return {
        name,
        email,
        message,
        handleOnChangeName,
        handleOnChangeEmail,
        handleOnChangeMessage,
        sendEmail
    };
};

export default useEmail;