import LinkedBookDetails from '@/components/LinkedBookDetails'
import { getBooksByKeyword } from '@/lib/getter'

interface BookResultProps {
  params: {
    keyword?: string
  }
}

export default async function BookResult({
  params: { keyword = 'React' },
}: BookResultProps) {
  const books = await getBooksByKeyword(keyword)
  return (
    <div>
      {books.map((b, i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </div>
  )
}
