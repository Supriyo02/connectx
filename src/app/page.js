import Card from "../../components/card";
import NavigationCard from "../../components/navigationcard";
import PostFormCard from "../../components/postFormCard";
import PostCard from "../../components/postcard";


export default function Home() {
  return (
    <div className='flex mt-4 max-w-4xl mx-auto gap-6 p-4'>
      <div className='w-1/4'>
        <Card>
          <NavigationCard />
        </Card>
      </div>
      <div className="grow pb-5">
        <PostFormCard />
        <PostCard />
      </div>
    </div>
  )
}
