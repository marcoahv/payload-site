export interface HeaderData {
  title: string
  links: Array<{ label: string; url: string }>
}

async function fetchHeaderData(): Promise<HeaderData> {
  const response = await fetch('/api/globals/header?depth=1&draft=false&locale=undefined', {
    next: {
      revalidate: 30,
    },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch header data: ${response.statusText}`)
  }

  return await response.json()
}

export default fetchHeaderData
