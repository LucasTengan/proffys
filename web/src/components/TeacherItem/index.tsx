import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/49047213?s=460&u=148a7b71e9e6b3293528dfa141d7c41317e7816b&v=4" alt="Lucas Tengan"/>
                <div>
                    <strong>Lucas Tengan</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologicas de física avançada.
                <br/> <br/>
                Apaixonado por física e suas teorias malucas.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;