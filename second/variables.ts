/**
 * Type for Array
 * names: string[]
 */
const names: string[] = ["Aarav", "Diya", "Kunal", "Meera", "Rohan", "Ishita"];
const marks: number[] = [73, 18, 92, 47, 65, 29];

names.forEach((name, i) => {
  //   console.log(
  //     `${name} got ${marks[i]} marks on final exam, and he ${marks[i] > 60 ? "got First Division" : marks[i] > 40 ? "got Second Division" : "Failed :("} `,
  //   );
});

/**
 *Types for Function
 */
const printMysalary: (
  workExperience: number,
  employeeName: string,
  compnayName: string,
  currentlyWorking: boolean,
) => void = (
  workExperience: number,
  employeeName: string,
  compnayName: string,
  currentlyWorking: boolean,
) => {
  if (currentlyWorking)
    console.log(
      `${employeeName} works on ${compnayName} and hold ${workExperience} years of experience in it's field`,
    );
  else console.log(`${employeeName} can't working any company `);
};

printMysalary(2, "Ayush", "TCS", true);
printMysalary(4, "Ravi", "Infosys", false);
printMysalary(1, "Neha", "Wipro", true);
printMysalary(3, "Karan", "HCL", false);
printMysalary(5, "Sneha", "Accenture", true);
