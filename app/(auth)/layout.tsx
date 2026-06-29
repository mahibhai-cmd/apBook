export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/css/lp20-style.css" />
      <link rel="stylesheet" href="/css/auth-style.css" />
      <link rel="stylesheet" href="/css/auth-responsive.css" />
      {children}
    </>
  );
}
