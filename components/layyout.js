import Card from "./card";
import NavigationCard from "./navigationcard";

export default function Layout({ children }) {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6 p-4">
      <div className="w-1/4">
        <Card>
          <NavigationCard />
        </Card>
      </div>
      <div className="grow pb-5">{children}</div>
    </div>
  );
}
