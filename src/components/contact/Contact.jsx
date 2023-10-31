import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <div className="ctc-container">
            <div className="ctc-content">
                <div className="ctc-info">
                    <h3> Rua Serra de Jaire , nº 1322 - Qta Parada </h3>
                    <h2> São Paulo - SP</h2>
                    <h4> CEP: 03175010 </h4>
                    <h1> Tel : 11 . 23181700 </h1>
                </div>
                <div className="ctc-form">
                    <form>
                        <input type="text" id="txtNome" placeholder="Digite seu nome:" />
                        <input type="text" id="txtEmail" placeholder="Digite seu email:" />
                        <input type="text" id="txtTelefone" placeholder="Digite seu telefone:" />
                        <textarea name="taMensagem" id="taMensagem" cols="30" rows="10" 
                        placeholder="Digite sua mensagem"></textarea>
                        <button> Enviar Mensagem </button>
                    </form>
                </div>
            </div>
            <div className="ctc-map">
                <iframe
                    title="map"
                    width="1215"
                    height="300"
                    id="gmap-canvas"
                    src="https://maps.google.com/maps?q=Rua+Serra+de+Jaire+1322&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolLing="no"
                    marginheight="0"
                    marginwidth="0"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Contact

