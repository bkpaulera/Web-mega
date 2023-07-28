import { useTranslation } from "react-i18next";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a className="text">Contato</a>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <Link to={"https://www.linkedin.com/in/paulo-vinicius-cristovam/"}>
                        <BsLinkedin className='h-10 w-10' />
                    </Link>
                    <Link to={"https://wa.me/5519978036970"}>
                        <BsWhatsapp className='h-10 w-10' />
                    </Link>
                </div>
            </div>
            <div>
                <p>{t('footer.Copyright')}</p>
            </div>
        </footer>
    );
}
