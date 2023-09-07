
# Intro

Hello! I'm Luke Zhu, currently pursuing my Master's in Computer Science at the University of Michigan with a focus on Compiler research. I earned my Bachelor's degree in Computer Science from the University of Waterloo. During my undergraduate years, I did two R&D internships at Baidu and Momenta and deeply involved in two undergraduate research projects at Waterloo, specifically in the [programming language group](https://plg.uwaterloo.ca/) supervised by Prof. Peter Buhr and Prof. Martin Karsten, where I delved into user-level threading runtime systems. My passion for the Compiler field was further ignited during my internship at d-Matrix, where I explored the intricacies of ML Compilers.

# Research Interest
My research in the Compiler's field is to use Machine Learning algorithms to solve Compiler optimization problems (**ML for Compiler**) and develop retargtable Compiler infrastructure to generate highly efficient code for Machine Learning workloads (**Compiler for ML**).

# My Story of ML for Compiler
During my ML Compiler internship at d-Matrix, I began to contemplate the **[phase-ordering problem](https://dl.acm.org/doi/10.1145/3124452)**. With hundreds of optimization passes in d-Matrix's Compiler, how can one determine the best sequence for these passes to produce the most optimal code for various programs? Moreover, if the company introduces a new optimization pass, where should it be inserted? After exhaustive reading and research, I discovered that this problem has perplexed Compiler Researchers for over 50 years. A key approach recently highlighted in literature to determine the best optimizations for a given application involves using prediction models from various machine learning classes, including deep learning and reinforcement learning. This has captured my attention profoundly, and I am actively seeking research opportunities in this field.

Inspired by [Prof. Mendis's PhD thesis](http://groups.csail.mit.edu/commit/papers/2020/mendis-thesis.pdf/), I envision a future Compiler (Compiler2.0) that employs a machine learning model. This model would take three inputs: an optimization space (specifying all optimization passes), a program feature vector (capturing representative features of the program), and a microarchitecture spec. It would then output the best sequence of optimization passes along with settings for each pass, aiming to generate the most optimal code in terms of runtime, code size, and memory usage.

# Travel / Geography

My home town is in KunShan, China, and I am also a traveling lover. 

In China, I have traveled to SuZhou, Nanjing, Anhui, Wuxi, ChangShu, HangZhou, ShaoXing, ZhouShan, Beijing, Xiamen, Hainan, Chengdu, Sichuan, Wuhan, Harbin, Shanxi, Shandong.

In Canada, I have traveled to Toronto, Calgary, Banff, Montreal, Old Quebec, Kingston.

In the U.S., I have traveled to NewYork, Boston, Ann Arbor, Detroit.

I have also traveled to Singapore, Thailand, and etc.

# Hobbies

I love board games, including Werewolf, Avalon, Ticket-to-ride and Mojang. 

I love playing guitar, but I am too shy to publish my work...

# I dream of

- Contribute myself to Compiler2.0

