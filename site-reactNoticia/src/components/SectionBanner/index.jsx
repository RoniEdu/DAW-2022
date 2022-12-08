import './style.css';
import imgbanner from '../../assets/img/rainha.jpg';

export function SectionBanner() {
    return (
        <div id="banner">
            <h1><b>DESTAQUES</b></h1>
            <section id="banner1">
                <img src={imgbanner} alt="banner-img"/>
                    <h3><u>Rainha Elizabeth II morre aos 96 anos na Escócia</u></h3>
            </section>
        </div>
    )
}