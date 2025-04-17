import clsx from "clsx";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div
      className={clsx(
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName,
      )}
    >
      <div className="flex flex-col items-center max-xl:-mr-8">
        <div className="mr-4 w-[330px] h-[450px] shrink-0 border-2 border-s2 p-1.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="body-2 mb-0.5 text-p5">{item.name}</h4>
          <p className="small-compact text-center uppercase text-s3">{item.role}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;
