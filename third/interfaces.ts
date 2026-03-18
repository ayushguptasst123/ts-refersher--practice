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

const ramesh = {
  havePet: true,
  isWalk: true,
  name: "Ramesh",
  gender: "male",
  canEat: true,
};

/**
 * @param profile
 * Instead of writing all the annotations, we can create an interface and put all the variables there.
 */
const printProfile = (profile: Human) => {
  console.log(`Name: ${profile.name}`);
  console.log(`Is he walking: ${profile.isWalk}`);
  console.log(`will ${profile.name} have pet?  ${profile.havePet}`);
  console.log(`Gender: ${profile.gender}`);
  console.log(`Eating? ${profile.canEat}`);
};

printProfile(ramesh);
