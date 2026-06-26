import type { TeamMember } from '../../types/team'

type TeamCardProps = {
  member: TeamMember
  onSelect: (member: TeamMember) => void
}

export default function TeamCard({ member, onSelect }: TeamCardProps) {
  const handleClick = () => onSelect(member)

  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <button
      className="group text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-xl p-4"
      onClick={handleClick}
      aria-label={`View bio for ${member.name}`}
    >
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden bg-neutral border-4 border-white shadow-md group-hover:shadow-lg group-hover:border-brand transition-all duration-200">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-brand/10">
            <span className="font-display font-bold text-2xl text-brand">{initials}</span>
          </div>
        )}
      </div>

      <p className="font-display font-bold text-navy text-base group-hover:text-brand transition-colors">
        {member.name}
      </p>
      <p className="text-brand text-xs font-semibold mt-0.5">{member.credentials}</p>
      <p className="text-muted text-sm mt-1 leading-snug">{member.title}</p>
    </button>
  )
}
