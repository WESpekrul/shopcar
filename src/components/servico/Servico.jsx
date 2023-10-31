import React from "react";
import "./servico.css"; 

const Servico = () => {
    return (
       <div className="svc-container"> 

            <div className="svc-content"> 

                <div className="svc-card">
                    <h1>Vendas</h1>

                    <span> Quer vender seu carro e ter um retorno melhor ?? 
                        Converse com nossos consultores e vamos trazer a melhor
                        solução para seu veiculo !
                    </span>
                    
                </div>

                <div className="svg-card"> 
                    <h1>Compras</h1>
                    <span> Precisa comprar um veiculo usado ou novo com as melhores 
                        condições do mercado ? Fale com um de nossos consultores , 
                        vamos trazer o veiculo dos seus sonhos !
                    </span>

                </div>

                <div className="svg-card"> 
                    <h1>Consignação </h1>
                    <span> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed 
                        eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrum !
                    </span>
                
                </div>
                
                <div className="svg-card"> 
                    <h1>Aluguel</h1>
                    <span> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed 
                        eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrum !
                    </span>

                </div>
            
            </div>
       
       </div>
      
       
    )
};

export default Servico
