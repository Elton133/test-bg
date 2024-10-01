import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BSG - Terms and Conditions',
  description: 'Read the privacy policy of the Best Study Guide Ghana.',
  keywords: ['terms', 'conditions', 'legal', 'privacy', 'policy'],
  robots: 'follow, index',
};
export default function PrivacyPolicyPage() {
  return (
    <main className={'py-4 md:py-10 bg-white'}>
      <section className={'max-w-7xl w-full mx-auto v-stack gap-12'}>
        {/* Header section */}
        <div className={'v-stack gap-6 px-2'}>
          <div className={'text-center font-bold v-stack my-6'}>
            <h1 className={'text-4xl underline'}>Best Study Guide</h1>
            <h1 className={'text-2xl underline font-semibold'}>
              Privacy policy
            </h1>
          </div>
          <div className={'px-2 md:px-4 v-stack'}>
            <p>
              BSG (<b>&quot;us&quot;</b>, <b>&quot;we&quot;</b>, or{' '}
              <b>&quot;our&quot;</b>) operates{' '}
              <b>&quot;The Best Study Guide&quot;</b> website (the{' '}
              <b>&quot;Service&quot;</b>). This Privacy Policy explains
              how we collect, use, and disclose personal data when you
              use our Service, as well as the choices you have regarding
              that data. <b>&quot;Personal Data&quot;</b> refers to any
              information that identifies you as an individual, such as
              your name, email address, or payment details. We are
              committed to safeguarding your privacy and security by
              ensuring you understand how your Personal Data is handled
              and what rights you have concerning its use.
            </p>
            <p>
              Unless we link to a different policy or state otherwise,
              this Privacy Policy applies when you visit the BSG site or
              use the Service, regardless of how you access it.
            </p>
            <p>
              By accessing and using our Service, you consent to the
              collection and processing of your personal data as
              outlined in this Privacy Policy. You can withdraw your
              consent at any time by adjusting your browser settings to
              limit cookies, or by contacting us to delete your account
              and associated data. Please note that withdrawing consent
              may limit your ability to use certain features of our
              Service.
            </p>
            <p>
              We encourage you to read the Privacy Policy carefully and
              before using the services provided. By accessing our
              website, or by creating an account through our Service,
              you hereby agree to the Privacy Policy.
            </p>
            <p>
              This Privacy Policy was last updated on 11 September 2024.
            </p>
          </div>
        </div>
        {/*Collection of information*/}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>
            Collection of Information
          </h1>
          <div className={'px-2 md:px-4 v-stack gap-4'}>
            <p>
              We need to collect your personal information when you sign
              up for an account, use our web application, or communicate
              with us. We will only ever ask you for the least
              information that we need, and we only ever use it for
              lawful purposes.
            </p>
            <div className={'v-stack gap-6'}>
              <h1 className={'font-semibold'}>
                Types of Data Collected:
              </h1>
              <ul className={'list-disc list-outside pl-8 v-stack'}>
                <li>
                  <p className={'font-semibold'}>Personal Data: </p>
                  <ul className={'px-4 list-disc text-'}>
                    {dataCollected.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <p>
                    <b>Usage Data:</b> We may also collect information
                    about how the Service is accessed and used
                    (&quot;Usage Data&quot;). This Usage Data may
                    include information such as your computer&quot;s
                    Internet Protocol address (e.g. IP address), browser
                    type, browser version, the pages of our Service that
                    you visit, the time and date of your visit, the time
                    spent on those pages, unique device identifiers and
                    other diagnostic data.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Use of data*/}

        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>
            Tracking & Cookies Data
          </h1>
          <div className={'px-2 md:px-4 v-stack'}>
            <p>
              We use cookies and similar tracking technologies to track
              the activity of our service, improve performance and hold
              certain information (“Tracking Technologies”). Cookies are
              files with small amounts of data which may include an
              anonymous unique identifier. Cookies are sent to your
              browser from a website and stored on your device.{' '}
            </p>
            <p>
              The Tracking Technologies allow us to automatically
              collect information about you and your online behaviour
              for different purposes, such as in order to enhance your
              navigation on our Services, improve our Services’
              performance and customise your experience on our Services.
            </p>
            <p>
              You can control the use of cookies or other Tracking
              Technologies through your web browser settings.
            </p>
          </div>
        </div>

        {/* Contribution */}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>
            Your contribution
          </h1>
          <div className={'px-2 md:px-4'}>
            <p>
              BSG is a public platform where users contribute content
              and add information to professional profile pages, with
              the understanding that such content will be publicly
              accessible. Be aware that any information or content you
              publish may be read, collected, shared, or used by others
              who access it. This information will be searchable online
              and may be reused or modified by others.
            </p>
          </div>
        </div>

        {/*  Info usage */}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>
            Use of information
          </h1>
          <div className={'v-stack px-2 md:px-4'}>
            <p>
              We process your personal data based on various legal
              grounds, including your consent, our legitimate interest
              in providing and improving our services, or fulfilling our
              legal obligations. By using our Service or providing your
              information, you consent to this processing. You have the
              right to withdraw your consent at any time.
            </p>
            <p>
              We may use your personal information to provide our
              services, process payments, communicate with you, and
              improve our web application. We may also use your
              information to send you promotional materials or other
              communications, but you can opt out of these
              communications at any time via the unsubscribe button in
              our emails.
            </p>
            <p>
              We will retain your personal data for as long as your
              account is active or as necessary to provide you with our
              services. If you deactivate your account, we will retain
              your data for 30 days in case you choose to reactivate
              your account. After this period, all your data will be
              permanently deleted unless required by law or for
              legitimate business purposes.
            </p>
          </div>
        </div>

        {/*Sharing*/}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>
            Sharing With Third-Party Sites
          </h1>
          <div className={'px-2 md:px-4'}>
            <p>
              We may share your personal information with trusted
              third-party service providers who assist us in operating
              our platform, such as payment processors. However, we do
              not store or access your payment details, as these are
              securely handled by our payment processor. Third parties
              may have access to your information only for purposes of
              performing tasks on our behalf and under obligations
              similar to those in this Privacy Policy.
            </p>
            <p>
              We do not rent or sell your personal information to third
              parties. We may also share your information if required by
              law or to protect our rights.
            </p>
          </div>
        </div>

        {/*  Link to other sites */}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>
            Links to other sites
          </h1>
          <div className={'px-2 md:px-4'}>
            <p>
              Our privacy policy applies only to our platform. If you
              link to other websites from our site, please be aware that
              we are not responsible for the content, practices, or
              privacy policies of those sites whether accessed through
              links on our platform or once you navigate away from our
              platform. The information on those sites does not
              represent our opinions or beliefs.
            </p>
          </div>
        </div>

        {/*  Security */}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>
            Security of information
          </h1>
          <div className={'v-stack px-2 md:px-4'}>
            <p>
              We implement a range of security measures, including
              encryption and security storage solutions to protect your
              personal information from unauthorized access, use, or
              disclosure.{' '}
            </p>
            <p>
              If you deactivate your account, your data will be retained
              for 30 days in case you choose to return. After this
              period, all your data will be permanently deleted.{' '}
            </p>
            <p>
              While we take reasonable steps to safeguard your
              information, no security measures are perfect or
              impenetrable. Therefore, we cannot be responsible for the
              acts of those who gain unauthorised access or abuse the
              services. We make no warranty, express, implied or
              otherwise, that we will prevent such access.
            </p>
          </div>
        </div>
        {/* Your rights */}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>Your rights</h1>
          <div className={'v-stack px-2 md:px-4 gap-4'}>
            <ul className={'list-outside list-disc'}>
              <li>
                <b>Access Your Data:</b> You can ask us for a copy of
                the personal information we have about you.
              </li>
              <li>
                <b>Correct Your Data:</b> If you think any of your
                information is incorrect, you can ask us to fix it.
              </li>
              <li>
                <b>Object to Processing:</b> You can object to how we
                use your data in certain situations.
              </li>
              <li>
                <b>Notification of Breach:</b> If we believe your data
                has been accessed by someone unauthorized, we will
                notify you.
              </li>
              <li>
                <b>Stop Communications:</b> You can tell us to stop
                contacting you or sharing your data with our affiliated
                companies at any time.
              </li>
            </ul>
            <p>
              If you want to exercise any of these rights, please email
              us at{' '}
              <a
                type={'mail'}
                href={
                  'mailto:thebeststudyguidegh@gmail.com?subject=Hello'
                }
                className={
                  'text-blue-400 font-semibold hover:underline'
                }
              >
                thebeststudyguidegh@gmail.com
              </a>
              .
            </p>
            <p>
              We may ask for some information to confirm your identity
              to ensure we only share your data with you. We might also
              request more details to help with your request.
            </p>
          </div>
        </div>
        {/* Changes */}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>
            Changes to this Policy
          </h1>
          <div className={'v-stack px-2 md:px-4'}>
            <p>
              We reserve the right to update this Privacy Policy from
              time to time so please check this page regularly for
              updates. If we make material changes, we will notify you
              by email or by posting a notice on our web application.
              Changes to this Privacy Policy are effective as of the
              stated “Last Updated” date, and your continued use of the
              Services after the Last Updated date will constitute
              acceptance of, and agreement to be bound by, those
              changes.
            </p>
            <p>
              This policy should be read and applied together with our{' '}
              <Link
                href={'/terms-and-conditions'}
                className={'text-blue-400 font-semibold'}
              >
                Terms and Conditions
              </Link>{' '}
              available on our website.{' '}
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className={'v-stack gap-6 px-2'}>
          <h1 className={'text-2xl font-semibold'}>Contact Us</h1>
          <div className={'px-2 md:px-4'}>
            <p>
              For any questions or concerns about our privacy practices,
              please do not hesitate to reach out to us using the
              contact channels provided on our site or send us an email
              directly at{' '}
              <a
                type={'mail'}
                href={
                  'mailto:thebeststudyguidegh@gmail.com?subject=Hello'
                }
                className={
                  'text-blue-400 font-semibold hover:underline'
                }
              >
                thebeststudyguidegh@gmail.com
              </a>
              .{' '}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const dataCollected = [
  'Email address;',
  'First name and last name;',
  'Phone number;',
  'Postal address, Region, Digital address, City;',
  'Payment information; and',
  'Cookies and Usage Data.',
];
