import FormLandingPage from "./FormLandingPage";
import Button from 'react-bootstrap/Button';
import image from '../assets/g.png';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import React, { useState } from "react";
const listForm = [
    {
        id: "formFirstName",
        label: "Nama Depan",
        type: "text",
        placeholder: "Masukkan Nama Depan"
    },
    {
        id: "formLastName",
        label: "Nama Belakang",
        type: "text",
        placeholder: "Masukkan Nama Belakang"
    },
    {
        id: "formBirthDate",
        label: "Tanggal Lahir",
        type: "date",
        placeholder: "Masukkan Tanggal Lahir"
    },
    {
        id: "formPhone",
        label: "Nomor Telepon",
        type: "tel",
        placeholder: "Masukkan Nomor Telepon"
    },
    {
        id: "formEmail",
        label: "Email",
        type: "email",
        placeholder: "Masukkan Email"
    },
    {
        id: "formPassword",
        label: "Kata Sandi",
        type: "password",
        placeholder: "Masukkan Kata Sandi"
    },
    {
        id: "formConfirmPassword",
        label: "Ulang Kata Sandi",
        type: "password",
        placeholder: "Masukkan Ulang Kata Sandi"
    }

]

function FormSignUp() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <div style={{ border: "3px solid #4AB6C5", borderRadius: "0 0 40px 40px" }}>
            <div className=" m-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {listForm.map(form => (
                        <FormLandingPage
                            key={form.id}
                            id={form.id}
                            type={form.type}
                            label={form.label}
                            placeholder={form.placeholder}
                            required

                        />
                    ))}
                    {
                        <div className="d-grid pb-3 gap-2">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            onClick={handleSubmit} 
                            style={{ 
                                padding: "10px 20px", 
                                borderRadius: "30px",
                                border:"none",
                                backgroundColor: "#C4C4C4", // Warna latar belakang default
                                transition: "background-color 0.3s" // Transisi efek hover
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#4AB6C5"} 
                            onMouseOut={(e) => e.target.style.backgroundColor = "#C4C4C4"} 
                        >
                            Masuk
                        </Button>
                    </div>
                    

                    }
                </Form>
                <div className="d-grid gap-2">
                    <Button variant="light" size="lg" style={{ border: "3px solid #C4C4C4", borderRadius: "30px", padding: "10px 20px" }}>
                        <img src={image} alt="Deskripsi Gambar" style={{ width: '30px', height: 'auto' }} />
                        <b style={{ color: "#C4C4C4" }}>Masuk Dengan Google</b>
                    </Button>

                </div>
                <p className="p-3">Sudah punya akun ? <a href="#" style={{ textDecoration: "none", color: "#4AB6C5" }}>Masuk</a></p>
            </div>
        </div>

    )
}

export default FormSignUp;