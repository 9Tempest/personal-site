// TODO Add a couple lines about each project
const data = [
  {
    title: 'MIR-level throughput estimation model with Graph Neural Network',
    subtitle: 'A research project for estimating throughput of a MIR basic block given its live intervals',
    image: '/images/projects/IR-level_Cost_Model.png',
    link: 'https://github.com/GranLte/granLte',
    date: '2023-12-14',
    desc:
      'A MIR-level Basic Block inverse-throughput estimation model with Graph Neural Network. '
      + ' To bridge the gap between infinite variables and finite registers, we construct graph representation with interference edges.'
      + ' One novel methodology to collect LLVM IR basic block throughput is also presented. ',
  },
  {
    title: 'Arbitrary N-way Out-of-Order superscalar RISC-V processor with R10K-style register renaming',
    subtitle: 'A 5-stage OoO pipeline processor with R10K-style register renaming',
    image: '/images/projects/A99.png',
    link: 'https://github.com/9Tempest/A99Doc/blob/main/A99_report.pdf',
    date: '2023-12-14',
    desc:
      'An efficient, innovative, and high-performing N-way Superscalar Out-of-Order RISC-V Processor cooperated in a group of six.'
      + ' Key features include Early Tag Broadcast,Conservative Store-to-Load Forwarding, Victim Cache, GShare Branch predictor, Return Address Stack, and a K-way Non-blocking D-Cache.',
  },
  {
    title: 'User-level threading in C/C++',
    subtitle: 'Two methods of adding User-level threading into C/C++',
    image: '/images/projects/user-level.png',
    link: 'https://git.uwaterloo.ca/mkarsten/libfibre/-/tree/master/gcc',
    date: '2022-09-01',
    desc:
      'Two methods of adding User-level threading into C/C++: we add user-level threads provided by Libfibre into C++ by implementing a glue layer between '
      + 'std::thread and Libfibre in GCC; we add user-level threads into C by providing an implementation of Pthread utilizing user-level threading primitives provided by Cforall runtime system',
  },
  {
    title: 'Pokemon Fight!',
    subtitle: 'A 3D pokemon battle game by C++ and OpenGL',
    image: '/images/projects/pokemon.png',
    link: 'https://www.youtube.com/watch?v=aLH9dgIDTGw&ab_channel=zhenyanzhu',
    date: '2022-09-01',
    desc:
      'A 3D battle game implemented in C++ with OpenGL. The player will control Pikachu to defeat Snorlax.'
      + ' In this project, I programmed a key-frame system, Phong/Toon shading, hierarchy transformation, particle systems, texture mapping, 3D sound system, shadow mapping, and etc.'
      + ' All of the scene and Pokemons were entirely modelled by myself via Lua script.',
  },
  {
    title: 'Real-time MicroKernel & Train Control System',
    subtitle: 'The predecessor of QNX operating system',
    image: '/images/projects/trains.jpg',
    link: 'https://git.uwaterloo.ca/z277zhu/trains-docs',
    date: '2022-05-01',
    desc:
      'Developed a real-time microkernel from scratch in C and ARM on ts7200 embedded board. '
      + ' We first designed and developed Task primitives, serial port and Timer device driver with a client-server pattern, providing user tasks with timing and I/O functionalities.'
      + ' Then, we established a train control system running on the kernel, which routed trains to specific landmarks within 0.2cm error and monitored trains` reserved track segments to automate collision detection and recovery',
  },
  {
    title: 'Joos Compiler',
    subtitle: 'A large subset of Java compiler',
    image: '/images/projects/joosc.png',
    link: 'https://git.uwaterloo.ca/z277zhu/joosc-docs',
    date: '2022-01-01',
    desc:
      'A strong-typed OO programming language Compiler written in Java, which incorporates a large subset of Java features, including inheritance, Interface, unreachable statement checking, polymorphism and etc.,'
      + ' generating intermediate representation first then converting to i386 assembly',
  },
  {
    title: 'Lacs Compiler',
    subtitle: 'A functional programming language with GC',
    image: '/images/projects/lacs.png',
    date: '2020-09-01',
    desc:
      'A functional programming language Compiler written in Scala, which incorporates a GC with Cheney`s algorithm and high-level functional features, such as closure and nested functions'
      + '. This compiler generates MIPS assembly code.',
  },
];

export default data;
