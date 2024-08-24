import Faq from '@components/support/faq';

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-24 px-4 lg:px-16 xl:px-32 border-b border-b-border"
    >
      <div className="flex flex-col gap-10 items-center max-w-screen-xl mx-auto">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Frequently Asked Questions
        </h1>
        <Faq />
      </div>
    </section>
  );
}
