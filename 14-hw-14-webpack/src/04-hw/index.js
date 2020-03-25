export default function getListOfStudents() {
    const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
    return `
    Pair 1: ${[students[0], students[2]]}; 
    Pair 2: ${[students[1], students[3]]}; 
    Pair 3: ${[students[4], students[5]]}.`;
}