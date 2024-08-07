import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';






import Footer from '../../components/Footer'

import homem from '../../assets/homem.png'
import chevronRightBranco from '../../assets/chevron-right-branco.svg'
import areasVegetacaoNativaDensa from '../../assets/areasVegetacaoNativaDensa.png'
import areasVegetacaoNativaDensa1 from '../../assets/areasVegetacaoNativaDensa1.png'
import areasVegetacaoNativaDensa2 from '../../assets/areasVegetacaoNativaDensa2.png'
import areasVegetacaoNativaDensa3 from '../../assets/areasVegetacaoNativaDensa3.png'
import areasVegetacaoNativaDensa4 from '../../assets/areasVegetacaoNativaDensa4.png'
import areasVegetacaoNativaDensa5 from '../../assets/areasVegetacaoNativaDensa5.png'
import figacima from '../../assets/figacima.png'
import figabaixo from '../../assets/figabaixo.png'
import fmaisBranco2 from '../../assets/fmaisBranco2.png'
import x from '../../assets/x.svg'
import imageFundoRede from '../../assets/imageFundoRede.png'
import Lateral from '../../assets/Lateral.png'


import './rede.css'

function Rede() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen1, setIsOpen1] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModal1() {
        setIsOpen1(true);
    }

    function closeModal1() {
        setIsOpen1(false);
    }


    return (
        <div className='container-fluid row planode-fundo'>
            <div className='container-fluid row planode-fundo imgfundo'>

                <div className='modal-folha-fora'>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={{
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                padding: 0,
                                border: 'none',
                                borderRadius: '10px',
                            },
                        }}
                    >
                        <div className='modal-folha-dentro'>
                            <img onClick={closeModal} id='posicao-x' src={x} />
                            <h2>Ficaremos muito honrados e felizes em te ter como um parceiro investidor.</h2>

                            <h3>
                                <p>Aguardamos ansiosamente seu contato:</p> <br /><br />
                                <p><strong>Departamento de Reflorestamento e Recuperação de Áreas Degradadas - DEFLO</strong></p>
                                <p><strong>E-mail:</strong> deflo@agro.gov.br</p>
                                <p><strong>Telefone:</strong> (61) 3276-4672</p>
                            </h3>
                            <img src={fmaisBranco2} />
                            <img id='logofundo' src={Lateral} />
                        </div>
                    </Modal>
                </div>

                <div className='modal-folha-fora'>
                    <Modal
                        isOpen={modalIsOpen1}
                        onRequestClose={closeModal1}
                        style={{
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                padding: 0,
                                border: 'none',
                                borderRadius: '10px',
                            },
                        }}
                    >
                        <div className='modal-folha-dentro'>
                            <img onClick={closeModal1} id='posicao-x' src={x} />
                            <h2>Conecte seu projeto com a iniciativa.</h2>

                            <h3>
                                <p>Após a leitura do edital, envie sua proposta de projeto para a <strong>Coordenação-Geral de <br /> <br /> <br /> <br /> Desenvolvimento Florestal</strong></p> <br /><br /><br /><br />
                                <p><strong>E-mail:</strong> coord-cgdf@agro.gov.br</p>
                                <p><strong>Telefone:</strong> (61) 3276-4327</p>
                            </h3>
                            <img src={fmaisBranco2} />
                            <img id='logofundo' src={Lateral} />

                        </div>
                    </Modal>
                </div>
                <div className='div-pagina-inicial-pai'>
                        <img id='imgfundo' src={imageFundoRede} />

                        <div className='div-pagina-inicial'>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15%' }}>
                                <h1>Faça parte da  transformação do agronegócio florestal brasileiro</h1>
                                <h3>Rede Floresta + Iniciativa Conexão Florestal. Juntos vamos estimular as cadeias produtivas florestais, conectando empreendedores, empresas e investidores desse setor.</h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '37px' }}>
                                <button onClick={openModal}><h2>Quero ser um Investidor</h2> <img src={chevronRightBranco} /></button>
                                <button onClick={openModal1}><h2>Quero conectar meu projeto</h2> <img src={chevronRightBranco} /></button>
                            </div>
                        </div>
                        <img src={homem} />

                </div>
                <div className='div-pagina-intermediaria-pai'>
                    <span><h1 style={{ color: '#ABBF3B' }}>Objetivos da Floresta + Sustentável</h1></span>

                    <div className='div-pagina-linhaDoTempo'>
                        <div style={{ position: 'relative', left: '-0.5em', top: '-0.3em' }} className='div-pagina-linhaDoTempo-bolinha'></div>
                        <div className='div-pagina-linhaDoTempo-esquerda'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-esquerda'>
                                <img src={areasVegetacaoNativaDensa} />
                                <div>
                                    <h2>Transparência e Planejamento</h2>
                                    <h3>Monitoramento e visão geográfica de florestas plantadas subsidiadas por políticas públicas</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-direita'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-direita'>
                                <img src={areasVegetacaoNativaDensa1} />
                                <div>
                                    <h2>Políticas Públicas</h2>
                                    <h3>Voltadas à encorajar os proprietários de terras a estabelecerem florestas plantadas</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-esquerda'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-esquerda'>
                                <img src={areasVegetacaoNativaDensa2} />
                                <div>
                                    <h2>Unir Forças</h2>
                                    <h3>Alinhar os esforços de expansão das florestas plantadas com as metas de redução de emissões de gases de efeito estufa de forma sinérgica com as tecnologias do Plano ABC +;</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-direita'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-direita'>
                                <img src={areasVegetacaoNativaDensa3} />
                                <div>
                                    <h2>Investimentos</h2>
                                    <h3>Parcerias Público-Privadas, para promover a cooperação entre o MAPA e o setor privado, atraindo investimentos com vistas a fomentar as florestas plantadas;</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-esquerda'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-esquerda'>
                                <img src={areasVegetacaoNativaDensa4} />
                                <div>
                                    <h2>Parcerias</h2>
                                    <h3>Fomentar parcerias Nacionais e Internacionais, de forma a obter apoio técnico e financeiro</h3>
                                </div>
                            </div>
                        </div>
                        <div className='div-pagina-linhaDoTempo-direita'>
                            <div className='div-pagina-linhaDoTempo-bolinha'></div>
                            <hr />
                            <div className='div-pagina-linhaDoTempo-img-text-direita'>
                                <img src={areasVegetacaoNativaDensa5} />
                                <div>
                                    <h2>Desenvolvimento</h2>
                                    <h3>Apoiar o desenvolvimento de bancos de sementes e viveiros.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div-pagina-final-pai'>
                    <div className='div-pagina-final-filho-acima'>
                        <div className='imagem'>
                            <span ><h1>O que é a Rede Floresta +</h1></span>
                            <img src={figacima} />
                        </div>
                        <div className='texto'>
                            <h3>A Rede Floresta+ conecta instituições com projetos de reflorestamento a investidores interessados.</h3>
                            <h4>O seu principal propósito é viabilizar o acesso a informações detalhadas sobre projetos de reflorestamento seja para fins comerciais, restauração ou conservação florestal, facilitando sua execução por parte dos investidores. O objetivo central da Rede é impulsionar iniciativas florestais sustentáveis, colaborando para o fortalecimento da economia florestal brasileira, a preservação dos ecossistemas e o estímulo ao desenvolvimento econômico e social sustentável.</h4>
                            <span><h2>Quero ser um Investidor</h2> <img src={chevronRightBranco} /></span>
                        </div>
                    </div>
                    <div className='div-pagina-final-filho-abaixo'>
                        <div className='texto'>
                            <h3>A Rede Floresta+ é uma valiosa plataforma que promove um networking entre investidores do setor florestal e entidades envolvidas em projetos de reflorestamento, com diversas finalidades, como comerciais, restauração ou conservação florestal. </h3>
                            <h4>Por meio desta rede, investidores têm a oportunidade única de se conectar com projetos promissores, enquanto as entidades têm acesso a potenciais parceiros e financiadores para suas iniciativas. Essa interação fomenta o desenvolvimento de projetos florestais sustentáveis, impulsionando a economia do setor e fortalecendo a preservação dos ecossistemas.</h4>
                            <span><h2>Quero conectar meu projeto</h2> <img src={chevronRightBranco} /></span>
                        </div>
                        <div className='imagem'>
                            <span><h1>Porque fazer  parte da Rede?</h1></span>
                            <img src={figabaixo} /></div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Rede;
