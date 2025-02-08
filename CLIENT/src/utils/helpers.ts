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
