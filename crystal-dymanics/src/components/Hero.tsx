
import { useTranslation } from 'react-i18next'

export function Hero() {
    const { t } = useTranslation()

    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{t('home.message')}</h1>
                        <p className="mt-4 text-xl text-gray-500">{t('home.heroText')}</p>
                    </div>
                    <div>
                        <div className="mt-40">
                            {/*<!-- Decorative image grid -->*/}
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                <div className=" overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                        alt="" className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}