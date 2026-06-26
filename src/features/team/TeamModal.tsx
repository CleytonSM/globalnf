import Modal from '../../components/Modal/Modal'
import type { TeamMember } from '../../types/team'

type TeamModalProps = {
  member: TeamMember | null
  onClose: () => void
}

export default function TeamModal({ member, onClose }: TeamModalProps) {
  if (!member) return null

  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <Modal isOpen={!!member} onClose={onClose} title={member.name}>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-brand/10 shrink-0">
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-display font-bold text-xl text-brand">{initials}</span>
              </div>
            )}
          </div>
          <div>
            <h2 className="font-display font-bold text-navy text-xl">{member.name}</h2>
            <p className="text-brand text-sm font-semibold">{member.credentials}</p>
            <p className="text-muted text-sm">{member.title}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-dark/80 leading-relaxed text-sm">{member.bio}</p>

        {/* LinkedIn */}
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand hover:underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View LinkedIn profile
          </a>
        )}
      </div>
    </Modal>
  )
}
