export function translate(rna: string): string[] {
    const codonToProtein: { [codon: string]: string } = {
        "AUG": "Methionine",
        "UUU": "Phenylalanine",
        "UUC": "Phenylalanine",
        "UUA": "Leucine",
        "UUG": "Leucine",
        "UCU": "Serine",
        "UCC": "Serine",
        "UCA": "Serine",
        "UCG": "Serine",
        "UAU": "Tyrosine",
        "UAC": "Tyrosine",
        "UGU": "Cysteine",
        "UGC": "Cysteine",
        "UGG": "Tryptophan",
        "UAA": "STOP",
        "UAG": "STOP",
        "UGA": "STOP"
    };

    let proteinSequence: string[] = [];
    let codon: string;

    // Loop through the RNA sequence, processing codons
    for (let i = 0; i < rna.length; i += 3) {
        codon = rna.substr(i, 3);

        // Check if codon is a stop codon
        if (codonToProtein[codon] === "STOP") {
            break; // Terminate translation
        }

        // Translate codon to protein
        const protein = codonToProtein[codon];
        if (protein) {
            proteinSequence.push(protein);
        } else {
            throw new Error("Invalid codon detected.");
        }
    }

    return proteinSequence;
}
