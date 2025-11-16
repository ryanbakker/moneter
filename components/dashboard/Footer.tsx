import Image from "next/image";
import Script from "next/script";
import { Button } from "../ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="dashboard-container mt-3 glass-section glass-footer">
      <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between w-full mx-auto">
        <p className="text-sm flex flex-row items-center gap-2">
          © Moneter 2025 &nbsp; | &nbsp; Made with{" "}
          <Heart
            size={15}
            className="text-rose-700 hover:fill-rose-700 transition-all"
          />
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <ul className="flex flex-col md:flex-row mt-5 md:mt-0 items-center gap-4">
            <li>
              <Link
                href="/manage-plan"
                className="hover:text-foreground transition-colors"
              >
                Manage Plan
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://creativecommons.org/licenses/by-nc/4.0/"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                License
              </Link>
            </li>
            <li>
              <Button
                id="shielded-logo"
                type="button"
                aria-label="Open Shielded Site"
                className="p-0 bg-transparent border-0 rounded-full"
                variant="ghost"
              >
                <Image
                  alt="shielded"
                  src="https://shielded.co.nz/img/custom-logo.png"
                  height="30"
                  width="30"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* Third-party Shielded script */}
      <Script
        src="https://staticcdn.co.nz/embed/embed.js"
        strategy="afterInteractive"
      />
      <Script
        id="shielded-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              function initShielded() {
                try {
                  if (typeof ds07o6pcmkorn === 'function') {
                    var frameName = new ds07o6pcmkorn({
                      openElementId: "#shielded-logo",
                      modalID: "modal",
                    });
                    frameName.init();
                  }
                } catch (e) {
                  // swallow
                }
              }

              if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(initShielded, 0);
              } else {
                window.addEventListener('DOMContentLoaded', initShielded);
                window.addEventListener('load', initShielded);
              }
            })();
          `,
        }}
      />
    </footer>
  );
};

export default Footer;
