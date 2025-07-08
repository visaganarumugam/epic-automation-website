/* eslint-disable @next/next/no-img-element */
import { cn } from "../../lib/utils";
import { Marquee } from "../../components/magicui/marquee";

const reviews = [
  {
    name: "Ava Robotics",
    username: "@ava",
    body: "The automation solutions provided by Robotics Co. have revolutionized our assembly line. Efficiency is up 40%!",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    name: "Dr. Isaac",
    username: "@isaac",
    body: "Their robotic arms are precise and reliable. Integration with our existing systems was seamless.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    name: "Mira Tech",
    username: "@mira",
    body: "We deployed their mobile robots in our warehouse. Inventory management has never been easier.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
  },
  {
    name: "RoboLab",
    username: "@robolab",
    body: "The support team at Robotics Co. is top-notch. They helped us customize our robots for unique research needs.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    name: "Elon",
    username: "@elon",
    body: "Cutting-edge robotics! Our manufacturing plant is now smarter and safer thanks to their solutions.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
  },
  {
    name: "Sophia",
    username: "@sophia",
    body: "The collaborative robots are easy to program and work flawlessly alongside our human operators.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    name: "Atlas Industries",
    username: "@atlas",
    body: "Downtime has dropped dramatically since we started using Robotics Co.'s predictive bots.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    name: "Dr. Ada",
    username: "@ada",
    body: "Their AI-powered vision systems have improved our quality control process beyond expectations.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
  },
  {
    name: "Bolt Automation",
    username: "@bolt",
    body: "From consultation to deployment, Robotics Co. exceeded our expectations at every step.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3.5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-0.5 ">
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400  inline" fill="currentColor" viewBox="0 0 20 20">
          <polygon points="9.9,1.1 12.3,6.6 18.2,7.3 13.7,11.4 15,17.2 9.9,14.1 4.8,17.2 6.1,11.4 1.6,7.3 7.5,6.6" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-400 inline" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <polygon fill="url(#half)" points="9.9,1.1 12.3,6.6 18.2,7.3 13.7,11.4 15,17.2 9.9,14.1 4.8,17.2 6.1,11.4 1.6,7.3 7.5,6.6" />
        </svg>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gray-300 inline" fill="currentColor" viewBox="0 0 20 20">
          <polygon points="9.9,1.1 12.3,6.6 18.2,7.3 13.7,11.4 15,17.2 9.9,14.1 4.8,17.2 6.1,11.4 1.6,7.3 7.5,6.6" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-full  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-300/10 backdrop-blur-sm hover:bg-gray-200/10",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      {/* Star rating at top right */}
      <div className="absolute top-6 right-3 z-10">
        <StarRating rating={rating} />
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full w-12 h-12 object-cover"  alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xl font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-md font-medium text-white/40">{username}</p>
        </div>
      </div>
      <p className="mt-5 text-lg w-full text-amber-50">{body}</p>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee  pauseOnHover vertical className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee  pauseOnHover vertical className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#101014]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#101014]"></div>
    </div>
  );
}
