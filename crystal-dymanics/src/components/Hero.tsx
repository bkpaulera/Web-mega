
import { useTranslation } from 'react-i18next'
import { people } from '../data/data'

export function Hero() {
    const { t } = useTranslation()

    return (
        <section className='hero shadow-2xl'>
            <div className='hero-content mt-20 max-w-[90%] bg-primary p-5 rounded flex-col lg:flex-row-reverse lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <img src={people[0].src} alt="mockup" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-primary-content max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {t('home.message')}
                    </h1>
                    <p className="text-secondary-content max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                        {t('home.heroText')}
                    </p>
                </div>
            </div>
        </section>
    );
}