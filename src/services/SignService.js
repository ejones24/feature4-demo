import sampleData from "../data/sampleData.json";

// "Parses" the raw JSON object into the shape the component needs
export function getParsedSignData() {
  return {
    letter: sampleData.letter.toUpperCase(),
    description: sampleData.description,
  };
}
