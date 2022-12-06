import './style.css';
import imgLogo from '../../assets/img/logoPreta.png';

export function Header() {
    return (
        <header>
            <div class="container">
                <div class="logo">
                    <img src={imgLogo} alt="Logomarca do site" />
                    <h6>Sudoeste Notícias</h6>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#" class="botoes">Home</a>
                        </li>
                        <li>
                            <a href="#">Notícias</a>
                        </li>
                        <li>
                            <a href="#">Esportes</a>
                        </li>
                        <li>
                            <a href="#">Região</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}