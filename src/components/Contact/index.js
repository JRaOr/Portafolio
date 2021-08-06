import React from 'react'
import { ContactContainer, ContactContent, ContactLeft, ContactForm, ContactoH1, ContactInfo, ContactInput, ContactLabel, ContactMessage} from './ContactElements'
import Star from '../star'
const Contact = ({english}) => {
    return (
        <ContactContainer id='contact'>
            <ContactContent>
                <ContactLeft>

                </ContactLeft>
                <ContactForm>
                    <ContactoH1>
                        {(english ? 'Contact Form': 'Contacto')}
                    </ContactoH1>
                    <ContactInfo>
                        <ContactLabel>
                            {(english ? 'Name': 'Nombre')}
                        </ContactLabel>
                        <ContactInput type='text' placeholder={(english ? 'Name': 'Nombre')}/>
                    </ContactInfo>
                    <ContactInfo>
                        <ContactLabel>
                            {(english ? 'Company': 'Empresa')}
                        </ContactLabel>
                        <ContactInput type='text' placeholder={(english ? 'Company': 'Empresa')}/>
                    </ContactInfo>
                    <ContactInfo>
                        <ContactLabel>
                            Email
                        </ContactLabel>
                        <ContactInput type='text' placeholder='Email'/>
                    </ContactInfo>
                    <ContactInfo>
                        <ContactLabel>
                            {(english ? 'Message': 'Mensaje')}
                        </ContactLabel>
                        <ContactMessage type='text' placeholder={(english ? 'Message': 'Mensaje')}/>
                    </ContactInfo>
                </ContactForm>
            </ContactContent>
            <Star/>
        </ContactContainer>
    )
}

export default Contact
