import Heading from "@/components/landing/Heading";
import React from "react";

const page = () => {
  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-950">
      <div className="bg-linear-30 from-transparent via-indigo-50 dark:via-indigo-950 to-transparent w-full h-full absolute top-0 left-0 from-20% to-80% z-0" />
      <div className="section-container ">
        <Heading
          heading="Privacy Policy"
          subheading="If you have any questions, please get in touch!"
        />

        <div className="flex flex-col gap-4">
          <p>
            <strong>Effective date:</strong> 2025-01-01
          </p>

          <p>
            Moneter (“we,” “us,” or “our”) provides personal finance tools that
            help you track transactions, budgets, bills, net worth, goals, and
            reports. This Privacy Policy explains what information we collect,
            how we use and share it, and the choices you have. By using Moneter,
            you agree to this Policy.
          </p>

          <h2>1) What We Collect</h2>
          <p>We collect only what we need to provide and improve Moneter.</p>
          <ul>
            <li>
              <strong>Account information:</strong> name, email, password
              (hashed), and settings.
            </li>
            <li>
              <strong>Financial data you add:</strong> transactions, categories,
              balances, assets, liabilities, goals, budgets, bills, attachments,
              and notes.
            </li>
            <li>
              <strong>Usage data:</strong> app interactions, device/browser
              type, pages viewed, timestamps, crash logs, and diagnostics.
            </li>
            <li>
              <strong>Support content:</strong> messages you send to our support
              channels.
            </li>
            <li>
              <strong>Cookies & similar tech:</strong> to remember preferences,
              keep you signed in, and measure performance. See “Cookies” below.
            </li>
          </ul>

          <h2>2) How We Use Information</h2>
          <ul>
            <li>
              Provide core features (transactions, budgeting, net worth,
              reports).
            </li>
            <li>
              Personalize your experience (categories, dashboards,
              recommendations).
            </li>
            <li>Maintain security, prevent fraud, and debug issues.</li>
            <li>
              Analyze aggregate trends to improve Moneter’s performance and
              reliability.
            </li>
            <li>
              Communicate service updates, security alerts, and account notices.
            </li>
            <li>
              Comply with legal obligations and enforce our{" "}
              <a href="/terms">Terms of Service</a>.
            </li>
          </ul>

          <h2>3) Data Sharing</h2>
          <p>
            <strong>We do not sell or broker your personal information.</strong>{" "}
            We also do not share your financial data with advertisers.
          </p>
          <p>We share information only with:</p>
          <ul>
            <li>
              <strong>Service providers</strong> acting on our behalf (e.g.,
              cloud hosting, analytics, email delivery). They access data only
              to perform services for us under contractual confidentiality and
              security obligations.
            </li>
            <li>
              <strong>Legal/Compliance</strong> when required by law, subpoena,
              or to protect the rights, property, or safety of users or the
              public.
            </li>
            <li>
              <strong>Business transfers</strong> (e.g., merger or acquisition).
              We will notify you and honor this Policy or obtain your consent as
              required.
            </li>
          </ul>

          <h2>4) Security</h2>
          <p>
            We use technical and organizational measures to protect your
            information, including encryption in transit, least-privilege
            access, audit logging, and regular security reviews. No system is
            100% secure; we encourage strong, unique passwords and two-factor
            authentication (if available).
          </p>

          <h2>5) Data Retention</h2>
          <p>
            We retain information for as long as your account is active or as
            needed to provide the service, comply with legal obligations,
            resolve disputes, and enforce agreements. You may delete data from
            within the app; residual copies may persist in backups for a limited
            period.
          </p>

          <h2>6) Your Rights & Choices</h2>
          <ul>
            <li>
              <strong>Access & export:</strong> view or download your data.
            </li>
            <li>
              <strong>Edit & delete:</strong> update or remove information you
              added.
            </li>
            <li>
              <strong>Object & restrict:</strong> manage preferences for
              analytics and communications.
            </li>
            <li>
              <strong>Cookies:</strong> control cookies via your browser or
              device settings.
            </li>
          </ul>
          <p>
            If you are in the EEA/UK, our legal bases include contract
            necessity, legitimate interests (e.g., security and improvement),
            legal compliance, and consent where required. You may lodge a
            complaint with your local data protection authority.
          </p>
          <p>
            If you are in California, you have CCPA rights to know, delete, and
            opt out of sale/share of personal information. Moneter does not
            “sell” personal information as defined by CCPA.
          </p>

          <h2>7) International Transfers</h2>
          <p>
            Where data moves across borders, we use appropriate safeguards (such
            as Standard Contractual Clauses) to protect your information under
            applicable law.
          </p>

          <h2>8) Third-Party Links</h2>
          <p>
            Moneter may link to third-party sites or services. Their privacy
            practices are governed by their policies, not ours.
          </p>

          <h2>9) Children’s Privacy</h2>
          <p>
            Moneter is not directed to children under 13 (or the minimum age in
            your jurisdiction). We do not knowingly collect personal information
            from children.
          </p>

          <h2>10) Changes to This Policy</h2>
          <p>
            We may update this Policy to reflect changes to our practices or
            legal requirements. We will post the updated Policy with a new
            effective date and, when appropriate, provide additional notice.
          </p>

          <h2>11) Contact Us</h2>
          <p>
            Questions or requests about privacy? Contact us at{" "}
            <a href="mailto:privacy@moneter.app">privacy@moneter.app</a>
          </p>

          <hr />
          <p>
            <em>
              This Privacy Policy is for informational purposes and does not
              constitute legal advice. Consider consulting counsel to tailor it
              to your business and jurisdiction.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
