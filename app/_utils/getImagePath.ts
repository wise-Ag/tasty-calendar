//농사로 api의 이미지는 rtnFileCours와 rtnThumbFileNm를 각각 '|'로 split한 후 합쳐야 한다.
const BASE_IMG_URL = "http://www.nongsaro.go.kr/";

export const getImagePath = (fileCours: string, fileNm: string) => {
  return BASE_IMG_URL + fileCours.split("|")[0] + "/" + fileNm.split("|")[0];
};

export const getNImagePath = (
  fileCours: string,
  fileNm: string,
  index: number
) => {
  return (
    BASE_IMG_URL + fileCours.split("|")[index] + "/" + fileNm.split("|")[index]
  );
};
