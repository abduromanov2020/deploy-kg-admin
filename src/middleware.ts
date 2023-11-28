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
    '/acara-kampus-gratis/:path*',
    '/acara-kampus-gratis',
    '/administrasi/:path*',
    '/administrasi',
    '/beranda/:path*',
    '/beranda',
    '/konversi/:path*',
    '/konversi',
    '/nilai-dan-sertifikat/:path*',
    '/nilai-dan-sertifikat',
    '/sekilas-ilmu/:path*',
    '/sekilas-ilmu',
    '/studi-ku/:path*',
    '/studi-ku',
    '/user-management/:path*',
    '/user-management',
    '/verifikasi/:path*',
    '/verifikasi',
  ],
};
