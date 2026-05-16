export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/auth-style.css" />
      <link rel="stylesheet" href="/css/auth-responsive.css" />
      {children}
    </>
  );
}
