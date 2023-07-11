
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /^(?=.*[A-Z])(?=.*[@!$%&])(?=.*[0-9].*[0-9].*[0-9]).{8,}$/;
export default function validate(inputs){
    const errors={};
    
    if (!regexEmail.test(inputs.correo)) {
      errors.correo = 'Debe ser un correo electrónico';
    }
    if (!regexPass.test(inputs.contraseña)) {
      errors.contraseña = 'Se requiere una contraseña valida';
    }
    return errors;
    }