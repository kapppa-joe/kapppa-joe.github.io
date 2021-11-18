export type SkillDataType = {
  name: string
  slug: string
  value: number
  description: string
}

export const codingSkills: SkillDataType[] = [
  {name: 'Javascript', slug: 'javascript', value: 0.8, description: "Pretty good at this"}
  ,{name: 'Python', slug: 'python', value: 0.55, description: "Intermediate"}
  ,{name: 'React', slug: 'react', value: 0.35, description: "Still much more to learn"}
  ,{name: 'HTML/CSS', slug: 'code', value: 0.55, description: "Intermediate"}
  ,{name: 'SASS', slug: 'sass', value: 0.25, description: "Beginner"}
  ,{name: 'Ruby', slug: 'ruby', value: 0.25, description: "Beginner"}
  ,{name: 'Nim', slug: 'nim', value: 0.55, description: "Some experiences"}
  ,{name: 'VBA (Excel)', slug: 'code', value: 0.55, description: "Some experiences"}
]

export const otherSkills: SkillDataType[] =  [
  {name: 'Linux', slug: 'linux', value: 0.50, description: "Not a guru but using it daily"}
  ,{name: 'git', slug: 'git', value: 0.40, description: "Basic operations"}
  ,{name: 'sushi eating', slug: 'sushi', value: 0.9, description: "Can eat a lot"}
]
