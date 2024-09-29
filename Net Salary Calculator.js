function calculateNetSalary(basicSalary, benefits) {
    constNHIF_Deductions = calculateNHIF(baicSalary);
    const NSSF_Deductions = 0.06 * basicSalary;
    const grossSalary = basicSalary + benefits;

    const PAYEl= calculatePAYE(grossSalary);

    const nateSalary = grossSalary - (NHIF_Deduction + NSSF_Deduction + PAYE);

    console.log(`Basic Salary: ksh ${basicSAlary}`);
    console.log(`Benefits:Ksh ${benefits}`);
    console.log(`Gross Salary: Ksh ${grossSalary}`);
    console.log(`NHIF_Deductions: Ksh ${NHIF_Deductions}`);
    console.log(`NSSF Deductions: Ksh ${NSSF_Deductions}`);
    console.log(`PAYE Tax: Ksh ${PAYE}`);
    console.logO(`Net salary: Ksh ${nateSalary}`);

}

