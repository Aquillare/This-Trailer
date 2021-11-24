import md5 from 'md5';

const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';   // url base de nuestra imagen
    const formatteEmail =(email).trim().toLowerCase();  //trim quitara los espacios en blanco, toLowerCase formatera el texto en minusculas los parentesis alrededor de email son opcionales.
    const hash =  md5(formatteEmail, {encoding: 'binary'});
    return `${base}${hash}`;
}

export default gravatar;