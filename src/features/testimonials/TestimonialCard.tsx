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
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-dark-700 dark:bg-dark-900">
      <div className="mb-4 flex items-center gap-3">
        {profilePhoto && (
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-dark-700">
            <img
              src={profilePhoto}
              alt={`${name} profil fotoğrafı`}
              width={48}
              height={48}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-subheading truncate font-semibold">@{name}</p>
          <div className="flex items-center gap-2">
            <div className="flex text-sm text-yellow-500">{"⭐".repeat(rating)}</div>
          </div>
        </div>
      </div>

      <p className="text-body flex-1 leading-relaxed">{content}</p>
    </div>
  );

  if (profileLink) {
    return (
      <a href={profileLink} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default TestimonialCard;
