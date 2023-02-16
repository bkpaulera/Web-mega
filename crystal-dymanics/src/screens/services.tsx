
export function Services() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Jonees</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <a>
                            Parent
                        </a>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    )
}