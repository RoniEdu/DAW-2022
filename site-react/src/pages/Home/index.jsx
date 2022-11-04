import { SectionBanner } from '../../components/SectionBanner';
import { SectionCards } from '../../components/SectionCards';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { SectionValues } from '../../components/SectionValues';
import { ImovelContextProvider } from '../../context/ImovelContext';
import './style.css';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <ImovelContextProvider>
                    <SectionBanner />

                    <SectionCards />
                </ImovelContextProvider>

                <SectionReasons />

                <SectionSpecialists />

                <SectionValues />
            </div>
        </div>
    )
}