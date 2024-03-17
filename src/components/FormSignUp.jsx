import React from "react";
import FormLandingPage from "./FormLandingPage";
import ButtonLandingPage from "./ButtonLandingPage";

const listForm = [
    {
        label:"Nama Depan",
        placeholder:"Masukkan Nama Depan"
    },{
        label:"Nama Belakang",
        placeholder:"Masukkan Nama Belakang"
    },{
        label:"Tanggal Lahir",
        placeholder:"Masukan Tanggal Lahir"
    },{
        label:"Nomor Telepon",
        placeholder:"Masukan Nomor Telepon"
    },{
        label:"Email",
        placeholder:"Masukan Email"
    },{
        label:"Kata Sandi",
        placeholder:"Masukkan Kata Sandi"
    },{
        label:"Ulang Kata Sandi",
        placeholder:"Masukkan Kata Sandi"
    }
]

function FormSignUp(){
    return(
        <div>
            {listForm.map(form=>{
                return <FormLandingPage label={form.label} placeholder={form.placeholder} />
            })}
            <ButtonLandingPage mode="dark"/>
            <ButtonLandingPage mode="light"/>
            <p>Sudah punya aku ? <a href="#">Masuk</a></p>
        </div>
    )
}

export default FormSignUp;