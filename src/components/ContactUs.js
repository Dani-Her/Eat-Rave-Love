import {useState} from 'react';
import ReactDOM from 'react-dom/client';

function ContactUs() {
    let [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    let handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
        <h2 style={styles.header}>Contact Us</h2>
        <p> Sign up for our Exclusive Mailer</p>
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange}
            type="text" placeholder="Your Name" />
            <input name='email' onChange={handleChange}
            type="text" placeholder="Your Email" />
            <textarea name='message' onChange={handleChange} placeholder="Your Message to Us.." cols="22" rows="7" ></textarea>
        <button style={styles.submitBtn}>Submit Message</button>
        </form>
        </>
    )
    }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactUs/>);