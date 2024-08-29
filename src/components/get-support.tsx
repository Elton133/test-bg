import { Button } from '@components/ui/button';
import ContactUsModal from '@components/support/contact-us-modal';

export default function GetSupport() {
  return (
    <section
      className={
        'place-self-center v-stack stack-center border rounded-lg py-6 px-3 gap-2'
      }
    >
      <p className={'text-primary text-lg font-bold'}>Get Support</p>
      <p className={'text-muted text-xs sm:text-sm'}>
        Feel free to reach out to our friendly support team!
      </p>
      <hr className={'w-full'} />
      <ContactUsModal />
    </section>
  );
}
