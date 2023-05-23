import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import ateaLogo from "./atea_logo.png";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <div className={styles.logoContainer}>
                            <img
                                src={ateaLogo}
                                alt="AteaLogo"
                                aria-label="AteaLogo"
                                height="20px"
                                className={styles.githubLogo}
                            />
                        </div>
                        <h3 className={styles.headerTitle}>ATEA Asset Management | Demo</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>David og Frida Analytics Oslo</h4>
                </div>

            </header>


            <Outlet />
        </div>
    );
};





export default Layout;
