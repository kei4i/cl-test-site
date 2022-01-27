import {
  Links,
  NavLink,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLoaderData
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/styles/main.css";

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - about us",
    description: "Cadolabs. We are an IT company with a high level of experience in consulting, software enhancement and business growth solutions" };
};

export function loader() {
  return {
    ENV: {
      AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY
    }
  };
}


export default function App() {
  console.log(useLoaderData());
  return (
      <Document>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
  );
}

function Document({
                    children,
                    title
                  }: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,user-scalable=yes, initial-scale=1.0, maximum-scale=4.0, minimum-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/images/touch-icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/images/touch-icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/images/touch-icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/images/touch-icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/images/touch-icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/images/touch-icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/images/touch-icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/touch-icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/touch-icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/touch-icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/touch-icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/images/touch-icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/touch-icons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/images/touch-icons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#4de3b6" />
          <meta name="msapplication-TileColor" content="#4de3b6" />
          <meta name="msapplication-navbutton-color" content="#4de3b6" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#4de3b6" />
          <meta property="og:title" content="Cadolabs" />
          <meta property="og:description" content="We are an IT company with a high level of experience in consulting, software enhancement and business growth solutions" />
          <meta property="og:type" content="article"/>
          <meta property="og:url" content="https://cadolabs.io"/>
          <meta property="og:image" content="https://cadolabs.io/images/touch-icons/apple-icon-180x180.png"/>
          <meta property="og:image:secure_url" content="https://cadolabs.io/images/touch-icons/apple-icon-180x180.png"/>
          <meta property="og:image:type" content="image/png"/>
          <meta property="og:image:width" content="180" />
          <meta property="og:image:height" content="180" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </body>
      </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  let activeClassName = "active";
  let menuIsActive = false;
  return (
      <div className="remix-app">
        <div className="main-content">
          <header>
            <div className="wrapper">
              <a href="/">
                <img src="/images/cado_logo.svg" alt="Cadolabs" width="135" height="78" />
              </a>
              <nav className="menu decorated">
                <div className="menu-toggler" onClick={ () => menuIsActive=true }></div>
                <div className="ul">
                  <NavLink
                      to="/"
                      prefetch="intent"
                      className={({ isActive }) => isActive ? activeClassName : undefined}
                  >
                    <span>About CADO</span>
                  </NavLink>
                  <NavLink
                      to="/careers"
                      prefetch="intent"
                      className={({ isActive }) => isActive ? activeClassName : undefined}
                  >
                    <span>Careers</span>
                  </NavLink>
                  <NavLink
                      to="/contact"
                      prefetch="intent"
                      className={({ isActive }) => isActive ? activeClassName : undefined}
                  >
                    <span>Contacts</span>
                  </NavLink>
                  <a href="https://github.com/Cado-Labs" rel="noreferrer" target="_blank">
                    <img src="/images/github.svg" alt="github" width="83" height="19" />
                  </a>
                  <NavLink
                      to="/tech-radar"
                      prefetch="intent"
                      className={({ isActive }) => isActive ? activeClassName : undefined}
                  >
                    <span><img src="/images/techradar.svg" alt="techradar" width="99" height="16" /></span>
                  </NavLink>
                </div>
              </nav>
            </div>
          </header>
          {children}
        </div>
        <footer>
          <div className="wrapper">
            <div className="adress">
              411, 4/F, Austin Tower, 22-26, Austin Av., <br />Tsimshatsui, Kowloon, Hong Kong
            </div>
            <nav className="menu">
              <ul>
                <li>
                  <NavLink
                      to="/"
                      prefetch="intent"
                      className={({ isActive }) => isActive ? activeClassName : undefined}
                  >
                    About CADO
                  </NavLink>
                </li>
                <li>
                  <NavLink
                      to="/careers"
                      prefetch="intent"
                      className={({ isActive }) => isActive ? activeClassName : undefined}
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                      to="/contact"
                      prefetch="intent"
                      className={({ isActive }) => isActive ? activeClassName : undefined}
                  >
                    Contacts
                  </NavLink>
                </li>
                <li><a href="https://github.com/Cado-Labs" rel="noreferrer" target="_blank">
                  <img src="/images/github.svg"
                       alt="github"
                       width="83"
                       height="19" />
                </a></li>
                <li>
                  <a href="/tech-radar">
                    <img src="/images/techradar.svg" alt="techradar" width="99" height="16" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="wrapper">
            <div className="footer-links">
              <NavLink
                  to="/privacy"
                  prefetch="intent"
                  className={({ isActive }) => isActive ? activeClassName : undefined}
              >
                Privacy Policy
              </NavLink>
              <NavLink
                  to="/cookie-policy"
                  prefetch="intent"
                  className={({ isActive }) => isActive ? activeClassName : undefined}
              >
                Cookie Policy
              </NavLink>
            </div>
          </div>
        </footer>
      </div>
  );
}
