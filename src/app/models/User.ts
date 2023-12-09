export interface Usuario {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: Date;
    created_at:        Date;
    updated_at:        Date;
    edad:              number;
    user_domicilio:    UserDomicilio;
}

export interface UserDomicilio {
    user_id:          number;
    domicilio:        string;
    numero_exterior:  number;
    colonia:          string;
    cp:               number;
    ciudad:           string;
    fecha_nacimiento: Date;
}