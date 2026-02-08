import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  profileLink?: string;
  profilePhoto?: string;
  rating: number;
  content: string;
}

const TestimonialCard = ({
  name,
  profileLink,
  profilePhoto,
  rating,
  content,
}: TestimonialCardProps) => {
  const CardContent = () => (
    <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        {profilePhoto && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-dark-700 flex-shrink-0">
            <Image
              src={profilePhoto}
              alt={`${name} profil fotoğrafı`}
              fill
              sizes="48px"
              className="object-cover"
              loading="lazy"
              quality={75}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-subheading truncate">@{name}</p>
          <div className="flex items-center gap-2">
            <div className="text-yellow-500 text-sm flex">
              {"⭐".repeat(rating)}
            </div>
          </div>
        </div>
      </div>

      <p className="text-body leading-relaxed flex-1">{content}</p>
    </div>
  );

  if (profileLink) {
    return (
      <a
        href={profileLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default TestimonialCard;
