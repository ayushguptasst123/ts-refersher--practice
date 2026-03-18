/**
 * The interface keys must be the same as those of the reference object.
 */
interface Human {
  havePet: boolean;
  isWalk: boolean;
  name: string;
  gender: string;
  canEat: boolean;
}
/**
 * It doesn't mean we have to add all the values to the interface.
 * We can add values as per our needs.
 */
interface halfData {
  name: string;
  gender: string;
  havePet: boolean;
}

const ramesh = {
  havePet: true,
  isWalk: true,
  name: "Ramesh",
  gender: "male",
  canEat: true,
  printData(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Is he walking: ${this.isWalk}`);
    console.log(`will ${this.name} have pet?  ${this.havePet}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Eating? ${this.canEat}`);
  },
};

/**
 * @param profile
 * Instead of writing all the annotations, we can create an interface and put all the variables there.
 */
const printProfile = (profile: { printData(): void }) => {
  profile.printData();
};

const printHalfData = (data: halfData) => {
  console.log(
    `${data.name} is ${data.gender} and it Like pet? ${data.havePet}`,
  );
};

printHalfData(ramesh);
console.log("*".repeat(30));
console.log();
printProfile(ramesh);
