const fakeData = [
    {student: 'Dustin', skills: ['guitar','dev skills','bike skills']},
    {student: 'Irene', skills: ['dev skills', 'art', 'gardening']}
];

function getAll() {
    return fakeData;
}
function getOne(id) {
    return fakeData[id];
}
module.exports = {
    getAll,
    getOne
};