//농사로 api의 이미지는 rtnFileCours와 rtnThumbFileNm를 각각 '|'로 split한 후 합쳐야 한다.
export const getImagePath = (fileCours: string, fileNm: string) => {
  return fileCours.split("|")[0] +'/'+ fileNm.split("|")[0];
};
