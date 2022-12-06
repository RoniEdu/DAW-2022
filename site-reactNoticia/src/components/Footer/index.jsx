import './style.css';
import imglogo from '../../assets/img/logo.png';

export function Footer() {
    return (
        <footer>
            <div className="rodape">
                <div className="rodape1">
                    <ul className="descricao-rodape">
                        <li className="text-right">
                            <h3>Telefone</h3>
                            <a href="#" className="numero">(46)9 9999-9999</a>
                        </li>
                        <li className="text-center">
                            <img src={imglogo} alt="Logo" />
                        </li>
                        <li className="text-left">
                            <h3>WhatsApp</h3>
                            <a href="#" className="numero">(46)9 8888-8888</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="redes-sociais">
                <span className="facebook"></span>
                <span className="instagram"></span>
            </div>

            <p className="copyright">
                &#169; 2022 - Todos os direitos reservados
            </p>
        </footer >
    )
}

