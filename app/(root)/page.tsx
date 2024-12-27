import StartUpcard from "@/components/StartUpcard";
import SearchForm from "../../components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: Date.now(),
      views: 44,
      author: { _id: 1, name: "Rhoda" },
      _id: 1,
      description: "description",
      image:
        "https://wp-int-blog.s3.eu-central-1.amazonaws.com/wp-content/uploads/2023/10/09143009/Humanoid-robot_freepik-scaled.jpg",
      category: "robots",
      title: "Some Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote onPitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section>
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartUpcard key={post?.id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
