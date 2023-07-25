export const loadUser = async (user: string) => {
  const response = await fetch(`https://api.github.com/users/${user}`)
  const data = response.json()

  return data
}
