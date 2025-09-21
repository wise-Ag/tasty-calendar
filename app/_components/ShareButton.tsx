"use client";
import Script from "next/script";

declare global {
  interface Window {
    Kakao: any;
  }
}

const ShareButton = ({
  thumbnailPath,
  recipeName
}: {
  thumbnailPath: string;
  recipeName: string;
}) => {
  const handleShareButton = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: recipeName,
        description:"🍎맛달력에서 맛있고 영양가 있는 제철음식 요리해보는거 어때요?🍽",
        imageUrl: thumbnailPath,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href
        }
      }
    });
  };
  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
        onError={(e: Error) => {
          console.error("Script fail error", e);
        }}
        onLoad={() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SHARE_KEY);
        }}
      />
      <button
        onClick={handleShareButton}
        className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-200 cursor-pointer"
      >
        레시피 공유
      </button>
    </>
  );
};

export default ShareButton;
