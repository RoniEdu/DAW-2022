import './style.css';
import imgLogo from '../../assets/img/logo_imobiliaria.svg';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <img src={imgLogo} alt="Logomarca da imobiliária"/>
                        <h6>Imobialiária Unimater</h6>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#" className="active">Home</a>
                        </li>
                        <li>
                            <a href="#">Venda</a>
                        </li>
                        <li>
                            <a href="#">locação</a>
                        </li>
                        <li>
                            <a href="#">A Empresa</a>
                        </li>
                        <li>
                            <a href="contato.html">Fale Conosco</a>
                        </li>
                        <li>
                            <button>Login</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}