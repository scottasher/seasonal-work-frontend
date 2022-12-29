import CommunityReview from "./CommunityReview";
import Featured from "./Featured";
import MissionStatement from "./MissionStatement";
import PageBanner from "./PageBanner";

const Home = (props) => {
  return (
    <>
      <PageBanner />
      <MissionStatement />
      <Featured />
      <CommunityReview />
    </>
  );
};

export default Home;
