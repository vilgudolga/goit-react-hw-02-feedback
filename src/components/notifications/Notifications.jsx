import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Notifications.module.css";

class Notification extends Component {  
    render() {
        const { message } = this.props;
        return (
            <p className={styles.paragraph}>{message}</p>
        ); 
    }
}

Notification.propTypes = {
    message: PropTypes.string,    
}

export default Notification;