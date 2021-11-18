export type SkillDataType = {
  name: string
  slug: string
  value: number
  description: string
}

export const codingSkills: SkillDataType[] = [
  {name: 'Javascript', slug: 'javascript', value: 0.8, description: "Pretty good at this"}
  ,{name: 'Python', slug: 'python', value: 0.55, description: "Intermediate"}
  ,{name: 'React', slug: 'react', value: 0.3, description: "Beginner"}
  ,{name: 'HTML/CSS', slug: 'code', value: 0.55, description: "Intermediate"}
  ,{name: 'Ruby', slug: 'ruby', value: 0.3, description: "Beginner"}
  ,{name: 'Nim', slug: 'nim', value: 0.55, description: "Some experiences"}
  ,{name: 'VBA (Excel)', slug: 'code', value: 0.55, description: "Some experiences"}
]

export const otherSkills: SkillDataType[] =  [
  {name: 'Linux', slug: 'linux', value: 0.50, description: "Not a guru but using it daily"}
  ,{name: 'git', slug: 'git', value: 0.35, description: "Basic operations"}
]
