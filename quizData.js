const questions = {
  DNA: [
    {
      type: "multiple-choice",
      question:
        "A tangled mass of threads found in a nucleus of cells that give rise to chromosomes is the...",
      options: [
        "Chromatin network",
        "Nuclear envelope",
        "Chromatid",
        "Centromere",
      ],
      answer: "Chromatin network",
    },
    {
      type: "multiple-choice",
      question:
        "A string-like structure found in a nucleus of a dividing cell is a...",
      options: ["Chromatin", "Chromosome", "Gene", "Spindle fibre"],
      answer: "Chromosome",
    },
    {
      type: "multiple-choice",
      question: "What is the natural shape of DNA?",
      options: [
        "Single strand",
        "Double helix",
        "Triple bond",
        "Branched chain",
      ],
      answer: "Double helix",
    },
    {
      type: "multiple-choice",
      question:
        "What are the structural components/building blocks/monomers of nucleic acids?",
      options: ["Amino acids", "Fatty acids", "Nucleotides", "Monosaccharides"],
      answer: "Nucleotides",
    },
    {
      type: "multiple-choice",
      question:
        "What is the weak bond between nitrogenous bases in a DNA molecule?",
      options: ["Ionic bond", "Covalent bond", "Peptide bond", "Hydrogen bond"],
      answer: "Hydrogen bond",
    },
    {
      type: "multiple-choice",
      question:
        "The process by which a DNA molecule makes identical copies of itself is called...",
      options: [
        "Transcription",
        "Translation",
        "DNA replication",
        "Protein synthesis",
      ],
      answer: "DNA replication",
    },
    {
      type: "multiple-choice",
      question:
        "A segment of DNA/a chromosome that codes for a particular characteristic is a...",
      options: ["Codon", "Gene", "Nucleotide", "Allele"],
      answer: "Gene",
    },
    {
      type: "multiple-choice",
      question:
        "A sudden change in the sequence/order of nitrogenous bases of a nucleic acid is a...",
      options: ["Transcription", "Replication", "Mutation", "Translation"],
      answer: "Mutation",
    },
    {
      type: "multiple-choice",
      question:
        "Two chromosomes that carry the same set of genes are called...",
      options: [
        "Homologous chromosomes",
        "Heterozygous chromosomes",
        "Sister chromatids",
        "Diploid chromosomes",
      ],
      answer: "Homologous chromosomes",
    },
    {
      type: "multiple-choice",
      question:
        "The complete set of chromosomes in the cell of an organism is its...",
      options: ["Genotype", "Phenotype", "Genome", "Karyotype"],
      answer: "Genome",
    },
    {
      type: "multiple-choice",
      question: "What is the type of sugar found in a DNA molecule?",
      options: ["Ribose", "Glucose", "Deoxyribose", "Fructose"],
      answer: "Deoxyribose",
    },
    {
      type: "multiple-choice",
      question: "What is the type of sugar found in an RNA molecule?",
      options: ["Ribose", "Glucose", "Deoxyribose", "Fructose"],
      answer: "Ribose",
    },
    {
      type: "multiple-choice",
      question: "Which nitrogenous base is found only in RNA molecules?",
      options: ["Thymine", "Cytosine", "Adenine", "Uracil"],
      answer: "Uracil",
    },
    {
      type: "multiple-choice",
      question:
        "The stage of protein synthesis during which mRNA forms from DNA is called...",
      options: ["Translation", "Replication", "Transcription", "Elongation"],
      answer: "Transcription",
    },
    {
      type: "multiple-choice",
      question: "Where in the cell does transcription occur?",
      options: ["Cytoplasm", "Ribosome", "Nucleus", "Mitochondria"],
      answer: "Nucleus",
    },
    {
      type: "multiple-choice",
      question:
        "Which molecule carries the coded message from the nucleus to the cytoplasm about the protein to be made?",
      options: ["tRNA", "DNA", "rRNA", "mRNA"],
      answer: "mRNA",
    },
    {
      type: "multiple-choice",
      question:
        "What is the organelle in the cytoplasm to which mRNA attaches?",
      options: ["Nucleus", "Golgi Apparatus", "Ribosome", "Mitochondria"],
      answer: "Ribosome",
    },
    {
      type: "multiple-choice",
      question:
        "The organelle in the cytoplasm which is the site of protein synthesis is the...",
      options: ["Nucleus", "Golgi Apparatus", "Ribosome", "Mitochondria"],
      answer: "Ribosome",
    },
    {
      type: "multiple-choice",
      question:
        "The stage of protein synthesis that takes place in the cytoplasm is called...",
      options: ["Transcription", "Replication", "Translation", "Mutation"],
      answer: "Translation",
    },
    {
      type: "multiple-choice",
      question: "A sequence of three consecutive bases in mRNA is called a...",
      options: ["Anticodon", "Gene", "Triplet", "Codon"],
      answer: "Codon",
    },
    {
      type: "multiple-choice",
      question:
        "A sequence of three consecutive bases on tRNA which complement the bases on the mRNA codon is called a(n)...",
      options: ["Codon", "Anticodon", "Gene", "Triplet"],
      answer: "Anticodon",
    },
    {
      type: "multiple-choice",
      question:
        "The type of nucleic acid that carries a specific amino acid is...",
      options: ["mRNA", "DNA", "tRNA", "rRNA"],
      answer: "tRNA",
    },
    {
      type: "multiple-choice",
      question:
        "The monomers which serve as building blocks for the synthesis of proteins are...",
      options: ["Nucleotides", "Fatty acids", "Amino acids", "Monosaccharides"],
      answer: "Amino acids",
    },
    {
      type: "multiple-choice",
      question: "The bond between amino acids of a protein is a...",
      options: [
        "Hydrogen bond",
        "Glycosidic bond",
        "Peptide bond",
        "Ionic bond",
      ],
      answer: "Peptide bond",
    },
  ],
  Meiosis: [
    {
      type: "multiple-choice",
      question:
        "Organelle found only in animal cells that forms the spindle during cell division.",
      options: ["Centrosome", "Centriole", "Centromere", "Chiasma"],
      answer: "Centriole",
    },
    {
      type: "multiple-choice",
      question:
        "Structures formed when the centrosome divides into two which moves to opposite poles of the cell during cell division.",
      options: ["Spindle fibres", "Centrioles", "Chromatids", "Centromeres"],
      answer: "Centrioles",
    },
    {
      type: "multiple-choice",
      question: "The point where two chromatids overlap during crossing over.",
      options: ["Centromere", "Centrosome", "Chiasma", "Spindle pole"],
      answer: "Chiasma",
    },
    {
      type: "multiple-choice",
      question:
        "The division of the cytoplasm through the constriction of the cell membrane at the end of cell division.",
      options: ["Karyokinesis", "Cytokinesis", "Mitosis", "Synapsis"],
      answer: "Cytokinesis",
    },
    {
      type: "multiple-choice",
      question: "The failure of chromosome pairs to separate during meiosis.",
      options: ["Crossing over", "Non-disjunction", "Replication", "Synapsis"],
      answer: "Non-disjunction",
    },
    {
      type: "multiple-choice",
      question:
        "A representation of the number, shape and arrangement of all the chromosomes in the nucleus of a somatic cell.",
      options: ["Genotype", "Phenotype", "Karyotype", "Genome"],
      answer: "Karyotype",
    },
    {
      type: "multiple-choice",
      question: "Two arms of a chromosomes.",
      options: ["Centromeres", "Chromatids", "Genes", "Alleles"],
      answer: "Chromatids",
    },
    {
      type: "multiple-choice",
      question: "Two set of chromosomes.",
      options: ["Haploid", "Diploid", "Polyploid", "Homologous"],
      answer: "Diploid",
    },
    {
      type: "multiple-choice",
      question: "Pair of chromosomes that have same structural features.",
      options: [
        "Sister chromatids",
        "Homologous chromosomes",
        "Sex chromosomes",
        "Autosomes",
      ],
      answer: "Homologous chromosomes",
    },
    {
      type: "multiple-choice",
      question: "Phase of cell division where DNA replication occurs.",
      options: ["Prophase", "Metaphase", "Anaphase", "Interphase"],
      answer: "Interphase",
    },
    {
      type: "multiple-choice",
      question: "None sex chromosomes in humans.",
      options: [
        "Homologous chromosomes",
        "Autosomes",
        "Sex chromosomes",
        "Gametes",
      ],
      answer: "Autosomes",
    },
    {
      type: "multiple-choice",
      question: "The part of the plant where the male gametes are produced.",
      options: ["Ovary", "Stigma", "Anther", "Pollen tube"],
      answer: "Anther",
    },
    {
      type: "multiple-choice",
      question:
        "The structure that holds the two chromatids of a chromosome together.",
      options: ["Centrosome", "Centriole", "Centromere", "Chiasma"],
      answer: "Centromere",
    },
    {
      type: "multiple-choice",
      question:
        "The chromosome condition of a cell that has a single set of chromosomes.",
      options: ["Diploid", "Haploid", "Triploid", "Polyploid"],
      answer: "Haploid",
    },
    {
      type: "multiple-choice",
      question:
        "The phase of meiosis where paired chromosomes are arranged at the equator.",
      options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"],
      answer: "Metaphase I",
    },
    {
      type: "multiple-choice",
      question:
        "The division of the cytoplasm of a cell during a cell division.",
      options: ["Karyokinesis", "Cytokinesis", "Mitosis", "Synapsis"],
      answer: "Cytokinesis",
    },
    {
      type: "multiple-choice",
      question: "The structure formed by the centrioles during cell division.",
      options: ["Spindle fibres", "Centromeres", "Centrioles", "Chromatids"],
      answer: "Spindle fibres",
    },
    {
      type: "multiple-choice",
      question:
        "A genetic disorder caused by having an extra copy of chromosome number 21.",
      options: [
        "Turner syndrome",
        "Klinefelter syndrome",
        "Down syndrome",
        "Hemophilia",
      ],
      answer: "Down syndrome",
    },
    {
      type: "multiple-choice",
      question: "The failure of chromosome pairs to separate during meiosis.",
      options: ["Crossing over", "Non-disjunction", "Replication", "Synapsis"],
      answer: "Non-disjunction",
    },
    {
      type: "multiple-choice",
      question:
        "The phase in the cell cycle during which the cell growth occurs to doubles the genetic material.",
      options: ["Prophase", "Metaphase", "Anaphase", "Interphase"],
      answer: "Interphase",
    },
    {
      type: "multiple-choice",
      question:
        "A threadlike structure made up of DNA and protein found in the nucleus of most living cells, carrying genetic information in the form of genes.",
      options: ["Chromatid", "Chromosome", "Gene", "Centromere"],
      answer: "Chromosome",
    },
    {
      type: "multiple-choice",
      question: "One of the two identical strands of a replicated chromosome.",
      options: ["Chromatin", "Chromatid", "Centromere", "Gene"],
      answer: "Chromatid",
    },
    {
      type: "multiple-choice",
      question:
        "Region where the two chromatids of a chromosome are held together.",
      options: ["Centrosome", "Centriole", "Centromere", "Chiasma"],
      answer: "Centromere",
    },
    {
      type: "multiple-choice",
      question:
        "A pair of chromosomes of the same shape, size and having similar genes for each characteristic occupying the same position.",
      options: [
        "Sister chromatids",
        "Homologous chromosomes",
        "Sex chromosomes",
        "Autosomes",
      ],
      answer: "Homologous chromosomes",
    },
    {
      type: "multiple-choice",
      question:
        "A pair of homologous chromosomes which lie next to each other and are physically in contact with each other at a point where crossing over will occur.",
      options: ["Bivalent", "Tetrad", "Synapsis", "Chiasma"],
      answer: "Bivalent",
    },
    {
      type: "multiple-choice",
      question:
        "An unreplicated 'chromosome' has a single double-stranded DNA molecule.",
      options: ["Chromatid", "Chromosome", "Gene", "Chromatin"],
      answer: "Chromosome",
    },
    {
      type: "multiple-choice",
      question:
        "A replicated 'chromosome' has two identical double-stranded DNA molecules.",
      options: ["Chromatids", "Chromosome", "Gene", "Chromatin"],
      answer: "Chromatids",
    },
    {
      type: "multiple-choice",
      question: "The phase in the cell cycle when DNA replication occurs.",
      options: ["Prophase", "Metaphase", "Anaphase", "Interphase"],
      answer: "Interphase",
    },
    {
      type: "multiple-choice",
      question: "Two complete set of chromosomes in a cell.",
      options: ["Haploid", "Diploid", "Triploid", "Polyploid"],
      answer: "Diploid",
    },
    {
      type: "multiple-choice",
      question: "One complete sets of chromosomes in a cell.",
      options: ["Haploid", "Diploid", "Triploid", "Polyploid"],
      answer: "Haploid",
    },
    {
      type: "multiple-choice",
      question:
        "A segment of DNA in a chromosome that contains the code for a particular characteristic.",
      options: ["Chromatid", "Chromosome", "Gene", "Centromere"],
      answer: "Gene",
    },
    {
      type: "multiple-choice",
      question:
        "Organelle (containing two centrioles) found only in animal cells.",
      options: ["Centrosome", "Centriole", "Centromere", "Chiasma"],
      answer: "Centrosome",
    },
    {
      type: "multiple-choice",
      question:
        "Structures formed when the centrosome divides into two; they move to opposite ends of the cell during cell division.",
      options: ["Spindle fibres", "Centrioles", "Chromatids", "Centromeres"],
      answer: "Centrioles",
    },
    {
      type: "multiple-choice",
      question:
        "Overlapping of homologous chromosomes resulting in the exchange of genetic material during Prophase I.",
      options: ["Non-disjunction", "Crossing over", "Cytokinesis", "Synapsis"],
      answer: "Crossing over",
    },
    {
      type: "multiple-choice",
      question: "Point where two chromatids overlap during crossing over.",
      options: ["Centromere", "Centrosome", "Chiasma", "Spindle pole"],
      answer: "Chiasma",
    },
    {
      type: "multiple-choice",
      question:
        "A representation of the number, shape and arrangement of a full set of chromosomes in the nucleus of a somatic cell.",
      options: ["Genotype", "Phenotype", "Karyotype", "Genome"],
      answer: "Karyotype",
    },
    {
      type: "multiple-choice",
      question:
        "The first 22 pairs of chromosomes which control the appearance, structure and functioning of the body.",
      options: [
        "Homologous chromosomes",
        "Autosomes",
        "Sex chromosomes",
        "Gametes",
      ],
      answer: "Autosomes",
    },
    {
      type: "multiple-choice",
      question:
        "The pair of chromosomes (XX or XY) responsible for sex determination.",
      options: [
        "Homologous chromosomes",
        "Autosomes",
        "Sex chromosomes",
        "Gametes",
      ],
      answer: "Sex chromosomes",
    },
    {
      type: "multiple-choice",
      question:
        "Any cells in an organism excluding male and female gametes – they are diploid (have 2 sets of chromosomes) and are produced through mitosis.",
      options: ["Gametes", "Somatic cells", "Zygotes", "Haploid cells"],
      answer: "Somatic cells",
    },
    {
      type: "multiple-choice",
      question:
        "Specialized cells called gametes (sperm cell and egg cell). They have a haploid number of chromosomes and are produced through meiosis.",
      options: ["Somatic cells", "Gametes", "Zygotes", "Diploid cells"],
      answer: "Gametes",
    },
    {
      type: "multiple-choice",
      question: "The process of division of the nucleus of a cell.",
      options: ["Cytokinesis", "Karyokinesis", "Mitosis", "Meiosis"],
      answer: "Karyokinesis",
    },
    {
      type: "multiple-choice",
      question:
        "Is the process of division during which the cytoplasm of a single cell divides into two daughter cells.",
      options: ["Cytokinesis", "Karyokinesis", "Mitosis", "Meiosis"],
      answer: "Cytokinesis",
    },
  ],
  Reproduction: [
    {
      type: "multiple-choice",
      question:
        "A reproductive strategy where the young receives nutrients through the placenta is called...",
      options: ["Oviparous", "Viviparous", "Ovoviviparous", "Asexual"],
      answer: "Viviparous",
    },
    {
      type: "multiple-choice",
      question:
        "The duct that transports semen and urine to the outside of the body is the...",
      options: ["Vas deferens", "Urethra", "Ejaculatory duct", "Epididymis"],
      answer: "Urethra",
    },
    {
      type: "multiple-choice",
      question:
        "The structure that serves as a micro-filter during pregnancy is the...",
      options: ["Amnion", "Placenta", "Chorion", "Umbilical cord"],
      answer: "Placenta",
    },
    {
      type: "multiple-choice",
      question:
        "The part of the male reproductive system which temporarily stores sperm until they mature is the...",
      options: ["Testis", "Prostate", "Epididymis", "Seminal vesicle"],
      answer: "Epididymis",
    },
    {
      type: "multiple-choice",
      question: "The fusion of the sperm and egg outside the body is called...",
      options: [
        "External fertilisation",
        "Internal fertilisation",
        "Ovulation",
        "Implantation",
      ],
      answer: "External fertilisation",
    },
    {
      type: "multiple-choice",
      question:
        "The development of the embryo inside an incubated egg that is laid is called...",
      options: [
        "Viviparous development",
        "Oviparous development",
        "Ovoviviparous development",
        "Metamorphosis",
      ],
      answer: "Oviparous development",
    },
    {
      type: "multiple-choice",
      question:
        "The development of the embryo in the uterus and the young are born alive is known as...",
      options: ["Oviparous", "Viviparous", "Ovoviviparous", "Parthenogenesis"],
      answer: "Viviparous",
    },
    {
      type: "multiple-choice",
      question:
        "The structure in the sperm cell that contains enzymes used to penetrate the ovum is the...",
      options: ["Acrosome", "Mitochondrion", "Nucleus", "Flagellum"],
      answer: "Acrosome",
    },
    {
      type: "multiple-choice",
      question:
        "The hollow ball of cells formed in early development is called a...",
      options: ["Morula", "Blastocyst", "Gastrula", "Zygote"],
      answer: "Blastocyst",
    },
    {
      type: "multiple-choice",
      question:
        "The lining of the uterus which is richly supplied with blood vessels is the...",
      options: ["Perimetrium", "Myometrium", "Endometrium", "Serosa"],
      answer: "Endometrium",
    },
    {
      type: "multiple-choice",
      question:
        "The part of the female reproductive system in which fertilisation normally takes place is the...",
      options: ["Vagina", "Uterus", "Cervix", "Fallopian tube"],
      answer: "Fallopian tube",
    },
    {
      type: "multiple-choice",
      question:
        "The hormone produced by the pituitary gland that stimulates growth of the Graafian follicle is...",
      options: ["LH", "FSH", "Progesterone", "Oestrogen"],
      answer: "FSH",
    },
    {
      type: "multiple-choice",
      question:
        "The layer within the ovary where ova are formed is the ovarian...",
      options: ["Medulla", "Cortex", "Follicle", "Stroma"],
      answer: "Cortex",
    },
    {
      type: "multiple-choice",
      question:
        "The hormone which converts the ruptured follicle into a corpus luteum is...",
      options: ["FSH", "LH", "Progesterone", "Oestrogen"],
      answer: "LH",
    },
    {
      type: "multiple-choice",
      question: "The type of cell division by which sperms are produced is...",
      options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
      answer: "Meiosis",
    },
    {
      type: "multiple-choice",
      question:
        "The hormone that maintains pregnancy (produced by the corpus luteum and placenta) is...",
      options: ["Oestrogen", "Testosterone", "Progesterone", "Prolactin"],
      answer: "Progesterone",
    },
    {
      type: "multiple-choice",
      question: "The gland in the brain that secretes FSH and LH is the...",
      options: [
        "Pineal gland",
        "Pituitary gland",
        "Hypothalamus",
        "Thyroid gland",
      ],
      answer: "Pituitary gland",
    },
    {
      type: "multiple-choice",
      question:
        "The structure formed from part foetal and part maternal tissue responsible for gas exchange and nutrition is the...",
      options: ["Amnion", "Placenta", "Chorion", "Allantois"],
      answer: "Placenta",
    },
    {
      type: "multiple-choice",
      question:
        "The hormone responsible for secondary sexual characteristics in males is...",
      options: ["Oestrogen", "Progesterone", "Testosterone", "FSH"],
      answer: "Testosterone",
    },
    {
      type: "multiple-choice",
      question:
        "The blood vessel that carries nitrogenous waste from the foetus to the placenta is the...",
      options: [
        "Umbilical vein",
        "Umbilical artery",
        "Ductus venosus",
        "Yolk sac vessel",
      ],
      answer: "Umbilical artery",
    },
    {
      type: "multiple-choice",
      question:
        "The blood vessel that carries oxygenated blood from the placenta to the foetus is the...",
      options: [
        "Umbilical artery",
        "Umbilical vein",
        "Aorta",
        "Pulmonary vein",
      ],
      answer: "Umbilical vein",
    },
    {
      type: "multiple-choice",
      question:
        "A gland that lubricates the tip of the penis (Cowper's gland) is also called the...",
      options: [
        "Bulbourethral gland",
        "Prostate gland",
        "Seminal vesicle",
        "Epididymal gland",
      ],
      answer: "Bulbourethral gland",
    },
    {
      type: "multiple-choice",
      question: "The common tube for the passage of urine and semen is the...",
      options: ["Vas deferens", "Ejaculatory duct", "Urethra", "Vagina"],
      answer: "Urethra",
    },
    {
      type: "multiple-choice",
      question: "A gland that produces an alkaline medium of semen is the...",
      options: [
        "Seminal vesicle",
        "Cowper's gland",
        "Prostate gland",
        "Bulbourethral gland",
      ],
      answer: "Prostate gland",
    },
    {
      type: "multiple-choice",
      question:
        "The type of development in birds in which the young are born fully developed and able to move and feed itself is...",
      options: ["Altricial", "Precocial", "Ovoviviparous", "Metamorphic"],
      answer: "Precocial",
    },
    {
      type: "multiple-choice",
      question: "The organ where testosterone is produced is the...",
      options: ["Adrenal gland", "Ovary", "Testis", "Prostate"],
      answer: "Testis",
    },
  ],
  Genetics: [
    {
      type: "multiple-choice",
      question:
        "The passing of hereditary characteristics from parent to offspring is known as...",
      options: ["Genetics", "Heredity", "Inheritance", "Variation"],
      answer: "Inheritance",
    },
    {
      type: "multiple-choice",
      question:
        "A group of organisms with similar characteristics that can interbreed to produce fertile offspring is called a...",
      options: ["Species", "Population", "Genus", "Family"],
      answer: "Species",
    },
    {
      type: "multiple-choice",
      question:
        "A group of individuals of the same species living in a particular habitat is a...",
      options: ["Population", "Community", "Ecosystem", "Gene pool"],
      answer: "Population",
    },
    {
      type: "multiple-choice",
      question: "The exact position of a gene on a chromosome is called a...",
      options: ["Locus", "Allele", "Codon", "Centromere"],
      answer: "Locus",
    },
    {
      type: "multiple-choice",
      question:
        "Different forms of a gene that occur at the same locus on homologous chromosomes are called...",
      options: ["Alleles", "Chromatids", "Loci", "Gametes"],
      answer: "Alleles",
    },
    {
      type: "multiple-choice",
      question:
        "The physical appearance of an organism based on its genotype is known as its...",
      options: ["Phenotype", "Genotype", "Trait", "Karyotype"],
      answer: "Phenotype",
    },
    {
      type: "multiple-choice",
      question: "The genetic composition of an organism is known as its...",
      options: ["Genotype", "Phenotype", "Trait", "Genome"],
      answer: "Genotype",
    },
    {
      type: "multiple-choice",
      question:
        "An allele that is expressed in both heterozygous and homozygous conditions is called a...",
      options: [
        "Dominant allele",
        "Recessive allele",
        "Co-dominant allele",
        "Incomplete allele",
      ],
      answer: "Dominant allele",
    },
    {
      type: "multiple-choice",
      question:
        "An allele that is masked in the heterozygous condition is called a...",
      options: [
        "Recessive allele",
        "Dominant allele",
        "Autosomal allele",
        "Linked allele",
      ],
      answer: "Recessive allele",
    },
    {
      type: "multiple-choice",
      question:
        "When both alleles are identical for a particular trait, the organism is said to be...",
      options: ["Homozygous", "Heterozygous", "Hybrid", "Diploid"],
      answer: "Homozygous",
    },
    {
      type: "multiple-choice",
      question:
        "When two different alleles are present for a particular trait, the organism is...",
      options: ["Heterozygous", "Homozygous", "Hybrid", "Recessive"],
      answer: "Heterozygous",
    },
    {
      type: "multiple-choice",
      question: "A genetic cross involving one characteristic is called a...",
      options: [
        "Monohybrid cross",
        "Dihybrid cross",
        "Polygenic cross",
        "Test cross",
      ],
      answer: "Monohybrid cross",
    },
    {
      type: "multiple-choice",
      question:
        "A genetic cross involving two characteristics is known as a...",
      options: [
        "Dihybrid cross",
        "Monohybrid cross",
        "Back cross",
        "Incomplete cross",
      ],
      answer: "Dihybrid cross",
    },
    {
      type: "multiple-choice",
      question:
        "A cross where the dominant allele masks the recessive allele in the heterozygous condition is called...",
      options: [
        "Complete dominance",
        "Co-dominance",
        "Incomplete dominance",
        "Hybridisation",
      ],
      answer: "Complete dominance",
    },
    {
      type: "multiple-choice",
      question:
        "When the heterozygous phenotype is intermediate between the two parents, this is known as...",
      options: [
        "Incomplete dominance",
        "Complete dominance",
        "Co-dominance",
        "Epistasis",
      ],
      answer: "Incomplete dominance",
    },
    {
      type: "multiple-choice",
      question:
        "When both alleles are equally expressed in the phenotype, this is known as...",
      options: [
        "Co-dominance",
        "Incomplete dominance",
        "Hybridisation",
        "Mutation",
      ],
      answer: "Co-dominance",
    },
    {
      type: "multiple-choice",
      question:
        "When more than two alternative forms of a gene exist at the same locus, it is called...",
      options: [
        "Multiple alleles",
        "Polygenic inheritance",
        "Crossing over",
        "Mutation",
      ],
      answer: "Multiple alleles",
    },
    {
      type: "multiple-choice",
      question:
        "Traits that are carried on the sex chromosomes are known as...",
      options: [
        "Sex-linked traits",
        "Autosomal traits",
        "Recessive traits",
        "Dominant traits",
      ],
      answer: "Sex-linked traits",
    },
    {
      type: "multiple-choice",
      question:
        "The number, shape and arrangement of chromosomes in the nucleus of a cell is called the...",
      options: ["Karyotype", "Phenotype", "Genotype", "Chromatid"],
      answer: "Karyotype",
    },
    {
      type: "multiple-choice",
      question: "A pair of chromosomes that carry the same genes is called...",
      options: [
        "Homologous chromosomes",
        "Autosomes",
        "Sister chromatids",
        "Haploid chromosomes",
      ],
      answer: "Homologous chromosomes",
    },
  ],
  Evolution: [
    {
      type: "multiple-choice",
      question:
        "The process by which populations change over generations is called...",
      options: ["Evolution", "Speciation", "Mutation", "Selection"],
      answer: "Evolution",
    },
    {
      type: "multiple-choice",
      question:
        "The scientist who proposed the theory of natural selection was...",
      options: [
        "Charles Darwin",
        "Gregor Mendel",
        "Jean Lamarck",
        "Louis Pasteur",
      ],
      answer: "Charles Darwin",
    },
    {
      type: "multiple-choice",
      question:
        "The theory that organisms with advantageous traits survive and reproduce is known as...",
      options: [
        "Natural selection",
        "Artificial selection",
        "Mutation theory",
        "Adaptation",
      ],
      answer: "Natural selection",
    },
    {
      type: "multiple-choice",
      question:
        "Evolution that occurs over long periods of time through small changes is called...",
      options: [
        "Gradualism",
        "Punctuated equilibrium",
        "Speciation",
        "Convergence",
      ],
      answer: "Gradualism",
    },
    {
      type: "multiple-choice",
      question:
        "Evolution characterized by long periods of little or no change followed by rapid change is called...",
      options: [
        "Punctuated equilibrium",
        "Gradualism",
        "Mutation",
        "Artificial selection",
      ],
      answer: "Punctuated equilibrium",
    },
    {
      type: "multiple-choice",
      question: "The formation of a new species is called...",
      options: ["Speciation", "Mutation", "Evolution", "Adaptation"],
      answer: "Speciation",
    },
    {
      type: "multiple-choice",
      question:
        "Speciation that occurs due to a geographical barrier is called...",
      options: [
        "Allopatric speciation",
        "Sympatric speciation",
        "Reproductive isolation",
        "Parallel evolution",
      ],
      answer: "Allopatric speciation",
    },
    {
      type: "multiple-choice",
      question:
        "A mechanism that prevents two species from mating is known as...",
      options: [
        "Reproductive isolation",
        "Mutation",
        "Geographical isolation",
        "Adaptation",
      ],
      answer: "Reproductive isolation",
    },
    {
      type: "multiple-choice",
      question: "Artificial selection refers to...",
      options: [
        "Humans breeding organisms for desired traits",
        "Nature selecting traits",
        "Random mutations",
        "Survival of the fittest",
      ],
      answer: "Humans breeding organisms for desired traits",
    },
    {
      type: "multiple-choice",
      question:
        "When individuals that are closely related mate, it is known as...",
      options: ["Inbreeding", "Outbreeding", "Crossbreeding", "Speciation"],
      answer: "Inbreeding",
    },
    {
      type: "multiple-choice",
      question:
        "When individuals that are not closely related mate, it is called...",
      options: ["Outbreeding", "Inbreeding", "Mutation", "Adaptation"],
      answer: "Outbreeding",
    },
    {
      type: "multiple-choice",
      question:
        "The group that includes modern humans and great apes is called...",
      options: ["Hominids", "Primates", "Hominins", "Mammals"],
      answer: "Hominids",
    },
    {
      type: "multiple-choice",
      question:
        "The subgroup that includes only modern humans and early human ancestors is called...",
      options: ["Hominins", "Primates", "Apes", "Hominids"],
      answer: "Hominins",
    },
    {
      type: "multiple-choice",
      question: "‘Homo sapiens’ means...",
      options: ["Wise human", "Modern man", "Primitive man", "Early ape"],
      answer: "Wise human",
    },
    {
      type: "multiple-choice",
      question: "The ability to walk on two legs is known as...",
      options: ["Bipedalism", "Quadrupedalism", "Adaptation", "Homology"],
      answer: "Bipedalism",
    },
    {
      type: "multiple-choice",
      question:
        "The group that includes lemurs, baboons, chimpanzees, apes, and humans is called...",
      options: ["Primates", "Hominins", "Mammals", "Anthropoids"],
      answer: "Primates",
    },
    {
      type: "multiple-choice",
      question:
        "A diagram that shows evolutionary relationships is called a...",
      options: ["Cladogram", "Pedigree chart", "Chromosome map", "Gene tree"],
      answer: "Cladogram",
    },
    {
      type: "multiple-choice",
      question:
        "The hole at the base of the skull where the spinal cord passes is called the...",
      options: [
        "Foramen magnum",
        "Cranial ridge",
        "Sagittal crest",
        "Mandibular fossa",
      ],
      answer: "Foramen magnum",
    },
    {
      type: "multiple-choice",
      question:
        "Differences in physical appearance between males and females of a species are called...",
      options: ["Sexual dimorphism", "Mutation", "Adaptation", "Hybridisation"],
      answer: "Sexual dimorphism",
    },
    {
      type: "multiple-choice",
      question:
        "The ridge running across the top of the skull for jaw muscle attachment is called the...",
      options: [
        "Sagittal crest",
        "Occipital bone",
        "Temporal ridge",
        "Cranial ridge",
      ],
      answer: "Sagittal crest",
    },
  ],

  NervousSystem: [
  {
    type: "multiple-choice",
    question: "The part of the brain that receives impulses from the maculae is the...",
    options: ["Cerebellum", "Medulla oblongata", "Cerebrum", "Hypothalamus"],
    answer: "Cerebellum",
  },
  {
    type: "multiple-choice",
    question: "The structure that connects the left and right hemispheres of the brain is called the...",
    options: ["Corpus callosum", "Medulla oblongata", "Thalamus", "Cerebrum"],
    answer: "Corpus callosum",
  },
  {
    type: "multiple-choice",
    question: "The part of the brain that controls body temperature is the...",
    options: ["Hypothalamus", "Cerebellum", "Medulla oblongata", "Thalamus"],
    answer: "Hypothalamus",
  },
  {
    type: "multiple-choice",
    question: "The branch of the autonomic nervous system that restores an increased heart rate back to normal is the...",
    options: ["Parasympathetic nervous system", "Sympathetic nervous system", "Central nervous system", "Peripheral nervous system"],
    answer: "Parasympathetic nervous system",
  },
  {
    type: "multiple-choice",
    question: "The part of the nervous system made up of spinal and cranial nerves is the...",
    options: ["Peripheral nervous system", "Central nervous system", "Autonomic nervous system", "Somatic nervous system"],
    answer: "Peripheral nervous system",
  },
  {
    type: "multiple-choice",
    question: "The functional gap between two consecutive neurons is called a...",
    options: ["Synapse", "Axon", "Dendrite", "Impulse gap"],
    answer: "Synapse",
  },
  {
    type: "multiple-choice",
    question: "The membranes that surround the brain and spinal cord are collectively called the...",
    options: ["Meninges", "Cranium", "Neurons", "Pia mater"],
    answer: "Meninges",
  },
  {
    type: "multiple-choice",
    question: "The part of the skull that protects the brain is the...",
    options: ["Cranium", "Meninges", "Cerebrum", "Occipital lobe"],
    answer: "Cranium",
  },
  {
    type: "multiple-choice",
    question: "The part of the brain that regulates breathing is the...",
    options: ["Medulla oblongata", "Cerebrum", "Cerebellum", "Hypothalamus"],
    answer: "Medulla oblongata",
  },
  {
    type: "multiple-choice",
    question: "A disease characterised by degeneration of brain tissue leading to memory loss is...",
    options: ["Alzheimer’s disease", "Parkinson’s disease", "Epilepsy", "Multiple sclerosis"],
    answer: "Alzheimer’s disease",
  },
  {
    type: "multiple-choice",
    question: "The part of a neuron that speeds up the transmission of an impulse is the...",
    options: ["Myelin sheath", "Axon", "Dendrite", "Synapse"],
    answer: "Myelin sheath",
  },
  {
    type: "multiple-choice",
    question: "A disorder of the nervous system characterised by degeneration of neurons is...",
    options: ["Multiple sclerosis", "Alzheimer’s disease", "Stroke", "Epilepsy"],
    answer: "Multiple sclerosis",
  },
  {
    type: "multiple-choice",
    question: "The part of the brain that controls heart rate is the...",
    options: ["Medulla oblongata", "Cerebellum", "Cerebrum", "Hypothalamus"],
    answer: "Medulla oblongata",
  },
  {
    type: "multiple-choice",
    question: "The pigmented layer of the eye that absorbs excess light is the...",
    options: ["Choroid", "Retina", "Cornea", "Sclera"],
    answer: "Choroid",
  },
  {
    type: "multiple-choice",
    question: "The watery fluid that supports the cornea and the front chamber of the eye is the...",
    options: ["Aqueous humour", "Vitreous humour", "Lacrimal fluid", "Tear fluid"],
    answer: "Aqueous humour",
  },
  {
    type: "multiple-choice",
    question: "The defect where near objects are seen clearly but distant ones appear blurred is called...",
    options: ["Myopia", "Hypermetropia", "Astigmatism", "Cataract"],
    answer: "Myopia",
  },
  {
    type: "multiple-choice",
    question: "The visual defect caused by a cloudy lens is called...",
    options: ["Cataract", "Myopia", "Glaucoma", "Astigmatism"],
    answer: "Cataract",
  },
  {
    type: "multiple-choice",
    question: "The area of the retina with the highest concentration of cones is the...",
    options: ["Yellow spot (fovea)", "Blind spot", "Cornea", "Iris"],
    answer: "Yellow spot (fovea)",
  },
  {
    type: "multiple-choice",
    question: "Photoreceptors responsible for vision in dim light are called...",
    options: ["Rods", "Cones", "Maculae", "Optic nerves"],
    answer: "Rods",
  },
  {
    type: "multiple-choice",
    question: "The small tubes inserted in the ear to drain fluids from a middle-ear infection are called...",
    options: ["Grommets", "Ossicles", "Cochlear tubes", "Round windows"],
    answer: "Grommets",
  }
    ],
  EndocrineSystem: [
  {
    type: "multiple-choice",
    question: "The system responsible for chemical coordination in the body is the...",
    options: ["Endocrine system", "Nervous system", "Circulatory system", "Respiratory system"],
    answer: "Endocrine system",
  },
  {
    type: "multiple-choice",
    question: "A gland whose secretions are transported through ducts is called a...",
    options: ["Exocrine gland", "Endocrine gland", "Adrenal gland", "Pituitary gland"],
    answer: "Exocrine gland",
  },
  {
    type: "multiple-choice",
    question: "A gland whose secretions are transported through the bloodstream is called a...",
    options: ["Endocrine gland", "Exocrine gland", "Salivary gland", "Sebaceous gland"],
    answer: "Endocrine gland",
  },
  {
    type: "multiple-choice",
    question: "The hormone that stimulates mammary glands to produce milk is...",
    options: ["Prolactin", "Oxytocin", "Progesterone", "FSH"],
    answer: "Prolactin",
  },
  {
    type: "multiple-choice",
    question: "The hormone responsible for osmoregulation in the body is...",
    options: ["ADH (Antidiuretic hormone)", "Aldosterone", "Insulin", "Cortisol"],
    answer: "ADH (Antidiuretic hormone)",
  },
  {
    type: "multiple-choice",
    question: "Specialized cells in the pancreas that secrete insulin and glucagon are called...",
    options: ["Islets of Langerhans", "Beta cells", "Alpha cells", "Nephrons"],
    answer: "Islets of Langerhans",
  },
  {
    type: "multiple-choice",
    question: "The hormone responsible for secondary sexual characteristics in males is...",
    options: ["Testosterone", "Progesterone", "Oestrogen", "FSH"],
    answer: "Testosterone",
  },
  {
    type: "multiple-choice",
    question: "The hormone that helps maintain salt balance in the body is...",
    options: ["Aldosterone", "ADH", "Insulin", "Cortisol"],
    answer: "Aldosterone",
  },
  {
    type: "multiple-choice",
    question: "The gland that secretes FSH and LH in females is the...",
    options: ["Pituitary gland", "Ovary", "Thyroid gland", "Adrenal gland"],
    answer: "Pituitary gland",
  },
  {
    type: "multiple-choice",
    question: "Chemical messengers produced by endocrine glands are called...",
    options: ["Hormones", "Enzymes", "Neurotransmitters", "Proteins"],
    answer: "Hormones",
  },
  {
    type: "multiple-choice",
    question: "The gland located in the neck that secretes thyroxin is the...",
    options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Parathyroid gland"],
    answer: "Thyroid gland",
  },
  {
    type: "multiple-choice",
    question: "The hormone that controls metabolic rate is...",
    options: ["Thyroxin", "Insulin", "Cortisol", "Adrenaline"],
    answer: "Thyroxin",
  },
  {
    type: "multiple-choice",
    question: "The hormone responsible for growth and development is...",
    options: ["Growth hormone", "Thyroxin", "Insulin", "Oestrogen"],
    answer: "Growth hormone",
  },
  {
    type: "multiple-choice",
    question: "The hormone that prepares the body for emergencies is...",
    options: ["Adrenaline", "Thyroxin", "Aldosterone", "FSH"],
    answer: "Adrenaline",
  },
  {
    type: "multiple-choice",
    question: "The mechanism that detects and corrects internal imbalances is called...",
    options: ["Negative feedback", "Positive feedback", "Homeostasis", "Coordination"],
    answer: "Negative feedback",
  },
  {
    type: "multiple-choice",
    question: "The hormone that stimulates follicle development in the ovary is...",
    options: ["FSH", "LH", "Progesterone", "Oestrogen"],
    answer: "FSH",
  },
  {
    type: "multiple-choice",
    question: "The hormone that promotes secretion of thyroid hormones is...",
    options: ["TSH", "FSH", "LH", "GH"],
    answer: "TSH",
  },
  {
    type: "multiple-choice",
    question: "The hormone that lowers blood glucose levels is...",
    options: ["Insulin", "Glucagon", "Adrenaline", "Thyroxin"],
    answer: "Insulin",
  },
  {
    type: "multiple-choice",
    question: "The hormone that raises blood glucose levels is...",
    options: ["Glucagon", "Insulin", "Adrenaline", "Cortisol"],
    answer: "Glucagon",
  },
  {
    type: "multiple-choice",
    question: "The hormone that maintains pregnancy is...",
    options: ["Progesterone", "Oestrogen", "FSH", "LH"],
    answer: "Progesterone",
  },
  {
    type: "multiple-choice",
    question: "The hormone that is in excess in a person that grows abnormally tall is...",
    options: ["Growth hormone", "Thyroxin", "Cortisol", "Adrenaline"],
    answer: "Growth hormone",
  },
  {
    type: "multiple-choice",
    question: "The hormone that controls the salt content in a human body is...",
    options: ["Aldosterone", "ADH", "Cortisol", "Insulin"],
    answer: "Aldosterone",
  },
  {
    type: "multiple-choice",
    question: "The state of the blood vessels in the skin when environmental temperature is high is...",
    options: ["Vasodilation", "Vasoconstriction", "Osmoregulation", "Thermogenesis"],
    answer: "Vasodilation",
  },
  {
    type: "multiple-choice",
    question: "An excess of carbon dioxide in the blood may cause a decrease in the blood’s...",
    options: ["pH", "Oxygen level", "Temperature", "Glucose level"],
    answer: "pH",
  },
  {
    type: "multiple-choice",
    question: "Which organ acts as both an endocrine and an exocrine gland?",
    options: ["Pancreas", "Liver", "Kidney", "Thyroid"],
    answer: "Pancreas",
  },
  {
    type: "multiple-choice",
    question: "The part of the brain responsible for thermoregulation is the...",
    options: ["Hypothalamus", "Medulla oblongata", "Cerebellum", "Cerebrum"],
    answer: "Hypothalamus",
  }

  ],
  Plants: [
    {
      type: "multiple-choice",
      question: "What is the primary function of auxins in plants?",
      options: [
        "Promote cell elongation",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote seed germination",
      ],
      answer: "Promote cell elongation",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is responsible for fruit ripening?",
      options: ["Ethylene", "Auxin", "Gibberellin", "Cytokinin"],
      answer: "Ethylene",
    },
    {
      type: "multiple-choice",
      question: "What is the role of gibberellins in plants?",
      options: [
        "Promote stem elongation",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote seed germination",
      ],
      answer: "Promote stem elongation",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone promotes cell division?",
      options: ["Cytokinin", "Auxin", "Gibberellin", "Ethylene"],
      answer: "Cytokinin",
    },
    {
      type: "multiple-choice",
      question: "What is the function of abscisic acid in plants?",
      options: [
        "Inhibit growth and promote dormancy",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote seed germination",
      ],
      answer: "Inhibit growth and promote dormancy",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is involved in phototropism?",
      options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
      answer: "Auxin",
    },
    {
      type: "multiple-choice",
      question: "What is the role of ethylene in plants?",
      options: [
        "Promote fruit ripening and leaf fall",
        "Promote cell elongation",
        "Promote stem elongation",
        "Promote seed germination",
      ],
      answer: "Promote fruit ripening and leaf fall",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is responsible for seed dormancy?",
      options: ["Abscisic acid", "Auxin", "Gibberellin", "Cytokinin"],
      answer: "Abscisic acid",
    },
    {
      type: "multiple-choice",
      question: "What is the function of cytokinins in plants?",
      options: [
        "Promote cell division and delay aging",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote seed germination",
      ],
      answer: "Promote cell division and delay aging",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is involved in gravitropism?",
      options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
      answer: "Auxin",
    },
    {
      type: "multiple-choice",
      question: "What is the role of gibberellins in seed germination?",
      options: [
        "Break seed dormancy",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote cell elongation",
      ],
      answer: "Break seed dormancy",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is responsible for leaf abscission?",
      options: ["Ethylene", "Auxin", "Gibberellin", "Cytokinin"],
      answer: "Ethylene",
    },
    {
      type: "multiple-choice",
      question: "What is the function of auxins in root development?",
      options: [
        "Promote root initiation",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote seed germination",
      ],
      answer: "Promote root initiation",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is involved in apical dominance?",
      options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
      answer: "Auxin",
    },
    {
      type: "multiple-choice",
      question: "What is the role of cytokinins in plant growth?",
      options: [
        "Promote cell division and shoot formation",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote seed germination",
      ],
      answer: "Promote cell division and shoot formation",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is responsible for stress responses?",
      options: ["Abscisic acid", "Auxin", "Gibberellin", "Cytokinin"],
      answer: "Abscisic acid",
    },
    {
      type: "multiple-choice",
      question: "What is the function of ethylene in flower senescence?",
      options: [
        "Promote flower wilting",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote seed germination",
      ],
      answer: "Promote flower wilting",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is involved in thigmotropism?",
      options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
      answer: "Auxin",
    },
    {
      type: "multiple-choice",
      question: "What is the role of gibberellins in flowering?",
      options: [
        "Promote flowering in long-day plants",
        "Promote fruit ripening",
        "Promote leaf fall",
        "Promote seed germination",
      ],
      answer: "Promote flowering in long-day plants",
    },
    {
      type: "multiple-choice",
      question: "Which plant hormone is responsible for root gravitropism?",
      options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
      answer: "Auxin",
    },
  ],
};

// Sample Questions (Fill in the Blank)
const fillInBlankQuestions = {
  NervousSystem: [
  {
    type: "fill-in-blank",
    question: "The structure that connects the left and right hemispheres of the brain is the __________.",
    answer: "Corpus callosum",
  },
  {
    type: "fill-in-blank",
    question: "The branch of the autonomic nervous system that restores normal heart rate after stress is the __________ system.",
    answer: "Parasympathetic",
  },
  {
    type: "fill-in-blank",
    question: "The functional gap between two neurons is called a __________.",
    answer: "Synapse",
  },
  {
    type: "fill-in-blank",
    question: "The membranes that protect the brain and spinal cord are called the __________.",
    answer: "Meninges",
  },
  {
    type: "fill-in-blank",
    question: "The part of the brain that regulates breathing and heart rate is the __________.",
    answer: "Medulla oblongata",
  },
  {
    type: "fill-in-blank",
    question: "The outermost membrane that surrounds and protects the brain is called the __________.",
    answer: "Dura mater",
  },
  {
    type: "fill-in-blank",
    question: "The watery fluid that supports the cornea and front chamber of the eye is the __________.",
    answer: "Aqueous humour",
  },
  {
    type: "fill-in-blank",
    question: "The jelly-like substance that maintains the shape of the eye is the __________.",
    answer: "Vitreous humour",
  },
  {
    type: "fill-in-blank",
    question: "The process by which the lens changes shape to focus on near or far objects is called __________.",
    answer: "Accommodation",
  },
  {
    type: "fill-in-blank",
    question: "The defect of the eye caused by uneven curvature of the lens or cornea is called __________.",
    answer: "Astigmatism",
  },
  {
    type: "fill-in-blank",
    question: "The nerve that carries impulses from the retina to the brain is the __________ nerve.",
    answer: "Optic",
  },
  {
    type: "fill-in-blank",
    question: "The part of the ear that equalises air pressure on both sides of the tympanic membrane is the __________.",
    answer: "Eustachian tube",
  },
  {
    type: "fill-in-blank",
    question: "The part of the ear that absorbs excess pressure waves from the cochlea is the __________.",
    answer: "Round window",
  },
  {
    type: "fill-in-blank",
    question: "The ossicle that transfers vibrations to the oval window is the __________.",
    answer: "Stapes",
  },
  {
    type: "fill-in-blank",
    question: "The part of the ear that receives sound waves from the auditory canal is the __________.",
    answer: "Tympanic membrane",
  },
  {
    type: "fill-in-blank",
    question: "The structure in the inner ear that contains receptors for hearing is the __________.",
    answer: "Organ of Corti",
  },
  {
    type: "fill-in-blank",
    question: "The receptors in the ear that detect changes in body position and movement are located in the __________ canals.",
    answer: "Semicircular",
  },
  {
    type: "fill-in-blank",
    question: "The type of vision in which both eyes are used together to focus on an object is called __________ vision.",
    answer: "Binocular",
  },
  {
    type: "fill-in-blank",
    question: "The part of the brain that receives impulses from the maculae to maintain balance is the __________.",
    answer: "Cerebellum",
  },
  {
    type: "fill-in-blank",
    question: "The part of the brain that controls body temperature is the __________.",
    answer: "Hypothalamus",
  }
],
  Genetics: [
    {
      type: "fill-in-blank",
      question:
        "A segment of DNA that contains the code for a particular characteristic is called a __________.",
      answer: "Gene",
    },
    {
      type: "fill-in-blank",
      question:
        "Different forms of a gene that occur at the same locus are called __________.",
      answer: "Alleles",
    },
    {
      type: "fill-in-blank",
      question:
        "The physical expression of a genetic trait is called the __________.",
      answer: "Phenotype",
    },
    {
      type: "fill-in-blank",
      question: "The genetic makeup of an organism is called its __________.",
      answer: "Genotype",
    },
    {
      type: "fill-in-blank",
      question:
        "The location of a gene on a chromosome is called a __________.",
      answer: "Locus",
    },
    {
      type: "fill-in-blank",
      question:
        "A condition in which both alleles are the same is called __________.",
      answer: "Homozygous",
    },
    {
      type: "fill-in-blank",
      question:
        "A condition in which two different alleles are present is called __________.",
      answer: "Heterozygous",
    },
    {
      type: "fill-in-blank",
      question:
        "The process of producing genetically identical organisms using biotechnology is called __________.",
      answer: "Cloning",
    },
    {
      type: "fill-in-blank",
      question:
        "The manipulation of the genetic material of an organism to obtain desired changes is called __________.",
      answer: "Genetic engineering",
    },
    {
      type: "fill-in-blank",
      question:
        "Mapping of all the genes in the human chromosomes is known as the __________.",
      answer: "Human Genome Project",
    },
    {
      type: "fill-in-blank",
      question:
        "A change in a population’s genes over generations is called __________.",
      answer: "Evolution",
    },
    {
      type: "fill-in-blank",
      question:
        "A genetic cross involving one trait is called a __________ cross.",
      answer: "Monohybrid",
    },
    {
      type: "fill-in-blank",
      question:
        "A genetic cross involving two traits is called a __________ cross.",
      answer: "Dihybrid",
    },
    {
      type: "fill-in-blank",
      question:
        "The process by which organisms with advantageous traits survive and reproduce is __________.",
      answer: "Natural selection",
    },
    {
      type: "fill-in-blank",
      question:
        "A set of one maternal and one paternal chromosome that pair up during meiosis are called __________ chromosomes.",
      answer: "Homologous",
    },
    {
      type: "fill-in-blank",
      question:
        "A permanent change in the DNA sequence of a gene is called a __________.",
      answer: "Mutation",
    },
    {
      type: "fill-in-blank",
      question:
        "The diagram used to predict genetic outcomes of a cross is called a __________ square.",
      answer: "Punnett",
    },
    {
      type: "fill-in-blank",
      question:
        "The science that studies heredity and variation is called __________.",
      answer: "Genetics",
    },
    {
      type: "fill-in-blank",
      question:
        "When both alleles contribute to the phenotype in equal measure, it is called __________.",
      answer: "Co-dominance",
    },
    {
      type: "fill-in-blank",
      question:
        "An allele that is masked in the heterozygous condition is called __________.",
      answer: "Recessive",
    },
  ],

  Evolution: [
    {
      type: "fill-in-blank",
      question:
        "The process by which species change over generations is called __________.",
      answer: "Evolution",
    },
    {
      type: "fill-in-blank",
      question:
        "Darwin’s theory of evolution is based on the idea of __________.",
      answer: "Natural selection",
    },
    {
      type: "fill-in-blank",
      question: "The formation of new species is known as __________.",
      answer: "Speciation",
    },
    {
      type: "fill-in-blank",
      question:
        "Speciation caused by geographical barriers is called __________ speciation.",
      answer: "Allopatric",
    },
    {
      type: "fill-in-blank",
      question:
        "A change in the genetic composition of a population over time is called __________.",
      answer: "Evolution",
    },
    {
      type: "fill-in-blank",
      question:
        "Human-driven selection for desirable traits is called __________ selection.",
      answer: "Artificial",
    },
    {
      type: "fill-in-blank",
      question:
        "When individuals that are closely related mate, it is known as __________.",
      answer: "Inbreeding",
    },
    {
      type: "fill-in-blank",
      question:
        "When individuals that are not closely related mate, it is known as __________.",
      answer: "Outbreeding",
    },
    {
      type: "fill-in-blank",
      question:
        "The mechanism that prevents two species from interbreeding is called __________ isolation.",
      answer: "Reproductive",
    },
    {
      type: "fill-in-blank",
      question: "The group that includes humans and apes is called __________.",
      answer: "Hominids",
    },
    {
      type: "fill-in-blank",
      question:
        "The subgroup that includes only modern humans and their ancestors is called __________.",
      answer: "Hominins",
    },
    {
      type: "fill-in-blank",
      question: "The scientific name of modern humans is __________.",
      answer: "Homo sapiens",
    },
    {
      type: "fill-in-blank",
      question: "The ability to walk on two legs is called __________.",
      answer: "Bipedalism",
    },
    {
      type: "fill-in-blank",
      question:
        "The hole in the base of the skull through which the spinal cord passes is called the __________.",
      answer: "Foramen magnum",
    },
    {
      type: "fill-in-blank",
      question:
        "The ridge on the top of the skull for attachment of jaw muscles is called the __________.",
      answer: "Sagittal crest",
    },
    {
      type: "fill-in-blank",
      question:
        "The branch of biology that studies evolutionary relationships among species is called __________.",
      answer: "Phylogenetics",
    },
    {
      type: "fill-in-blank",
      question:
        "The biological group that includes lemurs, monkeys, apes, and humans is called __________.",
      answer: "Primates",
    },
    {
      type: "fill-in-blank",
      question: "A jaw that projects outward is described as __________.",
      answer: "Prognathous",
    },
    {
      type: "fill-in-blank",
      question:
        "The structure that shows evolutionary history among organisms is a __________.",
      answer: "Cladogram",
    },
    {
      type: "fill-in-blank",
      question: "The Latin term 'Homo' means __________.",
      answer: "Human",
    },
  ],

  Meiosis: [
    {
      type: "fill-in-blank",
      question:
        "The point of crossing over between two adjacent chromosomes is called a __________.",
      answer: "chiasma",
    },
    {
      type: "fill-in-blank",
      question:
        "The splitting of the cytoplasm during cell division is called __________.",
      answer: "cytokinesis",
    },
    {
      type: "fill-in-blank",
      question:
        "The failure of chromosome pairs to separate during meiosis is called __________.",
      answer: "non-disjunction",
    },
    {
      type: "fill-in-blank",
      question:
        "The structures in the cell that forms the spindle fibres are the __________.",
      answer: "centrioles",
    },
    {
      type: "fill-in-blank",
      question:
        "The phase of meiosis when homologous chromosomes are aligned at the equator of the cell is __________.",
      answer: "metaphase i",
    },
    {
      type: "fill-in-blank",
      question:
        "The point at which the two chromatids of a chromosome are joined together is the __________.",
      answer: "centromere",
    },
    {
      type: "fill-in-blank",
      question: "The division of the nucleus is called __________.",
      answer: "karyokinesis",
    },
    {
      type: "fill-in-blank",
      question:
        "Exchange of genetic material between chromatids of homologous chromosomes is called __________.",
      answer: "crossing over",
    },
    {
      type: "fill-in-blank",
      question: "Site of meiosis in females is the __________.",
      answer: "ovaries",
    },
    {
      type: "fill-in-blank",
      question:
        "A genetic disorder caused by having an extra copy of chromosome number 21 is __________ syndrome.",
      answer: "down",
    },
    {
      type: "fill-in-blank",
      question:
        "The Structure formed by the centrioles during cell division are the __________.",
      answer: "spindle fibres",
    },
    {
      type: "fill-in-blank",
      question: "The non-sex chromosomes in humans are called __________.",
      answer: "autosomes",
    },
    {
      type: "fill-in-blank",
      question:
        "The condition in a cell where there is only one set of chromosomes is called __________.",
      answer: "haploid",
    },
    {
      type: "fill-in-blank",
      question:
        "The structure that is responsible for the formation of spindle fibres during cell division in animal cells and is made up of two centrioles is the __________.",
      answer: "centrosome",
    },
    {
      type: "fill-in-blank",
      question:
        "The phase in the cell cycle during which the cell growth occurs is __________.",
      answer: "interphase",
    },
    {
      type: "fill-in-blank",
      question:
        "Chromosomes that carry the same set of genes are __________ chromosomes.",
      answer: "homologous",
    },
    {
      type: "fill-in-blank",
      question:
        "The structure that joins two chromatids of a chromosome is the __________.",
      answer: "centromere",
    },
    {
      type: "fill-in-blank",
      question:
        "The division of the cytoplasm of a cell during cell division is __________.",
      answer: "cytokinesis",
    },
    {
      type: "fill-in-blank",
      question:
        "The process during meiosis where there is an exchange of genetic material between chromatids is called __________.",
      answer: "crossing over",
    },
    {
      type: "fill-in-blank",
      question:
        "The structures in animal cells that give rise to spindle fibres during cell division are the __________.",
      answer: "centrosomes",
    },
    {
      type: "fill-in-blank",
      question:
        "The phase in the cell cycle during which DNA replication takes place is __________.",
      answer: "interphase",
    },
    {
      type: "fill-in-blank",
      question:
        "The point where adjacent chromatids overlap during meiosis is called a __________.",
      answer: "chiasma",
    },
    {
      type: "fill-in-blank",
      question:
        "The representation showing the arrangement of a diploid set of chromosomes is a __________.",
      answer: "karyotype",
    },
  ],
  DNA: [
    {
      type: "fill-in-blank",
      question:
        "A tangled network of DNA and protein located within the nucleus is called the __________.",
      answer: "chromatin network",
    },
    {
      type: "fill-in-blank",
      question:
        "The bonds that hold the two strands of a DNA molecule together are __________ bonds.",
      answer: "hydrogen",
    },
    {
      type: "fill-in-blank",
      question: "The sugar found in DNA is __________ sugar.",
      answer: "deoxyribose",
    },
    {
      type: "fill-in-blank",
      question:
        "The analysis of DNA samples to identify individuals that may be related is called DNA __________.",
      answer: "profiling",
    },
    {
      type: "fill-in-blank",
      question:
        "The process whereby DNA makes an exact copy of itself is called DNA __________.",
      answer: "replication",
    },
    {
      type: "fill-in-blank",
      question: "The monomers of nucleic acids are called __________.",
      answer: "nucleotides",
    },
    {
      type: "fill-in-blank",
      question: "The natural shape of a DNA molecule is a __________.",
      answer: "double helix",
    },
    {
      type: "fill-in-blank",
      question:
        "Sections of DNA that carry hereditary information are called __________.",
      answer: "genes",
    },
    {
      type: "fill-in-blank",
      question:
        "The sugar that forms part of a nucleotide in RNA is __________.",
      answer: "ribose",
    },
    {
      type: "fill-in-blank",
      question:
        "The process whereby mRNA is formed from DNA is called __________.",
      answer: "transcription",
    },
    {
      type: "fill-in-blank",
      question: "Base triplets found on mRNA are called __________.",
      answer: "codons",
    },
    {
      type: "fill-in-blank",
      question:
        "The cell organelle to which mRNA attaches during protein synthesis is the __________.",
      answer: "ribosome",
    },
    {
      type: "fill-in-blank",
      question:
        "The process of arranging amino acids according to the sequence of bases on mRNA is called __________.",
      answer: "translation",
    },
    {
      type: "fill-in-blank",
      question:
        "The organelle in a cell where translation occurs is the __________.",
      answer: "ribosome",
    },
    {
      type: "fill-in-blank",
      question:
        "The triplet of bases found on a tRNA molecule is called a(n) __________.",
      answer: "anticodon",
    },
    {
      type: "fill-in-blank",
      question: "The type of RNA containing anticodons is __________.",
      answer: "tRNA",
    },
    {
      type: "fill-in-blank",
      question: "Bonds that join amino acids together are __________ bonds.",
      answer: "peptide",
    },
  ],

  plantHormones: [
    {
      type: "fill-in-blank",
      question: "The plant hormone that promotes cell elongation is",
      answer: "auxin",
    },
    {
      type: "fill-in-blank",
      question: "The plant hormone responsible for fruit ripening is ",
      answer: "ethylene",
    },
    {
      type: "fill-in-blank",
      question: "The plant hormone that promotes seed germination is",
      answer: "gibberellin",
    },
    {
      type: "fill-in-blank",
      question:
        "The plant hormone that inhibits growth and promotes dormancy is",
      answer: "abscisic acid",
    },
    {
      type: "fill-in-blank",
      question: "The plant hormone that promotes cell division is",
      answer: "cytokinin",
    },
  ],
  Reproduction: [
    {
      type: "fill-in-blank",
      question:
        "The complete development of the embryo inside an egg in the female body is called __________.",
      answer: "ovoviviparous development",
    },
    {
      type: "fill-in-blank",
      question:
        "The development of the embryo in which very little energy is used and parental care is required is called __________ development.",
      answer: "altricial",
    },
    {
      type: "fill-in-blank",
      question:
        "The development of the embryo in which a lot of energy is used and the young are able to move directly after hatching is called __________ development.",
      answer: "precocial",
    },
    {
      type: "fill-in-blank",
      question:
        "The structure that provides nutrition to the embryo in the amniotic egg is the __________.",
      answer: "yolk sac",
    },
    {
      type: "fill-in-blank",
      question: "The fluid-filled bag around the embryo is the __________.",
      answer: "amnion",
    },
    {
      type: "fill-in-blank",
      question:
        "The liquid that surrounds the human embryo is called the __________.",
      answer: "amniotic fluid",
    },
    {
      type: "fill-in-blank",
      question:
        "The lining of the uterus which is richly supplied with blood vessels is the __________.",
      answer: "endometrium",
    },
    {
      type: "fill-in-blank",
      question:
        "The name given to the embryo after it reaches 12 weeks is the __________.",
      answer: "foetus",
    },
    {
      type: "fill-in-blank",
      question: "Another name for the period of pregnancy is __________.",
      answer: "gestation",
    },
    {
      type: "fill-in-blank",
      question:
        "The process by which the embryo becomes attached to the uterine wall is called __________.",
      answer: "implantation",
    },
    {
      type: "fill-in-blank",
      question:
        "The 28-day reproductive cycle in females involving changes in the ovary and uterus is called the __________.",
      answer: "menstrual cycle",
    },
    {
      type: "fill-in-blank",
      question:
        "Tearing away of the endometrial lining of the uterus accompanied by loss of blood is called __________.",
      answer: "menstruation",
    },
    {
      type: "fill-in-blank",
      question:
        "The cell division by which the zygote becomes multicellular is called __________.",
      answer: "mitosis",
    },
    {
      type: "fill-in-blank",
      question: "Production of ova by meiosis is called __________.",
      answer: "oogenesis",
    },
    {
      type: "fill-in-blank",
      question:
        "The process by which an ovum is released from the ovary in humans is called __________.",
      answer: "ovulation",
    },
    {
      type: "fill-in-blank",
      question:
        "The stage when sexual maturity is reached in males and females is called __________.",
      answer: "puberty",
    },
    {
      type: "fill-in-blank",
      question: "Production of spermatozoa by meiosis is called __________.",
      answer: "spermatogenesis",
    },
    {
      type: "fill-in-blank",
      question:
        "A hollow rope-like tube which attaches the embryo to the placenta is the __________.",
      answer: "umbilical cord",
    },
    {
      type: "fill-in-blank",
      question:
        "The sac-like structure that contains the testes is the __________.",
      answer: "scrotum",
    },
    {
      type: "fill-in-blank",
      question:
        "A gland that provides nutrients for the sperms is the __________.",
      answer: "seminal vesicle",
    },
    {
      type: "fill-in-blank",
      question:
        "A tube that transfers sperms to the urethra is the __________.",
      answer: "vas deferens",
    },
    {
      type: "fill-in-blank",
      question:
        "Finger-like projections that develop from the outer membrane of an embryo after implantation are called __________.",
      answer: "chorionic villi",
    },
    {
      type: "fill-in-blank",
      question:
        "The fluid that protects the developing foetus against mechanical injury is the __________.",
      answer: "amniotic fluid",
    },
    {
      type: "fill-in-blank",
      question:
        "The organelles found in large quantities in the neck region of a sperm cell are the __________.",
      answer: "mitochondria",
    },
    {
      type: "fill-in-blank",
      question:
        "A blood vessel that transports carbon dioxide from the foetus to the placenta is the __________.",
      answer: "umbilical artery",
    },
    {
      type: "fill-in-blank",
      question:
        "The hormone produced by the pituitary gland that stimulates the secretion of milk after birth is __________.",
      answer: "prolactin",
    },
    {
      type: "fill-in-blank",
      question:
        "The lower neck of the uterus that opens into the vagina is called the __________.",
      answer: "cervix",
    },
  ],
  EndocrineSystem: [
  {
    type: "fill-in-blank",
    question: "The hormone that is in excess in a person that grows abnormally tall is __________.",
    answer: "Growth hormone",
  },
  {
    type: "fill-in-blank",
    question: "A hormone that controls the salt content in the body is __________.",
    answer: "Aldosterone",
  },
  {
    type: "fill-in-blank",
    question: "The state of the blood vessels in the skin when the environmental temperature is high is __________.",
    answer: "Vasodilation",
  },
  {
    type: "fill-in-blank",
    question: "An excess of carbon dioxide may cause a decrease in the __________ of the blood.",
    answer: "pH",
  },
  {
    type: "fill-in-blank",
    question: "The organ that acts as both an endocrine and exocrine gland is the __________.",
    answer: "Pancreas",
  },
  {
    type: "fill-in-blank",
    question: "The part of the brain responsible for thermoregulation is the __________.",
    answer: "Hypothalamus",
  }
  ],
};
