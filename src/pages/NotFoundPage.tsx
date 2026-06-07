import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background-50 px-6">
      <div className="text-center">
        <p className="font-heading text-6xl font-bold text-primary-500">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-foreground-900">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-2 text-sm text-foreground-500">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-background-50 transition hover:bg-primary-600"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  )
}
