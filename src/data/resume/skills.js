// TODO: Add Athletic Skills, Office Skills,
// System, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Bash',
    competency: 3,
    category: ['tools', 'Languages'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['tools'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'System', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'C',
    competency: 5,
    category: ['Languages', 'System'],
  },
  {
    title: 'Redboot',
    competency: 3,
    category: ['tools', 'System'],
  },
  {
    title: 'ARM Assembly',
    competency: 4,
    category: ['Languages', 'System', 'Compiler'],
  },
  {
    title: 'JCup',
    competency: 4,
    category: ['Languages', 'Compiler'],
  },
  {
    title: 'LLVM',
    competency: 5,
    category: ['Compiler'],
  },
  {
    title: 'MLIR',
    competency: 5,
    category: ['Compiler'],
  },
  {
    title: 'TVM',
    competency: 3,
    category: ['Compiler'],
  },
  {
    title: 'CompilerGym',
    competency: 4,
    category: ['Compiler'],
  },
  {
    title: 'JFlex',
    competency: 4,
    category: ['Languages', 'Compiler'],
  },
  {
    title: 'X86 Assembly',
    competency: 4,
    category: ['Languages', 'Compiler', 'System'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['tools'],
  },
  {
    title: 'Rust',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Haskell',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'OCaml',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Smalltalk',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Prolog',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Pascal',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Erlang',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'OpenGL',
    competency: 4,
    category: ['Graphics', 'tools'],
  },
  {
    title: 'GLSL',
    competency: 3,
    category: ['Graphics', 'Languages'],
  },
  {
    title: 'glm',
    competency: 4,
    category: ['Graphics', 'tools'],
  },
  {
    title: 'GDB',
    competency: 4,
    category: ['tools', 'System'],
  },
  {
    title: 'Ros',
    competency: 3,
    category: ['tools', 'System'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
