import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <div className="main-wrapper">
        <div class="main-content">
          <h1 class="zone-name-title h1">veil.exchange</h1>
          <p id="hBCb1" class="h2">
            Verifying you are human. This may thake a few seconds.
          </p>
          <div style={{ height: "76.391px" }}></div>
          <div id="XEBFJ5" class="core-msg spacer">
            veil.exchange needs to review the security of your connection before
            proceeding.
          </div>
          <div
            id="MUBJG5"
            role="alert"
            style={{ display: show ? "inline" : "none", visibility: "visible" }}
          >
            Verification is taking longer than expected. Check your Internet
            connection and{" "}
            <a
              class="refresh_link"
              href="https://veil.exchange"
              onclick="window.location.reload(true);"
            >
              refresh the page
            </a>{" "}
            if the issue persists.
          </div>
        </div>
      </div>
      <div class="footer" role="contentinfo">
        <div class="footer-inner">
          <div class="clearfix diagnostic-wrapper">
            <div class="ray-id">
              Ray ID: <code>90e9f8b7997c4c81</code>
            </div>
          </div>
          <div class="text-center" id="footer-text">
            Performance &amp; security by{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.cloudflare.com?utm_source=challenge&amp;utm_campaign=m"
              target="_blank"
            >
              Cloudflare
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
