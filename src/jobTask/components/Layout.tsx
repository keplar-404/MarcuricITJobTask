import PageTitle from "../../components/PageTitle";

export default function Layout({
  path,
  label,
  children,
}: {
  path: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: `/apps/${path}` },
          { label: `${label}`, path: `/apps/${path}`, active: true },
        ]}
        title={label}
      />

      {children}
    </div>
  );
}

// path example-> calernder
// label example-> Calernder
