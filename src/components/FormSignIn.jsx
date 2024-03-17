import React from "react";
import FormLandingPage from "./FormLandingPage";
import ButtonLandingPage from "./ButtonLandingPage";
import Button from 'react-bootstrap/Button';
import image from '../assets/g.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const listForm = [
    {
        id: "formemail",
        label: "Email",
        type: "email",
        placeholder: "Masukkan Email"
    },
    {
        id: "formpass",
        label: "Kata Sandi",
        type: "password",
        placeholder: "Masukkan Kata Sandi"
    }
];

function FormSignIn() {
    return (
        <div style={{ border: "3px solid #4AB6C5", borderRadius: "0 0 40px 40px" }}>
            <div className=" m-5">
                {listForm.map(form => {
                    return <FormLandingPage key={form.id} id={form.id} type={form.type} label={form.label} placeholder={form.placeholder} />;
                })}
                <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <label>Ingat Saya</label>
                    <a href="#" style={{ marginLeft: "auto", textDecoration: "none", color: "#4AB6C5" }}>Lupa Kata Sandi?</a>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="info" size="lg" style={{padding:"10px 20px",borderRadius: "30px" }}>
                        Masuk
                    </Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "nowrap" }}>
                    <Col ><hr style={{ height: "3px", backgroundColor: "#C4C4C4", border: "none" }} /></Col>
                    <Col md="auto" ><h5 style={{ color: "#C4C4C4", padding: "10px" }}>atau</h5></Col>
                    <Col ><hr style={{ height: "3px", backgroundColor: "#C4C4C4", border: "none" }} /></Col>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="light" size="lg" style={{ border: "3px solid #C4C4C4", borderRadius: "30px",padding:"10px 20px" }}>
                        <img src={image} alt="Deskripsi Gambar" style={{ width: '30px', height: 'auto' }} />
                        <b style={{ color: "#C4C4C4" }}>Masuk Dengan Google</b>
                    </Button>

                </div>
            <p className="p-3">Belum punya aku ? <a href="#" style={{ textDecoration: "none", color: "#4AB6C5" }}>Daftar</a></p>
            </div>
        </div>
    );
}

export default FormSignIn;
