import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import UpdateProfileForm from '@components/settings/update-profile-form';
import ConfirmDeleteUserModal from '@components/settings/delete-user-modal';

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  return (
    <section className="hidden md:v-stack gap-6 animate-fade-u">
      <div className={'v-stack gap-3'}>
        <h3 className={'text-xl font-medium'}>Personal details</h3>
        <p className={'text-sm text-muted'}>
          Make changes to your personal details
        </p>
      </div>
      <div>
        {session?.user && <UpdateProfileForm {...session?.user} />}
      </div>
      <hr className={'border-[#E4E6E8] w-full'} />
      <div className={'v-stack gap-3 text-sm items-start py-4'}>
        <p className={'font-semibold'}>Close account</p>
        <p>
          Caution: Deleting your account is permanent and irreversible.
        </p>
        <div className={'py-3'}>
          <ConfirmDeleteUserModal userID={session?.user.id as string} />
        </div>
      </div>
    </section>
  );
}
