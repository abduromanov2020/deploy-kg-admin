import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/option';
// import LoginModule from '@/modules/authentications/login';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/beranda');
  } else {
    redirect('/auth/login');
  }
}
