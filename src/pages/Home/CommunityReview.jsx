import classNames from "classnames";
import Card from "../../components/Card";

const CommunityReview = (props) => {
  const wrapperClasses = classNames(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 bg-gray-100",
    "p-5 sm:px-36 md:p-10 lg:py-17 lg:px-36"
  );

  const title = "Noteworthy technology acquisitions 2021";
  const src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
  const cardBody =
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";

  const cards = [
    {
      src,
      link: "/",
      body: cardBody,
      title,
    },
    {
      src,
      link: "/",
      body: cardBody,
      title,
    },
    {
      src,
      link: "/",
      body: cardBody,
      title,
    },
    {
      src,
      link: "/",
      body: cardBody,
      title,
    },
  ];

  return (
    <div className={wrapperClasses}>
      {cards.map((item, i) => {
        return <Card key={i} {...item} />;
      })}
    </div>
  );
};

export default CommunityReview;
