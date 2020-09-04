export default function getFileInformation(fileString) {
  if(typeof fileString == 'string' ){
  const separatedFileString=fileString.split('/')
  const separatedFileStringLength=separatedFileString.length
  const fileType=separatedFileString[separatedFileStringLength-1]

  const fileName=separatedFileString[separatedFileStringLength-1].split('.')[0]
  return {fileType,fileName}
}throw("Parâmetro passado não é string")

}
