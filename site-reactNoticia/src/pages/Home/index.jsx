import { SectionBanner } from '../../components/SectionBanner';
import { SectionNoticias } from '../../components/SectionNoticias';
import { SectionNoticiasMais } from '../../components/SectionNoticiasMais';

export function Home() {
    return (
        <div id="home-page">
            <div className="container">

                <SectionBanner />
                <SectionNoticias />
                <SectionNoticiasMais /> 
            </div>
        </div>
    )
}