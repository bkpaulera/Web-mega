

import i18next from "i18next";
import {lang} from '../data/data';

function LanguageSwitch() {

    return (
        <form className="">
            <div>
                <div className=" bg-white rounded p-2">
                    <h3 className="text-sm font-medium text-gray-900 text-center">Language</h3>
                    <fieldset className="mt-4">
                        <legend className="sr-only">Choose a color</legend>
                        <div className="flex items-center space-x-3">
                            {lang.map((item) => (
                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                    <span className='text-black'>{item.nativeName}</span>
                                    <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"
                                        key={item.nativeName} onClick={() => i18next.changeLanguage(item.nativeName)} disabled={i18next.resolvedLanguage === item.nativeName} />
                                    <span id="color-choice-0-label" className="sr-only"> White </span>
                                    <img className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full" src={item.src} />
                                </label>
                            ))}
                        </div>
                    </fieldset>
                </div>
            </div>
        </form>
    );
}

export default LanguageSwitch;