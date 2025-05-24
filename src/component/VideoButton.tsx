import Image from "next/image";

interface VideoButtonProps {
  onClick: () => void;
}

const VideoButton = ({ onClick }: VideoButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 py-3 px-6 rounded-lg flex items-center"
    >
      <div className="bg-gray-700 rounded-full p-2 mr-3">
        <Image
          src="/icons/video-play.svg"
          alt="Play video"
          width={24}
          height={24}
        />
      </div>
      <span className="font-medium">Watch this short video in Nepali</span>
    </button>
  );
};

export default VideoButton;
