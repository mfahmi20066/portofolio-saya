import { profile } from '../config/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-xs text-ash md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          <span className="text-accent">$</span> © {new Date().getFullYear()}{' '}
          {profile.name} — all systems nominal.
        </p>
        <p className="hidden md:block">
          dibangun dengan React · Vite · Tailwind · Framer Motion
        </p>
        <a href="#home" data-cursor className="transition-colors hover:text-accent">
          back to top ↑
        </a>
      </div>
    </footer>
  )
}
