const fakeData = [
    {student: 'Dustin', skills: ['guitar','dev skills','bike skills']},  //this will be s[0]
    {student: 'Jill', skills: ['makeup','vet','piano']},  //this will be s[1]
    {student: 'Jessica', skills: ['wii-u tennis','teaching','gymnastics']},  //this will be s[2]
    {student: 'Ryan', skills: ['bass','plumbing','skateboard']},  //this will be s[3]
    {student: 'Irene', skills: ['dev skills', 'art', 'gardening']}      //this will be s[4]    
];

function getAll() {
    return fakeData;
}
function create(data, idx) {
    fakeData[idx].skills.push(data);
}
function getOne(id) {
    return fakeData[id];
}
function deleteThis(idx) {
    fakeData[idx].skills.splice(idx, 1);
}
module.exports = {
    getAll,
    create,
    deleteThis,
    getOne
};