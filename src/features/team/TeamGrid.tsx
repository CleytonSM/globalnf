import { useState } from 'react'
import TeamCard from './TeamCard'
import TeamModal from './TeamModal'
import { TEAM_MEMBERS } from './teamData'
import type { TeamMember } from '../../types/team'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const handleSelectMember = (member: TeamMember) => setSelectedMember(member)
  const handleCloseModal = () => setSelectedMember(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="The Team"
          title="Founded by nurses and builders"
          subtitle="Six founding team members united by a shared belief: that every nurse deserves the support to reach their full potential."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} onSelect={handleSelectMember} />
          ))}
        </div>
      </div>
      <TeamModal member={selectedMember} onClose={handleCloseModal} />
    </section>
  )
}
