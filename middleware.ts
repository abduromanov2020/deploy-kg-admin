import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function (req) {
    return;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        return !!token;
      },
    },
  },
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/acara-kampus/:path*',
    '/kalender/:path*',
    '/konsultasi-layanan/:path',
    '/nilai-sertif/:path*',
    '/pengajuan/:path*',
    '/penyaluran-kerja/:path*',
    '/rencana-studi/:path*',
    '/ruang-diskusi/:path*',
    '/sekilas-ilmu/:path*',
    '/user/:path*',
  ],
};
