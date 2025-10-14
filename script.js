const questions = {
    DNA: [
      {
        type: "multiple-choice",
        question: "What is the primary function of DNA?",
        options: ["Energy production", "Storing genetic information", "Protein breakdown", "Cellular respiration"],
        answer: "Storing genetic information"
      },
      {
        type: "multiple-choice",
        question: "Which nitrogenous base pairs with adenine in DNA?",
        options: ["Cytosine", "Guanine", "Thymine", "Uracil"],
        answer: "Thymine"
      },
      {
        type: "multiple-choice",
        question: "What is the sugar present in DNA called?",
        options: ["Glucose", "Ribose", "Deoxyribose", "Fructose"],
        answer: "Deoxyribose"
      },
      {
        type: "multiple-choice",
        question: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
        options: ["DNA polymerase", "Helicase", "Ligase", "RNA polymerase"],
        answer: "Helicase"
      },
      {
        type: "multiple-choice",
        question: "What is the process of synthesizing RNA from DNA called?",
        options: ["Translation", "Transcription", "Replication", "Mutation"],
        answer: "Transcription"
      },
      {
        type: "multiple-choice",
        question: "What is the role of tRNA in protein synthesis?",
        options: ["Carries amino acids", "Carries genetic information", "Breaks down proteins", "Forms ribosomes"],
        answer: "Carries amino acids"
      },
      {
        type: "multiple-choice",
        question: "Which molecule carries genetic information from the nucleus to the ribosome?",
        options: ["DNA", "mRNA", "tRNA", "rRNA"],
        answer: "mRNA"
      },
      {
        type: "multiple-choice",
        question: "What is the term for a change in the DNA sequence?",
        options: ["Replication", "Transcription", "Mutation", "Translation"],
        answer: "Mutation"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is NOT a type of RNA?",
        options: ["mRNA", "tRNA", "rRNA", "dRNA"],
        answer: "dRNA"
      },
      {
        type: "multiple-choice",
        question: "What is the shape of the DNA molecule?",
        options: ["Single helix", "Double helix", "Triple helix", "Straight chain"],
        answer: "Double helix"
      },
      {
        type: "multiple-choice",
        question: "Which enzyme adds nucleotides to the growing DNA strand during replication?",
        options: ["Helicase", "DNA polymerase", "RNA polymerase", "Ligase"],
        answer: "DNA polymerase"
      },
      {
        type: "multiple-choice",
        question: "What is the complementary DNA strand for the sequence ATCG?",
        options: ["TAGC", "ATCG", "CGAT", "GCTA"],
        answer: "TAGC"
      },
      {
        type: "multiple-choice",
        question: "What is the function of ribosomes in protein synthesis?",
        options: ["Carry amino acids", "Unwind DNA", "Synthesize proteins", "Replicate DNA"],
        answer: "Synthesize proteins"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a stop codon?",
        options: ["UAA", "AUG", "GUA", "CUG"],
        answer: "UAA"
      },
      {
        type: "multiple-choice",
        question: "What is the start codon in mRNA?",
        options: ["UAA", "AUG", "GUA", "CUG"],
        answer: "AUG"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a purine base?",
        options: ["Cytosine", "Thymine", "Adenine", "Uracil"],
        answer: "Adenine"
      },
      {
        type: "multiple-choice",
        question: "What is the function of DNA ligase?",
        options: ["Unwind DNA", "Add nucleotides", "Join DNA fragments", "Synthesize RNA"],
        answer: "Join DNA fragments"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a pyrimidine base?",
        options: ["Adenine", "Guanine", "Cytosine", "Thymine"],
        answer: "Cytosine"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of making a protein from mRNA?",
        options: ["Transcription", "Translation", "Replication", "Mutation"],
        answer: "Translation"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is NOT a step in DNA replication?",
        options: ["Unwinding", "Elongation", "Termination", "Transcription"],
        answer: "Transcription"
      },
    ],
    Meiosis: [
      {
        type: "multiple-choice",
        question: "What is the primary purpose of meiosis?",
        options: ["Growth and repair", "Production of gametes", "Energy production", "Protein synthesis"],
        answer: "Production of gametes"
      },
      {
        type: "multiple-choice",
        question: "How many daughter cells are produced at the end of meiosis?",
        options: ["2", "4", "6", "8"],
        answer: "4"
      },
      {
        type: "multiple-choice",
        question: "Which phase of meiosis involves the pairing of homologous chromosomes?",
        options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"],
        answer: "Prophase I"
      },
      {
        type: "multiple-choice",
        question: "What is the result of crossing over during meiosis?",
        options: ["Increased genetic variation", "Reduced chromosome number", "Formation of identical cells", "Production of diploid cells"],
        answer: "Increased genetic variation"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a difference between mitosis and meiosis?",
        options: ["Mitosis produces diploid cells, while meiosis produces haploid cells", "Mitosis produces haploid cells, while meiosis produces diploid cells", "Mitosis involves one division, while meiosis involves two divisions", "Both A and C"],
        answer: "Both A and C"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the exchange of genetic material between homologous chromosomes?",
        options: ["Crossing over", "Replication", "Transcription", "Mutation"],
        answer: "Crossing over"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a result of meiosis?",
        options: ["Genetically identical cells", "Genetically diverse cells", "Diploid cells", "No change in chromosome number"],
        answer: "Genetically diverse cells"
      },
      {
        type: "multiple-choice",
        question: "What is the ploidy of cells produced by meiosis?",
        options: ["Haploid", "Diploid", "Triploid", "Tetraploid"],
        answer: "Haploid"
      },
      {
        type: "multiple-choice",
        question: "Which of the following occurs during meiosis but not mitosis?",
        options: ["Crossing over", "Chromosome duplication", "Cytokinesis", "DNA replication"],
        answer: "Crossing over"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the failure of chromosomes to separate during meiosis?",
        options: ["Crossing over", "Non-disjunction", "Replication", "Mutation"],
        answer: "Non-disjunction"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a result of non-disjunction?",
        options: ["Down syndrome", "Cystic fibrosis", "Sickle cell anemia", "Hemophilia"],
        answer: "Down syndrome"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the pairing of homologous chromosomes during meiosis?",
        options: ["Synapsis", "Crossing over", "Replication", "Mutation"],
        answer: "Synapsis"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a function of meiosis?",
        options: ["Growth", "Repair", "Genetic diversity", "Energy production"],
        answer: "Genetic diversity"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the random distribution of homologous chromosomes during meiosis?",
        options: ["Independent assortment", "Crossing over", "Replication", "Mutation"],
        answer: "Independent assortment"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a result of independent assortment?",
        options: ["Increased genetic variation", "Reduced chromosome number", "Formation of identical cells", "Production of diploid cells"],
        answer: "Increased genetic variation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of cell division in meiosis?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a result of meiosis in humans?",
        options: ["Sperm cells", "Skin cells", "Liver cells", "Muscle cells"],
        answer: "Sperm cells"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming gametes?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
      {
        type: "multiple-choice",
        question: "Which of the following is a result of meiosis in plants?",
        options: ["Pollen grains", "Root cells", "Leaf cells", "Stem cells"],
        answer: "Pollen grains"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming haploid cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
    ],
    Reproduction: [
      {
        type: "multiple-choice",
        question: "Where does fertilization typically occur in humans?",
        options: ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
        answer: "Fallopian tube"
      },
      {
        type: "multiple-choice",
        question: "Which hormone maintains the uterine lining during pregnancy?",
        options: ["Oestrogen", "Progesterone", "FSH", "LH"],
        answer: "Progesterone"
      },
      {
        type: "multiple-choice",
        question: "What is the process of sperm production called?",
        options: ["Oogenesis", "Spermatogenesis", "Ovulation", "Fertilisation"],
        answer: "Spermatogenesis"
      },
      {
        type: "multiple-choice",
        question: "The release of an ovum from the ovary is called...",
        options: ["Implantation", "Ovulation", "Gestation", "Fertilisation"],
        answer: "Ovulation"
      },
      {
        type: "multiple-choice",
        question: "Which structure connects the fetus to the placenta?",
        options: ["Umbilical cord", "Chorion", "Amnion", "Cervix"],
        answer: "Umbilical cord"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the period from fertilization to birth?",
        options: ["Ovulation", "Gestation", "Implantation", "Menstruation"],
        answer: "Gestation"
      },
      {
        type: "multiple-choice",
        question: "Which hormone stimulates ovulation?",
        options: ["FSH", "LH", "Progesterone", "Oestrogen"],
        answer: "LH"
      },
      {
        type: "multiple-choice",
        question: "Where does implantation occur?",
        options: ["Ovary", "Fallopian tube", "Uterus", "Cervix"],
        answer: "Uterus"
      },
      {
        type: "multiple-choice",
        question: "Which structure produces testosterone?",
        options: ["Seminal vesicles", "Prostate gland", "Testes", "Pituitary gland"],
        answer: "Testes"
      },
      {
        type: "multiple-choice",
        question: "The fluid protecting the fetus from mechanical shock is called...",
        options: ["Amniotic fluid", "Placental fluid", "Chorionic fluid", "Cervical mucus"],
        answer: "Amniotic fluid"
      },
      {
        type: "multiple-choice",
        question: "Which phase of the menstrual cycle involves thickening of the uterine lining?",
        options: ["Follicular", "Luteal", "Proliferative", "Secretory"],
        answer: "Proliferative"
      },
      {
        type: "multiple-choice",
        question: "What triggers menstruation?",
        options: ["A rise in oestrogen", "A drop in progesterone and oestrogen", "A surge in FSH", "Implantation of the embryo"],
        answer: "A drop in progesterone and oestrogen"
      },
      {
        type: "multiple-choice",
        question: "Which contraceptive method prevents ovulation?",
        options: ["Condom", "IUD", "Oral contraceptive pill", "Vasectomy"],
        answer: "Oral contraceptive pill"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the acrosome in sperm?",
        options: ["Provide energy", "Penetrate the egg’s membrane", "Protect the sperm", "Produce testosterone"],
        answer: "Penetrate the egg’s membrane"
      },
      {
        type: "multiple-choice",
        question: "Down syndrome is caused by...",
        options: ["Non-disjunction of chromosome 21", "Excess progesterone", "A bacterial infection", "Low oestrogen"],
        answer: "Non-disjunction of chromosome 21"
      },
      {
        type: "multiple-choice",
        question: "Which hormone stimulates the development of the follicle?",
        options: ["FSH", "LH", "Progesterone", "Oestrogen"],
        answer: "FSH"
      },
      {
        type: "multiple-choice",
        question: "The structure formed after the follicle releases the ovum is the...",
        options: ["Corpus luteum", "Placenta", "Zygote", "Blastocyst"],
        answer: "Corpus luteum"
      },
      {
        type: "multiple-choice",
        question: "Which hormone is secreted by the corpus luteum?",
        options: ["FSH", "LH", "Progesterone", "Oestrogen"],
        answer: "Progesterone"
      },
      {
        type: "multiple-choice",
        question: "The process of cell division in the zygote is called...",
        options: ["Meiosis", "Mitosis", "Fertilisation", "Implantation"],
        answer: "Mitosis"
      },
      {
        type: "multiple-choice",
        question: "The hormone responsible for milk ejection is...",
        options: ["Prolactin", "Oxytocin", "Oestrogen", "Progesterone"],
        answer: "Oxytocin"
      },
      {
        type: "multiple-choice",
        question: "The hormone that stimulates the development of secondary sexual characteristics in females is...",
        options: ["Progesterone", "Oestrogen", "FSH", "LH"],
        answer: "Oestrogen"
      },
      {
        type: "multiple-choice",
        question: "The structure that produces oestrogen in females is the...",
        options: ["Ovary", "Pituitary gland", "Corpus luteum", "Placenta"],
        answer: "Ovary"
      },
      {
        type: "multiple-choice",
        question: "The hormone that stimulates the growth of the endometrium is...",
        options: ["Progesterone", "Oestrogen", "FSH", "LH"],
        answer: "Oestrogen"
      },
      {
        type: "multiple-choice",
        question: "The hormone that prepares the uterus for pregnancy is...",
        options: ["Progesterone", "Oestrogen", "FSH", "LH"],
        answer: "Progesterone"
      },
      {
        type: "multiple-choice",
        question: "The hormone that stimulates the production of sperm is...",
        options: ["FSH", "LH", "Testosterone", "Progesterone"],
        answer: "FSH"
      },
      {
        type: "multiple-choice",
        question: "The hormone that stimulates the production of testosterone is...",
        options: ["FSH", "LH", "Progesterone", "Oestrogen"],
        answer: "LH"
      },
      {
        type: "multiple-choice",
        question: "The hormone that triggers the release of an egg from the ovary is...",
        options: ["FSH", "LH", "Progesterone", "Oestrogen"],
        answer: "LH"
      },
      {
        type: "multiple-choice",
        question: "The hormone that stimulates the development of the follicle is...",
        options: ["FSH", "LH", "Progesterone", "Oestrogen"],
        answer: "FSH"
      },
      {
        type: "multiple-choice",
        question: "The hormone that maintains the corpus luteum is...",
        options: ["FSH", "LH", "Progesterone", "Oestrogen"],
        answer: "LH"
      },
      {
        type: "multiple-choice",
        question: "The hormone that stimulates milk production is...",
        options: ["Prolactin", "Oxytocin", "Oestrogen", "Progesterone"],
        answer: "Prolactin"
      },
      {
        type: "multiple-choice",
        question: "The hormone that stimulates milk ejection is...",
        options: ["Prolactin", "Oxytocin", "Oestrogen", "Progesterone"],
        answer: "Oxytocin"
      }
    ],
    Genetics: [
      {
        type: "multiple-choice",
        question: "What is the term for the study of heredity?",
        options: ["Genetics", "Evolution", "Ecology", "Physiology"],
        answer: "Genetics"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the passing of traits from parents to offspring?",
        options: ["Genetics", "Heredity", "Evolution", "Ecology"],
        answer: "Heredity"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the physical expression of a gene?",
        options: ["Genotype", "Phenotype", "Allele", "Chromosome"],
        answer: "Phenotype"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the genetic makeup of an organism?",
        options: ["Genotype", "Phenotype", "Allele", "Chromosome"],
        answer: "Genotype"
      },
      {
        type: "multiple-choice",
        question: "What is the term for a variant form of a gene?",
        options: ["Genotype", "Phenotype", "Allele", "Chromosome"],
        answer: "Allele"
      },
      {
        type: "multiple-choice",
        question: "What is the term for a segment of DNA that codes for a protein?",
        options: ["Gene", "Chromosome", "Allele", "Genotype"],
        answer: "Gene"
      },
      {
        type: "multiple-choice",
        question: "What is the term for a thread-like structure of DNA?",
        options: ["Gene", "Chromosome", "Allele", "Genotype"],
        answer: "Chromosome"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming gametes?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming haploid cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming diploid cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Mitosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming somatic cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Mitosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming gametes?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming haploid cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming diploid cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Mitosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming somatic cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Mitosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming gametes?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming haploid cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Meiosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming diploid cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Mitosis"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming somatic cells?",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Replication"],
        answer: "Mitosis"
      },
    ],
    Evolution: [
      {
        type: "multiple-choice",
        question: "What is the term for the process of change in species over time?",
        options: ["Evolution", "Natural selection", "Mutation", "Adaptation"],
        answer: "Evolution",
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process by which organisms better adapted to their environment tend to survive and reproduce?",
        options: ["Evolution", "Natural selection", "Mutation", "Adaptation"],
        answer: "Natural selection"
      },
      {
        type: "multiple-choice",
        question: "What is the term for a change in the DNA sequence?",
        options: ["Evolution", "Natural selection", "Mutation", "Adaptation"],
        answer: "Mutation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for a trait that increases an organism's chance of survival?",
        options: ["Evolution", "Natural selection", "Mutation", "Adaptation"],
        answer: "Adaptation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
      {
        type: "multiple-choice",
        question: "What is the term for the process of forming new species?",
        options: ["Speciation", "Natural selection", "Mutation", "Adaptation"],
        answer: "Speciation"
      },
    ],
    NervousSystem: [
      {
        type: "multiple-choice",
        question: "What is the basic unit of the nervous system?",
        options: ["Neuron", "Hormone", "Gland", "Muscle"],
        answer: "Neuron"
      },
      {
        type: "multiple-choice",
        question: "Which part of the neuron receives signals?",
        options: ["Dendrite", "Axon", "Cell body", "Synapse"],
        answer: "Dendrite"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the myelin sheath?",
        options: ["Speed up nerve impulses", "Produce neurotransmitters", "Receive signals", "Store energy"],
        answer: "Speed up nerve impulses"
      },
      {
        type: "multiple-choice",
        question: "Which part of the brain controls voluntary movements?",
        options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
        answer: "Cerebrum"
      },
      {
        type: "multiple-choice",
        question: "What is the role of the cerebellum?",
        options: ["Balance and coordination", "Memory and learning", "Breathing and heart rate", "Emotions and behavior"],
        answer: "Balance and coordination"
      },
      {
        type: "multiple-choice",
        question: "Which part of the nervous system controls involuntary actions?",
        options: ["Somatic nervous system", "Autonomic nervous system", "Central nervous system", "Peripheral nervous system"],
        answer: "Autonomic nervous system"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the medulla oblongata?",
        options: ["Control breathing and heart rate", "Control balance and coordination", "Control memory and learning", "Control emotions and behavior"],
        answer: "Control breathing and heart rate"
      },
      {
        type: "multiple-choice",
        question: "What is the role of the hypothalamus?",
        options: ["Regulate body temperature", "Control balance and coordination", "Control memory and learning", "Control emotions and behavior"],
        answer: "Regulate body temperature"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the synapse?",
        options: ["Transmit signals between neurons", "Produce neurotransmitters", "Receive signals", "Store energy"],
        answer: "Transmit signals between neurons"
      },
      {
        type: "multiple-choice",
        question: "What is the role of neurotransmitters?",
        options: ["Transmit signals across synapses", "Produce myelin", "Receive signals", "Store energy"],
        answer: "Transmit signals across synapses"
      },
      {
        type: "multiple-choice",
        question: "Which neurotransmitter is associated with pleasure and reward?",
        options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"],
        answer: "Dopamine"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the peripheral nervous system?",
        options: ["Connect the central nervous system to the rest of the body", "Control involuntary actions", "Control balance and coordination", "Control memory and learning"],
        answer: "Connect the central nervous system to the rest of the body"
      },
      {
        type: "multiple-choice",
        question: "What is the role of the spinal cord?",
        options: ["Transmit signals between the brain and the body", "Control balance and coordination", "Control memory and learning", "Control emotions and behavior"],
        answer: "Transmit signals between the brain and the body"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the autonomic nervous system?",
        options: ["Control involuntary actions", "Control voluntary actions", "Control balance and coordination", "Control memory and learning"],
        answer: "Control involuntary actions"
      },
      {
        type: "multiple-choice",
        question: "What is the role of the somatic nervous system?",
        options: ["Control voluntary actions", "Control involuntary actions", "Control balance and coordination", "Control memory and learning"],
        answer: "Control voluntary actions"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the central nervous system?",
        options: ["Process and transmit information", "Control balance and coordination", "Control memory and learning", "Control emotions and behavior"],
        answer: "Process and transmit information"
      },
      {
        type: "multiple-choice",
        question: "What is the role of the reflex arc?",
        options: ["Provide a rapid response to stimuli", "Control balance and coordination", "Control memory and learning", "Control emotions and behavior"],
        answer: "Provide a rapid response to stimuli"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the sensory neurons?",
        options: ["Transmit signals from sensory receptors to the central nervous system", "Transmit signals from the central nervous system to muscles", "Control balance and coordination", "Control memory and learning"],
        answer: "Transmit signals from sensory receptors to the central nervous system"
      },
      {
        type: "multiple-choice",
        question: "What is the role of motor neurons?",
        options: ["Transmit signals from the central nervous system to muscles", "Transmit signals from sensory receptors to the central nervous system", "Control balance and coordination", "Control memory and learning"],
        answer: "Transmit signals from the central nervous system to muscles"
      },
      {
        type: "multiple-choice",
        question: "What is the function of interneurons?",
        options: ["Transmit signals between neurons", "Transmit signals from sensory receptors to the central nervous system", "Transmit signals from the central nervous system to muscles", "Control balance and coordination"],
        answer: "Transmit signals between neurons"
      },
    ],
    EndocrineSystem: [
      {
        type: "multiple-choice",
        question: "What is the function of the endocrine system?",
        options: ["Regulate body functions using hormones", "Control voluntary movements", "Control balance and coordination", "Control memory and learning"],
        answer: "Regulate body functions using hormones"
      },
      {
        type: "multiple-choice",
        question: "Which gland is known as the 'master gland'?",
        options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"],
        answer: "Pituitary gland"
      },
      {
        type: "multiple-choice",
        question: "What is the role of insulin?",
        options: ["Regulate blood sugar levels", "Regulate metabolism", "Regulate calcium levels", "Regulate stress response"],
        answer: "Regulate blood sugar levels"
      },
      {
        type: "multiple-choice",
        question: "Which hormone is produced by the thyroid gland?",
        options: ["Thyroxine", "Insulin", "Adrenaline", "Estrogen"],
        answer: "Thyroxine"
      },
      {
        type: "multiple-choice",
        question: "What is the function of adrenaline?",
        options: ["Prepare the body for 'fight or flight'", "Regulate blood sugar levels", "Regulate metabolism", "Regulate calcium levels"],
        answer: "Prepare the body for 'fight or flight'"
      },
      {
        type: "multiple-choice",
        question: "Which gland produces cortisol?",
        options: ["Adrenal gland", "Thyroid gland", "Pituitary gland", "Pancreas"],
        answer: "Adrenal gland"
      },
      {
        type: "multiple-choice",
        question: "What is the role of the pancreas in the endocrine system?",
        options: ["Produce insulin and glucagon", "Produce thyroxine", "Produce adrenaline", "Produce estrogen"],
        answer: "Produce insulin and glucagon"
      },
      {
        type: "multiple-choice",
        question: "What is homeostasis?",
        options: ["Maintenance of a stable internal environment", "Control of voluntary movements", "Control of balance and coordination", "Control of memory and learning"],
        answer: "Maintenance of a stable internal environment"
      },
      {
        type: "multiple-choice",
        question: "Which hormone regulates calcium levels in the blood?",
        options: ["Parathyroid hormone", "Insulin", "Adrenaline", "Thyroxine"],
        answer: "Parathyroid hormone"
      },
      {
        type: "multiple-choice",
        question: "What is the role of the hypothalamus in the endocrine system?",
        options: ["Link between the nervous and endocrine systems", "Produce insulin", "Produce thyroxine", "Produce adrenaline"],
        answer: "Link between the nervous and endocrine systems"
      },
      {
        type: "multiple-choice",
        question: "Which hormone is responsible for regulating sleep-wake cycles?",
        options: ["Melatonin", "Insulin", "Adrenaline", "Thyroxine"],
        answer: "Melatonin"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the thyroid gland?",
        options: ["Regulate metabolism", "Regulate blood sugar levels", "Regulate calcium levels", "Regulate stress response"],
        answer: "Regulate metabolism"
      },
      {
        type: "multiple-choice",
        question: "Which hormone is produced by the ovaries?",
        options: ["Estrogen", "Testosterone", "Adrenaline", "Thyroxine"],
        answer: "Estrogen"
      },
      {
        type: "multiple-choice",
        question: "What is the role of the adrenal glands?",
        options: ["Produce adrenaline and cortisol", "Produce insulin", "Produce thyroxine", "Produce estrogen"],
        answer: "Produce adrenaline and cortisol"
      },
      {
        type: "multiple-choice",
        question: "Which hormone is responsible for regulating water balance in the body?",
        options: ["Antidiuretic hormone (ADH)", "Insulin", "Adrenaline", "Thyroxine"],
        answer: "Antidiuretic hormone (ADH)"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the parathyroid glands?",
        options: ["Regulate calcium levels", "Regulate blood sugar levels", "Regulate metabolism", "Regulate stress response"],
        answer: "Regulate calcium levels"
      },
      {
        type: "multiple-choice",
        question: "Which hormone is produced by the testes?",
        options: ["Testosterone", "Estrogen", "Adrenaline", "Thyroxine"],
        answer: "Testosterone"
      },
      {
        type: "multiple-choice",
        question: "What is the role of glucagon?",
        options: ["Increase blood sugar levels", "Decrease blood sugar levels", "Regulate metabolism", "Regulate calcium levels"],
        answer: "Increase blood sugar levels"
      },
      {
        type: "multiple-choice",
        question: "Which hormone is responsible for regulating growth?",
        options: ["Growth hormone", "Insulin", "Adrenaline", "Thyroxine"],
        answer: "Growth hormone"
      },
      {
        type: "multiple-choice",
        question: "What is the function of the pineal gland?",
        options: ["Produce melatonin", "Produce insulin", "Produce thyroxine", "Produce adrenaline"],
        answer: "Produce melatonin"
      },
    ],
    Plants: [
      {
        type: "multiple-choice",
        question: "What is the primary function of auxins in plants?",
        options: ["Promote cell elongation", "Promote fruit ripening", "Promote leaf fall", "Promote seed germination"],
        answer: "Promote cell elongation"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is responsible for fruit ripening?",
        options: ["Ethylene", "Auxin", "Gibberellin", "Cytokinin"],
        answer: "Ethylene"
      },
      {
        type: "multiple-choice",
        question: "What is the role of gibberellins in plants?",
        options: ["Promote stem elongation", "Promote fruit ripening", "Promote leaf fall", "Promote seed germination"],
        answer: "Promote stem elongation"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone promotes cell division?",
        options: ["Cytokinin", "Auxin", "Gibberellin", "Ethylene"],
        answer: "Cytokinin"
      },
      {
        type: "multiple-choice",
        question: "What is the function of abscisic acid in plants?",
        options: ["Inhibit growth and promote dormancy", "Promote fruit ripening", "Promote leaf fall", "Promote seed germination"],
        answer: "Inhibit growth and promote dormancy"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is involved in phototropism?",
        options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
        answer: "Auxin"
      },
      {
        type: "multiple-choice",
        question: "What is the role of ethylene in plants?",
        options: ["Promote fruit ripening and leaf fall", "Promote cell elongation", "Promote stem elongation", "Promote seed germination"],
        answer: "Promote fruit ripening and leaf fall"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is responsible for seed dormancy?",
        options: ["Abscisic acid", "Auxin", "Gibberellin", "Cytokinin"],
        answer: "Abscisic acid"
      },
      {
        type: "multiple-choice",
        question: "What is the function of cytokinins in plants?",
        options: ["Promote cell division and delay aging", "Promote fruit ripening", "Promote leaf fall", "Promote seed germination"],
        answer: "Promote cell division and delay aging"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is involved in gravitropism?",
        options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
        answer: "Auxin"
      },
      {
        type: "multiple-choice",
        question: "What is the role of gibberellins in seed germination?",
        options: ["Break seed dormancy", "Promote fruit ripening", "Promote leaf fall", "Promote cell elongation"],
        answer: "Break seed dormancy"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is responsible for leaf abscission?",
        options: ["Ethylene", "Auxin", "Gibberellin", "Cytokinin"],
        answer: "Ethylene"
      },
      {
        type: "multiple-choice",
        question: "What is the function of auxins in root development?",
        options: ["Promote root initiation", "Promote fruit ripening", "Promote leaf fall", "Promote seed germination"],
        answer: "Promote root initiation"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is involved in apical dominance?",
        options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
        answer: "Auxin"
      },
      {
        type: "multiple-choice",
        question: "What is the role of cytokinins in plant growth?",
        options: ["Promote cell division and shoot formation", "Promote fruit ripening", "Promote leaf fall", "Promote seed germination"],
        answer: "Promote cell division and shoot formation"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is responsible for stress responses?",
        options: ["Abscisic acid", "Auxin", "Gibberellin", "Cytokinin"],
        answer: "Abscisic acid"
      },
      {
        type: "multiple-choice",
        question: "What is the function of ethylene in flower senescence?",
        options: ["Promote flower wilting", "Promote fruit ripening", "Promote leaf fall", "Promote seed germination"],
        answer: "Promote flower wilting"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is involved in thigmotropism?",
        options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
        answer: "Auxin"
      },
      {
        type: "multiple-choice",
        question: "What is the role of gibberellins in flowering?",
        options: ["Promote flowering in long-day plants", "Promote fruit ripening", "Promote leaf fall", "Promote seed germination"],
        answer: "Promote flowering in long-day plants"
      },
      {
        type: "multiple-choice",
        question: "Which plant hormone is responsible for root gravitropism?",
        options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
        answer: "Auxin"
      },
    ],
  };


// Sample Questions (Fill in the Blank)
const fillInBlankQuestions = {
  Genetics: [
    {
      type: "fill-in-blank",
      question: "The genetic makeup of an organism is called its ____.",
      answer: "genotype"
    },
    {
      type: "flll-in-blank",
      question: "The physical expression of a gene is called its ____.",
      answer: "phenotype"
    },
    {
      type: "fill-in-blank",
      question: "A variant form of a gene is called an ____.",
      answer: "allele"
    },
    {
      type: "fill-in-blank",
      question: "The process of forming gametes is called ____.",
      answer: "meiosis"
    },
    {
      type: "fill-in-blank",
      question: "The principle of independent assortment was proposed by ____.",
      answer: "Mendel"
    }
  ],

  Evolution: [
    {
      type: "fill-in-blank",
      question: "The process of change in species over time is called ____.",
      answer: "evolution"
    },
    {
      type: "fill-in-blank",
      question: "The theory of natural selection was proposed by ____.",
      answer: "Darwin"
    },
    {
      type: "fill-in-blank",
      question: "Structures that have a similar origin but different functions are called ____.",
      answer: "homologous structures"
    },
    {
      type: "fill-in-blank",
      question: "The process by which new species are formed is called ____.",
      answer: "speciation"
    },
    {
      type: "fill-in-blank",
      question: "The study of fossils to understand evolution is called ____.",
      answer: "paleontology"
    }
  ],

  Meiosis: [
    {
      type: "fill-in-blank",
      question: "The phase of meiosis where homologous chromosomes pair up is ",
      answer: "prophase I"
    },
    {
      type: "fill-in-blank",
      question: "The result of meiosis is ____ daughter cells.",
      answer: "four"
    },
    {
      type: "fill-in-blank",
      question: "The exchange of genetic material between homologous chromosomes is called ____.",
      answer: "crossing over"
    },
    {
      type: "fill-in-blank",
      question: "Cells produced by meiosis are ____ (haploid/diploid).",
      answer: "haploid"
    },
    {
      type: "fill-in-blank",
      question: "The process of meiosis ensures ____ variation in offspring.",
      answer: "genetic"
    }
  ],
  DNA: [
    {
      type: "fill-in-blank",
      question: "The structure of DNA is called a ",
      answer: "double helix"
    },
    {type: "fill-in-blank",
      question: "The sugar present in DNA is called",
      answer: "deoxyribose"
    },
    {type: "fill-in-blank",
      question: "The enzyme that unwinds the DNA helix during replication is ",
      answer: "helicase"
    },
    {
      type: "fill-in-blank",
      question: "The process of synthesizing RNA from DNA is called",
      answer: "transcription"
    },
    {
      type: "fill-in-blank",
      question: "The nitrogenous base that pairs with adenine in DNA is ",
      answer: "thymine"
    }
  ],

  plantHormones: [
    {
      type: "fill-in-blank",
      question: "The plant hormone that promotes cell elongation is",
      answer: "auxin"
    },
    {
      type: "fill-in-blank",
      question: "The plant hormone responsible for fruit ripening is ",
      answer: "ethylene"
    },
    {
      type: "fill-in-blank",
      question: "The plant hormone that promotes seed germination is",
      answer: "gibberellin"
    },
    {
      type: "fill-in-blank",
      question: "The plant hormone that inhibits growth and promotes dormancy is",
      answer: "abscisic acid"
    },
    {
      type: "fill-in-blank",
      question: "The plant hormone that promotes cell division is",
      answer: "cytokinin"
    }
  ],
    Reproduction: [
      {
        type: "fill-in-blank",
        question: "The structure that connects the foetus to the placenta",
        answer: "Umbilical cord"
      },
      {
        type: "fill-in-blank",
        question: "The part of the nervous system that consists of sympathetic and parasympathetic sections",
        answer: "Autonomic nervous system"
      },
      {
        type: "fill-in-blank",
        question: "Receptors in the ear that detect changes in speed and direction of movement of the head",
        answer: "Semicircular canals"
      },
      {
        type: "fill-in-blank",
        question: "The ossicle that transfers vibrations to the oval window",
        answer: "Stapes"
      },
      {
        type: "fill-in-blank",
        question: "The growth reaction of a plant in response to gravity",
        answer: "Gravitropism"
      },
      {
        type: "fill-in-blank",
        question: "The part in the inner ear where the organ of Corti is located",
        answer: "Cochlea"
      },
      {
        type: "fill-in-blank",
        question: "A plant hormone that stimulates the germination of seeds",
        answer: "Gibberellin"
      },
      {
        type: "fill-in-blank",
        question: "A structure in the head of a sperm cell that contains enzymes",
        answer: "Acrosome"
      },
    ],
  };
  
    // DOM Elements
    const termsContainer = document.getElementById("terms-container");
    const quizTypeModal = document.getElementById("quiz-type-modal");
    const quizPage = document.getElementById("quiz-page");
    const resultsPage = document.getElementById("results-page");
    const quizTitle = document.getElementById("quiz-title");
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const progressFill = document.getElementById("progress-fill");
    const timeElement = document.getElementById("time");
    const scoreElement = document.getElementById("score");
    const retryBtn = document.getElementById("retry-btn");
    const homeBtn = document.getElementById("home-btn");
    const reviewBtn = document.getElementById("review-btn");
    const reviewContainer = document.getElementById("review-container");
    const glossarySearch = document.getElementById("glossary-search");
    const glossaryItems = document.getElementById("glossary-items");

    let quiz;
    let currentTopic = "";
    let userAnswers = [];

    // Modal Functions
    function openModal(id) {
      document.getElementById(id).classList.remove("hidden");
      document.getElementById(id).classList.add("flex");
    }

    function closeModal(id) {
      document.getElementById(id).classList.add("hidden");
      document.getElementById(id).classList.remove("flex");
    }

    // Event Listeners
    termsContainer.addEventListener("click", (e) => {
      const topic = e.target.closest(".topic-item");
      if (topic && topic.dataset.topic) {
        currentTopic = topic.getAttribute("data-topic");
        quizTypeModal.classList.remove("hidden");
        quizTypeModal.classList.add("flex");
      }
    });



    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.classList.add("hidden");
        e.target.classList.remove("flex");
      }
    });

    // Start Multiple Choice Quiz
    document.getElementById("multiple-choice-btn").addEventListener("click", () => {
      if (!questions[currentTopic]) {
        Swal.fire({
          icon: 'error',
          title: 'No Questions',
          text: 'No Multiple Choice questions available for this topic.',
        });
        return;
      }
      const shuffled = shuffleArray(questions[currentTopic]);
      quiz = new Quiz(shuffled, 120);
      quiz.startQuiz();
      closeModal("quiz-type-modal");
      termsContainer.classList.add("hidden");
      quizPage.classList.remove("hidden");
      quizTitle.textContent = currentTopic;
    });

    // Start Fill-in-the-Blank Quiz
    document.getElementById("fill-blank-btn").addEventListener("click", () => {
      if (!fillInBlankQuestions[currentTopic] || fillInBlankQuestions[currentTopic].length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'No Questions',
          text: 'No Fill-in-the-Blank questions for this topic.',
        });
        return;
      }
      const shuffled = shuffleArray(fillInBlankQuestions[currentTopic]);
      quiz = new Quiz(shuffled, 120);
      quiz.startQuiz();
      closeModal("quiz-type-modal");
      termsContainer.classList.add("hidden");
      quizPage.classList.remove("hidden");
      quizTitle.textContent = currentTopic;
    });

    // Glossary Search
    glossarySearch.addEventListener("input", () => {
      const searchTerm = glossarySearch.value.toLowerCase();
      const items = glossaryItems.getElementsByClassName("glossary-item");

      Array.from(items).forEach(item => {
        const term = item.querySelector(".glossary-term").textContent.toLowerCase();
        if (term.includes(searchTerm)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });

    // Shuffle Utility
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    class Quiz {
      constructor(questions, timeLimit) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.currentIndex = 0;
        this.score = 0;
        this.timeLeft = timeLimit;
        this.timerInterval = null;
        this.userAnswers = [];
      }

      startQuiz() {
        this.showQuestion();
        this.startTimer();
      }

      showQuestion() {
        const q = this.questions[this.currentIndex];
        questionElement.textContent = q.question;
        optionsContainer.innerHTML = "";

        if (q.type === "multiple-choice") {
          shuffleArray(q.options).forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt;
            btn.addEventListener("click", () => this.selectAnswer(opt, q.answer));
            optionsContainer.appendChild(btn);
          });
        } else {
          const input = document.createElement("input");
          input.type = "text";
          input.placeholder = "Type answer here";
          optionsContainer.appendChild(input);
          const submitBtn = document.createElement("button");
          submitBtn.textContent = "Submit";
          submitBtn.addEventListener("click", () => this.selectAnswer(input.value.trim(), q.answer));
          optionsContainer.appendChild(submitBtn);
        }

        this.updateProgress();
      }

      selectAnswer(selected, correct) {
        const isCorrect = selected.toLowerCase() === correct.toLowerCase();

        this.userAnswers.push({
          question: this.questions[this.currentIndex].question,
          userAnswer: selected,
          correctAnswer: correct,
          isCorrect: isCorrect
        });

        if (isCorrect) {
          this.score++;
          Swal.fire({
            icon: 'success',
            title: 'Correct!',
            text: 'Well done!',
            timer: 1000,
            showConfirmButton: false
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Incorrect',
            html: `The correct answer is: <strong>${correct}</strong>`,
            timer: 1500,
            showConfirmButton: false
          });
        }

        setTimeout(() => {
          this.currentIndex++;
          if (this.currentIndex < this.questions.length) {
            this.showQuestion();
          } else {
            this.endQuiz();
          }
        }, 1500);
      }

      startTimer() {
        this.timerInterval = setInterval(() => {
          this.timeLeft--;
          const minutes = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
          const seconds = (this.timeLeft % 60).toString().padStart(2, '0');
          timeElement.textContent = `${minutes}:${seconds}`;

          if (this.timeLeft <= 0) {
            clearInterval(this.timerInterval);
            this.endQuiz();
          }
        }, 1000);
      }

      updateProgress() {
        const progress = ((this.currentIndex / this.questions.length) * 100).toFixed(0);
        progressFill.style.width = `${progress}%`;
      }

      endQuiz() {
        clearInterval(this.timerInterval);
        quizPage.classList.add("hidden");
        resultsPage.classList.remove("hidden");
        scoreElement.textContent = `${this.score}/${this.questions.length}`;

        userAnswers = this.userAnswers;

        // ✅ Save quiz results to localStorage
        const result = {
          topic: currentTopic,
          score: Math.round((this.score / this.questions.length) * 100),
          timeSpent: this.timeLimit - this.timeLeft,
          date: new Date().toISOString().split("T")[0]
        };

        let results = JSON.parse(localStorage.getItem("quizResults")) || [];
        results.push(result);
        localStorage.setItem("quizResults", JSON.stringify(results));

        // ✅ Update dashboard
        updateDashboard();
      }
    }

    // ✅ Calculate Stats
    function calculateStats() {
      let results = JSON.parse(localStorage.getItem("quizResults")) || [];
      if (results.length === 0) return {
        avgScore: 0,
        quizzesCompleted: 0,
        topicsMastered: 0,
        hoursStudied: 0,
        streak: 0
      };

      let totalScore = 0;
      let totalMinutes = 0;
      let masteredTopics = new Set();

      results.forEach(r => {
        totalScore += r.score;
        totalMinutes += r.timeSpent / 60;
        if (r.score >= 80) masteredTopics.add(r.topic);
      });

      return {
        avgScore: Math.round(totalScore / results.length),
        quizzesCompleted: results.length,
        topicsMastered: masteredTopics.size,
        hoursStudied: totalMinutes.toFixed(1),
        streak: calcStreak(results)
      };
    }

    function calcStreak(results) {
      let dates = [...new Set(results.map(r => r.date))].sort((a, b) => new Date(b) - new Date(a));
      let streak = 0;
      let today = new Date();

      for (let i = 0; i < dates.length; i++) {
        let expected = new Date();
        expected.setDate(today.getDate() - i);
        let expectedStr = expected.toISOString().split("T")[0];
        if (dates.includes(expectedStr)) {
          streak++;
        } else break;
      }
      return streak;
    }

    // ✅ Update Dashboard UI
    function updateDashboard() {
      const stats = calculateStats();

      document.querySelector(".stat-card:nth-child(1) h3").textContent = stats.avgScore + "%";
      document.querySelector(".stat-card:nth-child(2) h3").textContent = stats.quizzesCompleted;
      document.querySelector(".stat-card:nth-child(3) h3").textContent = stats.topicsMastered;
      document.querySelector(".stat-card:nth-child(4) h3").textContent = stats.hoursStudied;
      document.querySelector(".streak span").textContent = stats.streak + "-day streak";
    }

    // Retry/Reset/Review
    retryBtn.addEventListener("click", () => {
      resultsPage.classList.add("hidden");
      quizPage.classList.remove("hidden");
      const shuffled = shuffleArray(questions[currentTopic] || fillInBlankQuestions[currentTopic]);
      quiz = new Quiz(shuffled, 120);
      quiz.startQuiz();
      quizTitle.textContent = currentTopic;
    });

    homeBtn.addEventListener("click", () => {
      resultsPage.classList.add("hidden");
      reviewContainer.classList.add("hidden");
      termsContainer.classList.remove("hidden");
    });

    reviewBtn.addEventListener("click", () => {
      reviewContainer.classList.toggle("hidden");
      if (!reviewContainer.classList.contains("hidden")) {
        reviewContainer.innerHTML = "<h3>Review Your Answers</h3>";

        userAnswers.forEach((answer, index) => {
          const item = document.createElement("div");
          item.classList.add("review-item");
          item.classList.add(answer.isCorrect ? "correct" : "incorrect");

          item.innerHTML = `
            <div class="review-question">${index + 1}. ${answer.question}</div>
            <div class="review-answer">Your answer: ${answer.userAnswer}</div>
            <div class="review-correct">Correct answer: ${answer.correctAnswer}</div>
          `;

          reviewContainer.appendChild(item);
        });
      }
    });
    updateDashboard();

    // Register Service Worker for PWA
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("✅ Service Worker Registered"))
        .catch(err => console.log("SW registration failed:", err));
    }
document.querySelectorAll(".qa-card").forEach(card => {
  card.addEventListener("click", () => {
    const action = card.querySelector("h3").textContent;
    switch (action) {
      case "Start Study Mode":
        alert("Study Mode coming soon 🔥");
        break;
      case "Ask CzzleBot":
        document.getElementById("chat-toggle").click(); // opens chatbot
        break;
      case "Quick Quiz":
        alert("Quick Quiz feature loading ⚡");
        break;
    }
  });
});
