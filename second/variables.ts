/**
 * Type for strings
 */
const names: string[] = ["Aarav", "Diya", "Kunal", "Meera", "Rohan", "Ishita"];
const marks: number[] = [73, 18, 92, 47, 65, 29];

names.forEach((name, i) => {
  console.log(
    `${name} got ${marks[i]} marks on final exam, and he ${marks[i] > 60 ? "got First Division" : marks[i] > 40 ? "got Second Division" : "Failed :("} `,
  );
});
