import './style.css';

const dados = [
    {
        foto: './assets/img/flamengo.jpg',
        titulo: 'Flamengo e Athletico-PR disputam 5ª final brasileira da Libertadores',
        descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, numquam reiciendis. Quae illo possimus quasi inventore ut a adipisci minus doloribus aspernatur. Repudiandae minus atque at repellat laudantium tenetur voluptas',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/tmazs_abr_0608182718df.jpg',
        titulo: 'Baixa adesão vacinal para poliomielite no país preocupa especialistas',
        descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, numquam reiciendis. Quae illo possimus quasi inventore ut a adipisci minus doloribus aspernatur. Repudiandae minus atque at repellat laudantium tenetur voluptas',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/felipe_toledo_22finals_22finals_diz_5848_thiago_diz_thiago_diz.jpg',
        titulo: 'Filipe Toledo conquista título do Circuito Mundial de Surfe.',
        descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, numquam reiciendis. Quae illo possimus quasi inventore ut a adipisci minus doloribus aspernatur. Repudiandae minus atque at repellat laudantium tenetur voluptas',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/15-10-2020_tse-7.jpg',
        titulo: 'Ministro diz que é preciso fonte de custeio para piso de enfermeiros.',
        descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, numquam reiciendis. Quae illo possimus quasi inventore ut a adipisci minus doloribus aspernatur. Repudiandae minus atque at repellat laudantium tenetur voluptas',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/reflorestamento_de_areas_atingidas_em_mariana281120151202.jpg',
        titulo: 'Sem acordo, MG e ES oficializam fim de negociação sobre Mariana.',
        descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, numquam reiciendis. Quae illo possimus quasi inventore ut a adipisci minus doloribus aspernatur. Repudiandae minus atque at repellat laudantium tenetur voluptas',
        botao: 'Ver mais'
    },
    {
        foto: './assets/img/dolar_moeda_0803221205.jpg',
        titulo: 'Dólar cai para R$ 5,20 e euro sobe para mesmo nível da moeda americana.',
        descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, numquam reiciendis. Quae illo possimus quasi inventore ut a adipisci minus doloribus aspernatur. Repudiandae minus atque at repellat laudantium tenetur voluptas',
        botao: 'Ver mais'
    }
]

export function SectionNoticias (){
    return(
        <section id="conteudo">
                <h2>ÚLTIMAS NOTÍCIAS</h2>
                <div className="noticias">

                {dados.map((item, index) => (
                    <div className="noticias-img">
                        <img src={item.foto} alt="imagem"/>
                        <div className="descricao">
                            <h4>{item.titulo}</h4>
                            <p>{item.descricao}</p>
                            <div className="botao-ver">
                                <p>{item.botao}</p>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
            </section>
    )
}