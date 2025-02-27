// convert name
export function stringAvatar(name: string) {
  if (name) {
    const nameParts = name.split("");
    if (nameParts) {
      return {
        children: `${nameParts[0][0]}${nameParts[1][0]}`,
      };
    }
  }
}



export const accessTokenExist = () => {
  const accessToken = JSON.parse(localStorage.getItem('user')!).tokens.accessToken
  return accessToken ? accessToken : ''
}
