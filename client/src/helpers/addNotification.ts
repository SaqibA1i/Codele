import { Notification } from "../TS types/types";
import { Store } from 'react-notifications-component';

const addNotification = ({ type, message, time }: Notification) => {

    Store.addNotification({
        title: message,
        message: "",
        type: type,
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: time || 3000,
            onScreen: true
        }
    });
}

export default addNotification;
