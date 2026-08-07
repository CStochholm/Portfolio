interface SkillBadgeProps {
  image: string;
  name: string;
}

function SkillBadge({ image, name }: SkillBadgeProps) {
  return (
    <div className="flex flex-col items-center">
      <img 
        src={image} 
        className="w-16 h-16"
        alt={name}
      />
      <div>{name}</div>
    </div>
  );
}

export default SkillBadge;