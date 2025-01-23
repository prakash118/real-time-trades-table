import Search from './search';
import Toggle from './toggle';

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-4">
      <div className="flex justify-center gap-4 mb-4">
        <Search />
        <Toggle />
      </div>
      {children}
    </div>
  );
}
