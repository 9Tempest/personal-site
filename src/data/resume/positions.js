const positions = [
  {
    company: 'd-Matrix',
    position: 'ML Compiler Intern',
    link: 'https://www.d-matrix.ai/',
    daterange: 'May 2023 - Sep 2023',
    points: [
      'Integrated StableHLO Dialect in d-Matrix Compiler under MLIR, achieving end-to-end testing of Large Language Model including BERT and GPT2 through StableHLO',
      'Developed Reference Backend for high-level IR by leveraging Linalg Dialect in MLIR and Torch-MLIR, enabling testing the correctness of optimizations for high-level IR on CPU bypassing machine-level IR and hardware simulator',
      'Collaborated on the development of d-Matrix’s DNN accelerator’s memory layout in high-level IR, extending support for tiling of MatMul within Vector Dialect in MLIR',
    ],
  },
  {
    company: 'University of Waterloo',
    position: 'Undergraduate Research Assistant - Cforall',
    link: 'https://cforall.uwaterloo.ca/',
    daterange: 'May 2022 - Sep 2022',
    points: [
      'Performed deep-dive into thread-safe Linux syscall routines with GDB disassembler',
      'Implemented pthread emulation in C-for-all programming language with user-level threading primitives provided by the runtime system significantly speeding up pthread routines in C-for-all while preserving the original pthread routines for constructing runtime system through the interposing technique',
    ],
  },
  {
    company: 'University of Waterloo',
    position: 'Undergraduate Research Assistant - Libfibre',
    link: 'https://git.uwaterloo.ca/mkarsten/libfibre/-/tree/master/src',
    daterange: 'Jan 2022 - May 2022',
    points: [
      'Implemented a glue layer between std::thread and libfibre (a user-level threading library) in GCC that adds user-level threading in C++',
      'Researched the underlying mechanism of C++ thread and methods of modifying and building GCC',
    ],
  },
  {
    company: 'Baidu',
    position: 'C++ R&D Intern',
    link: 'https://cforall.uwaterloo.ca/',
    daterange: 'May 2021 - Sep 2021',
    points: [
      'Implemented blacklist filter in feed ads recommender system preventing blocked advertisements from returning to the users; enhanced overall valid view rate by 36% and revenue by 3% of feed-ads on Huawei media',
      'Programmed routine MapReduce scripts to automate the aggregation and filter of millions of customer data; Developed real-time reports with Sqlite3 and Pandas to process and visualize fluctuations of statistical data of feed ads',
    ],
  },
  {
    company: 'Momenta',
    position: 'C++ R&D Intern',
    link: 'https://git.uwaterloo.ca/mkarsten/libfibre/-/tree/master/src',
    daterange: 'Dec 2020 - May 2021',
    points: [
      'Utilized C++ ROS callback routines to record rosbags under specific scenarios for training deep-learning models',
      'Developed Python scripts to extract vehicles locations from collected rosbags, fusing and transforming vehicles positions and velocities from different cameras to one uniform world space',
      'Designed two deep-learning networks with Pytorch: one utilized Resnet to predict surrounding vehicles positions in a single frame; the other composed CNN with self-attention to predict vehicles velocity and acceleration in the long run, enhancing the accuracy of predicting surrounding vehicles velocity by 8%',
      'Designed and implemented the deep-learning inference module from scratch that fuses pedestrians velocities and positions precisely, replacing the old pedestrian penetration module which did not have inference capability',
    ],
  },
];

export default positions;
