// --- Paper 1 terms
const glossaryP1 = [
  {
    term: "Precocial development",
    definition:
      "The type of development in birds where the young are practically fully developed and immediately mobile when they are hatched",
  },
  {
    term: "Axon",
    definition:
      "Nerve fibres that conduct nerve impulses away from the cell body of a neuron",
  },
  {
    term: "Oogenesis",
    definition:
      "The formation of ova from the germinal epithelial cells through the process of meiosis",
  },
  {
    term: "Parental care",
    definition:
      "A behavioural pattern where the parents spend time and energy on the feeding and protection of their offspring",
  },
  {
    term: "Synapse",
    definition:
      "A functional (physiological), but not direct, connection between two successive neurons",
  },
  {
    term: "Implantation",
    definition:
      "The process whereby the embryo becomes attached to the endometrial wall of the uterus",
  },
  {
    term: "Umbilical vein",
    definition: "The blood vessel that carries oxygenated blood to the foetus",
  },
  {
    term: "Gestation period",
    definition:
      "The period during which the embryo develops within the uterus of the mother up to the time the baby is born",
  },
  {
    term: "Multiple sclerosis",
    definition:
      "A disorder that occurs when one's own immune system surrounds, attacks and destroys the myelin sheath that envelops the axons",
  },
  { term: "Foetus", definition: "Three-month-old human embryo" },
  {
    term: "Chorion",
    definition:
      "The membrane that forms finger-like projections which grows into the uterine wall",
  },
  {
    term: "Negative feedback",
    definition:
      "A phenomenon where an increase in one hormone inhibits the secretion of another hormone",
  },
  {
    term: "Diabetes mellitus",
    definition:
      "A disease in which the hormonal control of blood glucose is defective because of a deficiency of insulin",
  },
  {
    term: "Amniotic fluid",
    definition:
      "The liquid that protects the embryo against mechanical injury and dehydration",
  },
  {
    term: "Vasodilation",
    definition:
      "The increase of the internal diameter of blood vessels so that more blood flows through them",
  },
  {
    term: "Acrosome",
    definition:
      "Structure in the sperm cell containing enzymes that break down the membrane of the ovum",
  },
  { term: "Ovulation", definition: "The release of an ovum from a follicle" },
  {
    term: "Vas deferens",
    definition:
      "The tube that transports the sperm from the testis to the urethra",
  },
  {
    term: "Prolactin",
    definition: "A hormone produced in females to stimulate milk production",
  },
  {
    term: "Corpus luteum",
    definition:
      "The structure formed from the Graafian follicle after ovulation",
  },
  {
    term: "Gametogenesis",
    definition: "The process by which sperms and eggs are produced",
  },
  {
    term: "Testis",
    definition: "The organ in human males in which meiosis occurs",
  },
  {
    term: "Oogenesis",
    definition:
      "The meiotic process by which female gametes are formed in humans",
  },
  {
    term: "Umbilical vein",
    definition:
      "The blood vessel in the umbilical cord which is rich in oxygen and nutrients",
  },
  {
    term: "Cervix",
    definition: "The lower neck of the uterus that opens into the vagina",
  },
  {
    term: "Meninges",
    definition: "The membranes which protect the central nervous system",
  },
  {
    term: "Gibberellins",
    definition: "A plant growth hormone that stimulates seed germination",
  },
  {
    term: "Peripheral nervous system",
    definition:
      "The nervous system which consists of cranial and spinal nerves",
  },
  {
    term: "Parasympathetic nervous system",
    definition:
      "A branch of the autonomic nervous system that decreases the heartbeat back to normal",
  },
  {
    term: "Chorion",
    definition: "The outermost extra-embryonic membrane surrounding the embryo",
  },
  {
    term: "Aldosterone",
    definition:
      "The hormone that regulates the salt concentration in the human body",
  },
  {
    term: "Photoreceptors",
    definition:
      "The cells in the retina of the eye that are sensitive to light",
  },
  {
    term: "Eustachian tube",
    definition:
      "The tube that connects the middle ear to the throat cavity to ensure that the pressure on either side of the tympanic membrane is kept constant",
  },
  {
    term: "Cataract",
    definition:
      "Defect of the eye due to a clouding of the eye's normal, clear, transparent lens, affecting acuity of vision",
  },
  { term: "Semen", definition: "A fluid containing sperm cells" },
  {
    term: "Reflex action",
    definition: "A rapid, automatic response to a stimulus",
  },
  {
    term: "Organ of Corti",
    definition:
      "The structure within the cochlea responsible for the conversion of a sound stimulus into an impulse",
  },
  {
    term: "Synaptic cleft",
    definition: "Microscopic space between two consecutive neurons",
  },
  {
    term: "Peripheral nervous system",
    definition:
      "The part of the nervous system outside the brain and spinal cord",
  },
  {
    term: "Blastocyst",
    definition:
      "A stage in the development of humans in which the embryo consists of a layer of cells surrounding a cavity",
  },
  {
    term: "Prostate gland",
    definition:
      "The gland in the male reproductive system of humans that produces an alkaline fluid to counteract the acid environment of the vagina",
  },
  {
    term: "Homeostasis",
    definition:
      "The maintenance of a constant internal environment in living organisms",
  },
  {
    term: "Sensory neurons",
    definition: "Neurons that carry impulses from receptors",
  },
  {
    term: "Aqueous humour",
    definition:
      "The watery fluid that supports the cornea and the front chamber of the eye",
  },
  {
    term: "Oestrogen",
    definition: "The hormone produced by the Graafian follicle",
  },
  {
    term: "Luteinising hormone (LH)",
    definition:
      "The hormone responsible for the formation of the corpus luteum",
  },
  {
    term: "Semicircular canals",
    definition:
      "The receptors in the ear that detect changes in the direction and speed of any movement of the body",
  },
  {
    term: "Thyroid-stimulating hormone (TSH)",
    definition: "A hormone which stimulates the secretion of thyroxin",
  },
  {
    term: "Internal fertilisation",
    definition:
      "The type of fertilisation associated with viviparous reproduction",
  },
  {
    term: "Accommodation",
    definition:
      "The series of changes that take place in the shape of the lens and the eyeball in response to the distance of an object from the eye",
  },
  {
    term: "Vivipary",
    definition:
      "A type of reproduction in humans where the foetus develops inside the uterus",
  },
  {
    term: "Geotropism",
    definition: "The movement of part of a plant in response to gravity",
  },
  {
    term: "Puberty",
    definition:
      "The stage in humans when sexual maturity is reached in males and females",
  },
  {
    term: "Stimulus",
    definition:
      "A change in the internal or external environment that will be detected by a receptor and converted into an impulse",
  },
  {
    term: "Grommets",
    definition:
      "Small tubes placed in the tympanic membrane to drain liquid from the middle ear",
  },
  {
    term: "Pinna",
    definition:
      "Part of the human ear that directs sound waves into the auditory canal",
  },
  {
    term: "Zygote",
    definition: "The diploid cell formed by the process of fertilisation",
  },
  {
    term: "Dendrite",
    definition:
      "A part of the neuron that conducts impulses towards the cell body",
  },
  {
    term: "Medulla oblongata",
    definition: "The part of the brain that controls the heart rate",
  },
  {
    term: "Homeostasis",
    definition:
      "The maintenance of a constant internal environment in the body within certain limits",
  },
  {
    term: "Abscisic acid",
    definition: "The plant growth hormone that promotes seed dormancy",
  },
  {
    term: "Follicle-stimulating hormone (FSH)",
    definition: "A hormone that stimulates the maturation of sperm",
  },
  {
    term: "Autonomic nervous system",
    definition:
      "The part of the peripheral nervous system that controls involuntary actions",
  },
  {
    term: "Abscisic acid",
    definition:
      "A plant hormone that causes leaves to fall off trees in autumn",
  },
  {
    term: "Allantois",
    definition: "The structure in the amniotic egg that stores wastes",
  },
  {
    term: "Endometrium",
    definition:
      "The inner lining of the uterus where implantation of the embryo occurs",
  },
  {
    term: "Fallopian tube",
    definition:
      "Part of the female reproductive system where fertilisation occurs",
  },
  {
    term: "External fertilisation",
    definition:
      "A type of fertilisation in which the nucleus of a sperm fuses with the nucleus of an ovum outside the body of the female",
  },
  {
    term: "Amniotic egg",
    definition:
      "A type of egg where the embryo develops inside a fluid-filled sac which is surrounded by a shell",
  },
  {
    term: "Luteinising hormone (LH)",
    definition:
      "A hormone that stimulates the development of the corpus luteum",
  },
  {
    term: "Astigmatism",
    definition:
      "A disorder of the eye caused by the curvature of the lens or cornea being uneven, resulting in distorted images",
  },
  {
    term: "Corpus callosum",
    definition:
      "The structure that connects the left and right hemispheres of the brain, allowing communication between them",
  },
  {
    term: "Optic nerve",
    definition: "The nerve that carries impulses from the retina to the brain",
  },
  {
    term: "Antidiuretic hormone (ADH)",
    definition: "The hormone responsible for osmoregulation",
  },
  {
    term: "Epididymis",
    definition:
      "The place where young immature sperm cells are temporarily stored in males until they mature",
  },
  {
    term: "Antidiuretic hormone (ADH)",
    definition:
      "The hormone that controls the concentration of water in the blood",
  },
  {
    term: "Thyroxine",
    definition: "The hormone that increases the basic metabolic rate",
  },
  {
    term: "Morula",
    definition: "An early-stage embryo consisting of a solid ball of cells",
  },
  {
    term: "Pancreas",
    definition:
      "A gland of the digestive system that is both endocrine and exocrine",
  },
  {
    term: "Pituitary gland",
    definition:
      "The gland responsible for the production of the growth hormone",
  },
  {
    term: "Blind spot",
    definition: "A part of the retina where no photoreceptors are found",
  },
  {
    term: "Insulin",
    definition:
      "The hormone which increases the absorption of glucose by the cells",
  },
  {
    term: "Vagina",
    definition:
      "A structure in the female reproductive system where semen is deposited during copulation",
  },
  {
    term: "Gestation",
    definition: "The period of development of the foetus in the uterus",
  },
  {
    term: "Phototropism",
    definition: "The response of a part of a plant to a light stimulus",
  },
  {
    term: "Choroid",
    definition:
      "A structure in the eye that absorbs light to prevent internal reflection",
  },
  {
    term: "Cleidoic egg",
    definition:
      "The type of egg produced by reptiles that has extra-embryonic membranes",
  },
  {
    term: "Precocial development",
    definition:
      "The type of development in birds where the hatchlings' eyes are open and their bodies are covered with down feathers",
  },
  {
    term: "Cerebellum",
    definition: "The part of the brain that receives impulses from the maculae",
  },
  { term: "Choroid", definition: "The dark pigmented layer of the eye" },
  {
    term: "Hypothalamus",
    definition: "The part of the brain that controls body temperature",
  },
  {
    term: "Carbon dioxide",
    definition:
      "The gas in the blood which, when increased, causes an increase in the breathing rate",
  },
  {
    term: "Herbicide",
    definition:
      "A substance containing plant hormones used to kill unwanted plants",
  },
  {
    term: "Maculae",
    definition:
      "Receptors that provide information about the position of the head",
  },
  {
    term: "Chorion",
    definition:
      "The membrane that together with the endometrium forms the placenta",
  },
  {
    term: "Endocrine system",
    definition:
      "The system in the body that regulates processes by secreting hormones directly into the blood",
  },
  {
    term: "Spermatogenesis",
    definition: "The production of male gametes through meiosis",
  },
  {
    term: "Thorns",
    definition:
      "Sharp structures found in plants for protection from herbivores",
  },
  {
    term: "Multiple sclerosis",
    definition:
      "A disorder of the nervous system that is characterised by the breakdown of the myelin sheath of neurons",
  },
  {
    term: "Neurotransmitters",
    definition:
      "Substances that allow the transmission of nerve impulses between nerve cells",
  },
];

// --- Paper 2 terms
const glossaryP2 = [
  {
    term: "DNA fingerprinting",
    definition:
      "The analysis of DNA samples to identify individuals or relationships between individuals",
  },
  {
    term: "Centromere",
    definition: "The structure holding two chromatids together in a chromosome",
  },
  {
    term: "Centrioles",
    definition:
      "The structure in an animal cell that gives rise to spindle fibres during cell division",
  },
  { term: "Ribose", definition: "The sugar found in RNA" },
  {
    term: "DNA replication",
    definition:
      "The process during which a DNA molecule makes an exact copy of itself",
  },
  {
    term: "Punctuated equilibrium",
    definition:
      "The theory that describes evolution as consisting of long periods of little/no change alternating with short periods of rapid change",
  },
  {
    term: "Meiosis",
    definition:
      "The type of cell division that occurs in the production of gametes",
  },
  {
    term: "Diploid",
    definition:
      "Chromosome condition describing the presence of two sets of chromosomes in a cell",
  },
  {
    term: "Autosomes",
    definition:
      "The 22 pairs of chromosomes in the human karyotype that is not associated with gender",
  },
  {
    term: "Anaphase I",
    definition:
      "The phase of meiosis where the two chromosomes of each homologous pair are pulled to the opposite pole",
  },
  {
    term: "Double helix",
    definition: "The shape of the twisted strands of DNA",
  },
  {
    term: "Transcription",
    definition:
      "The phase of protein synthesis during which information is copied from DNA to mRNA",
  },
  {
    term: "Hydrogen bonds",
    definition: "The bonds between two nitrogenous bases",
  },
  {
    term: "DNA replication",
    definition: "The process of making new DNA from existing DNA",
  },
  {
    term: "Transfer RNA (tRNA)",
    definition:
      "A type of nucleic acid on which is located the anti-codon for protein synthesis",
  },
  {
    term: "Haploid",
    definition:
      "Chromosome condition of a cell which has only a single set of chromosomes",
  },
  {
    term: "Alleles",
    definition:
      "Alternate forms of a gene situated on corresponding positions of homologous chromosomes and influencing the same characteristic",
  },
  {
    term: "Allopatric speciation",
    definition:
      "Formation of a new species when a physical barrier has divided a population",
  },
  {
    term: "Genetic engineering",
    definition:
      "The use of technology to change the genetic structure of an organism",
  },
  {
    term: "Phenotype",
    definition: "The appearance of an organism because of its genetic make-up",
  },
  {
    term: "Centromere",
    definition:
      "The region of a chromosome where sister chromatids are attached to each other",
  },
  {
    term: "Cytokinesis",
    definition:
      "The division of cytoplasm that occurs after a cell nucleus has divided",
  },
  {
    term: "Mutations",
    definition:
      "Changes in the structure of DNA that might be harmful or beneficial",
  },
  {
    term: "Genes",
    definition:
      "Specific lengths of DNA which carry the codes for characteristics of organisms",
  },
  { term: "Palaeontology", definition: "The study of fossils" },
  {
    term: "Theory",
    definition:
      "An explanation for something that has been observed in nature, and which can be supported by facts, laws and tested hypothesis",
  },
  {
    term: "Phylogenetic tree",
    definition:
      "A diagram that shows possible evolutionary relationships between groups of organisms",
  },
  {
    term: "Mitosis",
    definition:
      "Type of cell division during which the chromosome number does not change",
  },
  {
    term: "Extinction",
    definition:
      "The process which results in all the individuals of a particular species dying out",
  },
  {
    term: "Species",
    definition:
      "Organisms that are able to interbreed and produce fertile offspring",
  },
  {
    term: "Variation",
    definition: "Differences among organisms of the same species",
  },
  {
    term: "Fossils",
    definition:
      "The remains or traces of prehistoric life preserved in rocks of the Earth's crust",
  },
  {
    term: "Crossing over",
    definition:
      "The exchange of genes between homologous chromosomes that brings about variation",
  },
  {
    term: "Foramen magnum",
    definition:
      "An opening on primate skulls through which the spinal cord passes",
  },
  {
    term: "Cloning",
    definition:
      "The biotechnological production of genetically identical offspring",
  },
  {
    term: "Non-disjunction",
    definition: "Failure of one or more chromosomes to separate during meiosis",
  },
  {
    term: "Polyploidy",
    definition:
      "The condition in which an organism has more than two complete sets of chromosomes in a cell",
  },
  {
    term: "Homologous structures",
    definition: "Similar structures that descend from a common ancestor",
  },
  {
    term: "Nucleotides",
    definition: "Monomers/Building blocks of a nucleic acid",
  },
  {
    term: "Interphase",
    definition: "The phase during which DNA replicates prior to cell division",
  },
  {
    term: "Recessive allele",
    definition:
      "An allele that does not influence the phenotype when found in the heterozygous condition",
  },
  {
    term: "Genetic engineering",
    definition:
      "The manipulation of the genetic material of an organism to get desired changes",
  },
  {
    term: "Selective breeding",
    definition:
      "The deliberate breeding of organisms for desirable characteristics selected by humans",
  },
  {
    term: "Colour blindness",
    definition:
      "A sex-linked disorder that affects the photoreceptors in the eye",
  },
  {
    term: "Non-disjunction",
    definition: "The defect in cell division that leads to Down syndrome",
  },
  {
    term: "Chromosome",
    definition:
      "The structure that is made up of two chromatids joined by a centromere",
  },
  {
    term: "Law of Segregation",
    definition:
      "The law that describes how alleles are separated from one another during the formation of gametes",
  },
  {
    term: "Heterozygous",
    definition:
      "A genotype consisting of different alleles for a specific trait at a given locus",
  },
  { term: "Double helix", definition: "The natural shape of the DNA molecule" },
  {
    term: "Autosomes",
    definition: "Chromosomes other than the sex chromosomes",
  },
  {
    term: "Polyploidy",
    definition:
      "More than two haploid sets of chromosomes found in the cells of an organism",
  },
  { term: "Genome", definition: "All the genes of a particular species" },
  {
    term: "Monohybrid cross",
    definition: "A genetic cross involving only one characteristic",
  },
  {
    term: "Stem cells",
    definition:
      "Unspecialised cells which are capable of giving rise to any other cells of the same organism",
  },
  {
    term: "Cancer",
    definition: "The disease caused by uncontrolled division of cells",
  },
  {
    term: "Carrier",
    definition:
      "An individual that has one dominant and one recessive allele for a particular characteristic",
  },
  {
    term: "Codominance",
    definition:
      "A genetic cross in which both alleles are expressed equally in the phenotype",
  },
  {
    term: "Phenotype",
    definition: "The physical and functional expression of a gene",
  },
  {
    term: "Autosomes",
    definition: "Chromosomes that are not responsible for sex determination",
  },
  {
    term: "Transitional fossils",
    definition:
      "Fossil species that have some traits of two different groups of organisms that are thought to be related",
  },
  {
    term: "Vestigial structures",
    definition:
      "Structures inherited from the ancestor that are small, poorly developed and have no useful function",
  },
  {
    term: "Continental drift",
    definition: "The breaking up of Pangaea to form different land masses",
  },
  {
    term: "Anticodon",
    definition: "The triplet of bases found in a tRNA molecule",
  },
  {
    term: "Haemophilia",
    definition:
      "A genetic disorder characterised by the absence of a blood clotting factor",
  },
  {
    term: "Sickle cell anaemia",
    definition:
      "An inherited disease that affects haemoglobin and changes the shape of red blood corpuscles",
  },
  {
    term: "Genotype",
    definition:
      "The genetic make-up of an organism in respect of the alleles it possesses",
  },
  {
    term: "Bipedalism",
    definition: "The ability of an organism to walk on two feet",
  },
  {
    term: "Karyotype",
    definition:
      "The number, shape and arrangement of all the chromosomes in the nucleus of a somatic cell",
  },
  {
    term: "Homologous chromosomes",
    definition:
      "A pair of chromosomes, one inherited from each parent, that have the same genes at the same loci",
  },
  {
    term: "Translation",
    definition:
      "The stage in the process of the formation of a protein determined by the codons in the mRNA",
  },
  {
    term: "Incomplete dominance",
    definition:
      "The type of inheritance which expresses a third phenotype for a particular trait",
  },
  {
    term: "Independent variable",
    definition: "A variable that is manipulated during an investigation",
  },
  {
    term: "Albinism",
    definition:
      "The condition that results from the absence of skin pigmentation",
  },
  { term: "Peptide bonds", definition: "The bonds formed between amino acids" },
  {
    term: "Nuclear pores",
    definition:
      "Openings in the nuclear membrane that allow mRNA to leave the nucleus",
  },
  {
    term: "Homologous chromosomes",
    definition: "Chromosomes that carry the same set of genes",
  },
  {
    term: "Spindle fibres",
    definition:
      "The structure responsible for pulling chromosomes to the poles of an animal cell during cell division",
  },
  {
    term: "Binocular vision",
    definition:
      "The type of vision shared by apes and humans that allows for depth perception",
  },
  {
    term: "Dihybrid cross",
    definition: "A genetic cross involving two characteristics",
  },
  {
    term: "Complete dominance",
    definition:
      "The type of inheritance where the dominant allele masks the expression of the recessive allele in the heterozygous condition",
  },
  {
    term: "Population",
    definition:
      "A group of organisms of the same species in a specific habitat",
  },
  { term: "Hominidae", definition: "The family to which humans belong" },
  {
    term: "Down syndrome",
    definition:
      "A human disorder caused by non-disjunction of chromosome pair 21",
  },
  {
    term: "Transcription",
    definition:
      "The stage of protein synthesis during which mRNA forms from DNA",
  },
  {
    term: "Homologous structures",
    definition:
      "Structures in different organisms that have a similar basic plan which suggests that they share a common ancestor",
  },
  {
    term: "Discontinuous variation",
    definition:
      "The type of variation in a population with no intermediate phenotypes",
  },
  {
    term: "Ribosome",
    definition:
      "The organelle in the cytoplasm which is the site of protein synthesis",
  },
  {
    term: "Hypothesis",
    definition: "A testable statement that may be accepted or rejected",
  },
  {
    term: "Transfer RNA (tRNA)",
    definition: "The type of nucleic acid that carries a specific amino acid",
  },
  {
    term: "Deoxyribose",
    definition: "The type of sugar found in a DNA molecule",
  },
  {
    term: "Out of Africa hypothesis",
    definition:
      "The hypothesis which supports migration of human ancestors from the point of origin",
  },
  {
    term: "Dihybrid cross",
    definition: "A genetic cross involving two different characteristics",
  },
  {
    term: "Biodiversity",
    definition: "The variety of life forms that exist on Earth",
  },
  {
    term: "Australopithecus",
    definition: "The genus of the fossil 'Little Foot'",
  },
  {
    term: "Pedigree chart",
    definition:
      "A diagram showing the inheritance of genetic disorders over many generations",
  },
  { term: "Homo habilis", definition: "The first Homo species to use tools" },
  {
    term: "Uracil",
    definition: "Nitrogenous base found only in RNA molecules",
  },
  {
    term: "Continuous variation",
    definition:
      "Type of variation within a population in which there is a range of intermediate phenotypes",
  },
  {
    term: "Prognathism",
    definition: "The condition of having protruding jaws",
  },
  {
    term: "Natural selection",
    definition:
      "The process that enables organisms with favourable characteristics to survive and reproduce, whereas organisms with unfavourable characteristics die",
  },
];
