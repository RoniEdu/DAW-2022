import './style.css'

export function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-company">
                        <p class="footer-logo">Imobiliária UNIMATER</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minus consequuntur nam saepe. Quidem laborum iste dolores libero dignissimos. Tempore vero molestias aliquid voluptatibus dolor tempora, fugit ad doloremque autem.</p>
                    </div>

                    <div class="footer-menu">
                        <p class="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Especialistas</a></li>
                            <li><a href="#">Missão e Visão</a></li>
                            <li><a href="#">Nossos Valores</a></li>
                        </ul>
                    </div>

                    <div class="footer-menu">
                        <p class="footer-menu-title">Contato</p>
                        <ul>
                            <li>+55 (46) 9 9999-9999</li>
                            <li>Rua Mato Grosso, 200</li>
                            <li>Pato Branco - PR</li>
                        </ul>
                    </div>

                    <div class="footer-menu">
                        <p class="footer-menu-title">Parceiross</p>
                        <ul>
                            <li><a href="#">Empresa XPTO</a></li>
                            <li><a href="#">Empresa do Zeca</a></li>
                            <li><a href="#">Empresa do Chico</a></li>
                            <li><a href="#">Empresa do Tonho</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-social">
                    <span class="facebook"></span>
                    <span class="twitter"></span>
                    <span class="instagram"></span>
                    <span class="linkedin"></span>
                </div>

                <p class="footer-copyright">
                    &#169; 2022 - Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}