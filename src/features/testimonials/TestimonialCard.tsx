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
            <div className="flex text-sm text-amber-500" aria-label={`${rating} yıldız`}>
              {[...Array(rating)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
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
