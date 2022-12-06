import './style.css';

const dados1 = [
    {
        foto: './assets/img/50926862498_639e8931b8_o.jpg',
        titulo: 'Conab prevê safra de grãos superior a 271 milhões de toneladas.',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/rainha.jpg',
        titulo: 'Rainha Elizabeth II morre aos 96 anos na Escócia.',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/creche.jpg',
        titulo: 'STF começa a julgar garantia de vagas em creches e na pré-escola.',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/tmazs_abr_0608182718df.jpg',
        titulo: 'Baixa adesão vacinal para poliomielite no país preocupa especialistas.',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/dolar_moeda_0803221205.jpg',
        titulo: 'Dólar cai para R$ 5,20 e euro sobe para mesmo nível da moeda americana.',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/15-10-2020_tse-7.jpg',
        titulo: 'Ministro diz que é preciso fonte de custeio para piso de enfermeiros.',
        botao: 'Ver mais'
    }
]

export function SectionNoticiasMais() {
    return (
        <section id="noticias-mais">
            <h2>NOTÍCIAS MAIS VISTAS</h2>
            <div className="conteudo1">

                {dados1.map((item, index) => (
                    <div className="conteudo-img">
                        <img src={item.foto} alt="imagem1" />
                        <div className="descricao1">
                            <h4>{item.titulo}</h4>
                            <div className="botao-ver1">
                                <p>{item.botao}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
    )
}