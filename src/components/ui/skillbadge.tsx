interface SkillBadgeProps {
  image: string;
  name: string;
}


function SkillBadge({ image, name }: SkillBadgeProps) {

  return (
    <div className="w-20 h-20 md:w-30 md:h-30 flex flex-col items-center justify-center gap-1 rounded-xl bg-white shadow-sm border hover:-translate-y-1 hover:shadow-md transition duration-300">

      <img
        src={image}
        className="w-8 h-8 md:w-10 md:h-10"
        alt={name}
      />

      <span className="text-xs md:text-sm font-medium">
        {name}
      </span>

    </div>
  );
}


export default SkillBadge;