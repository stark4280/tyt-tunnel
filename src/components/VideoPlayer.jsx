/**
 * YouTube Video Player - nocookie embed
 */
export default function VideoPlayer({ videoId }) {
    if (!videoId) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-black">
                <div className="text-gray-600 text-sm">Video ID bekleniyor...</div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full bg-black">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
            />
        </div>
    );
}
