import Terms from '@/lib/terms-and-condtions';
import { cn } from '@/lib/utils';

export default async function TermsAndConditionsPage() {
  const { termsAndConditions } = Terms;

  return (
    <main className={'w-full h-full bg-white font-poppins'}>
      <section className={'max-w-7xl mx-auto'}>
        <div className={'py-8'}>
          <h1
            className={'font-bold underline text-2xl text-center pb-6'}
          >
            Terms and Conditions
          </h1>
          <p className={'text-base font-bold underline text-left'}>
            Please read the terms and conditions
          </p>
          <div className={'v-stack py-6'}>
            <p className={'text-sm'}>
              The Best Study Guide Ghana (“<b>BSG</b>”) operates this
              website. These Terms and Conditions (“<b>Terms”</b>)
              represent a legally binding contract between you BSG.
              These Terms govern your use of any BSG related content
              including; using our website, and purchasing and/or
              accessing our Study Guides, Study Café, Multiple Choice
              Questions (“<b>MCQ</b>
              ”), and Past Question Indices (“<b>PQI</b>”) (“
              <b>Services</b>” or “<b>Service</b>”). By visiting our
              website, purchasing Study Guides from us, using our MCQs,
              BSG Shop or PQIs you engage our Services and therefore
              agree to be bound by these Terms, as well as our Privacy
              Policy.
            </p>
            <p className={'text-sm'}>
              Any new features or updates to the website are subject to
              these Terms. We reserve the right to update, remove, or
              replace any part of these Terms at any time. You can
              always access these Terms here, to review any changes.
              Please note that your continued use of our Services
              constitute an acceptance of any updates, changes or
              replacements made to these Terms.
            </p>
            <p className={'text-sm'}>
              These Terms apply to all BSG website users including
              content contributors, customers, and/or browsers.
              Therefore, please carefully review these Terms and our
              Privacy Policy. If after your review, you do not agree to
              these Terms and our Privacy Policy, do not access and/or
              use our Services.
            </p>
          </div>
        </div>
        <ol className={'list-decimal list-inside'}>
          <li className="mb-8 font-bold text-base">
            Definitions
            {/*<h3 className="text-lg font-semibold mb-2"></h3>*/}
            <ul className="list-disc list-inside px-4 text-sm my-4">
              {termsAndConditions.definitions.map(
                (definition, index) => (
                  <li key={index} className="mb-2 text-sm">
                    {definition.split(':').map((text, index) => (
                      <span
                        key={index}
                        className={cn('font-normal', {
                          'font-bold': index === 0,
                        })}
                      >
                        {index === 0 ? text : `: ${text}`}
                      </span>
                    ))}
                  </li>
                )
              )}
            </ul>
          </li>

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2"></h3>*/}
            Account Terms
            <ul className="list-disc list-inside px-4 text-sm my-4">
              {termsAndConditions.accountTerms.map((term, index) => (
                <li key={index} className="mb-2 text-sm font-normal">
                  {term}
                </li>
              ))}
            </ul>
          </li>

          {/* Permitted Use */}
          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2"></h3>*/}
            Permitted Use
            <ul className="list-disc list-inside px-4 text-sm my-4">
              {termsAndConditions.permittedUse.map((use, index) => (
                <li key={index} className="mb-2 text-sm font-normal">
                  {use}
                </li>
              ))}
            </ul>
          </li>

          {/* Prohibited Use */}
          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2"></h3>*/}
            Prohibited Use
            <ul className="list-disc list-inside px-4 text-sm my-4">
              {termsAndConditions.prohibitedUse.map((use, index) => (
                <li key={index} className="mb-2 text-sm font-normal">
                  {use}
                </li>
              ))}
            </ul>
          </li>

          {/* Personal Info */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2">*/}
            {/*  */}
            {/*</h3>*/}
            Personal Information
            <ul className="list-disc list-inside px-4 text-sm my-4">
              {termsAndConditions.personalInformation.map(
                (info, index) => (
                  <li key={index} className="mb-2 text-sm font-normal">
                    {info}
                  </li>
                )
              )}
            </ul>
          </li>

          {/* liquidated Damages */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2">*/}
            {/*  */}
            {/*</h3>*/}
            Liquidated Damages
            <ul className="list-disc list-inside px-4 text-sm my-4">
              {termsAndConditions.liquidatedDamages.map(
                (damage, index) => (
                  <li key={index} className="mb-2 font-normal">
                    {damage}
                  </li>
                )
              )}
            </ul>
          </li>

          {/* relianceOnInformation */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2">*/}
            {/*</h3>*/}
            Reliance On Information
            <ul className="list-disc list-inside px-4 text-sm my-4 font-normal">
              {termsAndConditions.relianceOnInformation.map(
                (info, index) => (
                  <li key={index} className="mb-2">
                    {info}
                  </li>
                )
              )}
            </ul>
          </li>

          {/* intellectualProperty */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2">*/}
            {/*</h3>*/}
            Intellectual Property
            <ul className="list-disc list-inside px-4 text-sm my-4 font-normal">
              {termsAndConditions.intellectualProperty.map(
                (property, index) => (
                  <li key={index} className="mb-2">
                    {property}
                  </li>
                )
              )}
            </ul>
          </li>

          {/* modifyingServicesAndPrices */}
          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2">*/}
            {/*</h3>*/}
            Modifying Services And Prices
            <ul className="list-disc list-inside px-4 text-sm my-4 font-normal">
              {termsAndConditions.modifyingServicesAndPrices.map(
                (service, index) => (
                  <li key={index} className="mb-2">
                    {service}
                  </li>
                )
              )}
            </ul>
          </li>

          {/* termination */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2"></h3>*/}
            Termination
            <ul className="list-disc list-inside px-4 text-sm my-4 font-normal">
              {termsAndConditions.termination.map((term, index) => (
                <li key={index} className="mb-2">
                  {term}
                </li>
              ))}
            </ul>
          </li>

          {/* limitationOfLiability */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2">*/}
            {/*</h3>*/}
            Limitation Of Liability
            <ul className="list-disc list-inside px-4 text-sm my-4 font-normal">
              {termsAndConditions.limitationOfLiability.map(
                (liability, index) => (
                  <li key={index} className="mb-2">
                    {liability}
                  </li>
                )
              )}
            </ul>
          </li>

          {/* studyCafe */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2"></h3>*/}
            Study Cafe
            <ul className="list-disc list-inside px-4 text-sm my-4 font-normal">
              {termsAndConditions.studyCafe.map((cafe, index) => (
                <li key={index} className="mb-2">
                  {cafe}
                </li>
              ))}
            </ul>
          </li>

          {/* governingLaw */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2"></h3>*/}
            Governing Law
            <ul className="list-disc list-inside px-4 text-sm my-4 font-normal">
              {termsAndConditions.governingLaw.map((law, index) => (
                <li key={index} className="mb-2">
                  {law}
                </li>
              ))}
            </ul>
          </li>

          {/* questions */}

          <li className="mb-8 font-bold">
            {/*<h3 className="text-lg font-semibold mb-2"></h3>*/}
            Questions
            <ul className="list-disc list-inside px-4 text-sm my-4 font-normal">
              {termsAndConditions.questions.map((question, index) => (
                <li key={index} className="mb-2">
                  {question}
                </li>
              ))}
            </ul>
          </li>
        </ol>
      </section>
    </main>
  );
}
