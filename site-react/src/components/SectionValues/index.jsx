import './style.css';

import imgLogo from '../../assets/img/place-company.png';

export function SectionValues() {
    return (
        <section id="values">
            <h2>Que é a Imobiliária Unimater?</h2>

            <div className="values-container">
                <img src={imgLogo} alt="Foto da firma" />

                <div className="values-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos dolores necessitatibus, blanditiis corporis veritatis impedit velit temporibus mollitia hic sed fugit at vitae non exercitationem rem corrupti nostrum officia.</p>

                    <p>Neque eveniet fugiat at deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse doloremque perferendis! Culpa earum reiciendis repudiandae, officiis magnam voluptate ex quas deleniti, enim ad excepturi.</p>

                    <div className="value-detail">
                        <div className="value">
                            <span>Alto Padrão</span>
                            <span>Agilidade</span>
                        </div>

                        <div className="value">
                            <span>Facilidade</span>
                            <span>Confiabilidade</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}